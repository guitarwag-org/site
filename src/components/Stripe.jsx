import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51K88XyCrmjniYqrtczFGpUjWpiJ5SqdYFylbgxYndJcGiTDeppDg88RU2mwrQMG2CHBWvXmi0z4wWjmb6k7XuK2N00lXucjGrs');

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: 'price_1K8vbwCrmjniYqrtUX2sd8Ny',
            quantity: 1,
          },
          {
            price: 'price_1K8vcQCrmjniYqrtkFnYO5W4',
            quantity: 1,
          },
        ],
        mode: 'payment',
        cancelUrl: window.location.origin,
        successUrl: `${window.location.origin}/success?id=298347982374298372`,
        customerEmail: 'wagner@gmail.com',
      });
      setError(error);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {err && <p className="text-red-700">{err.message}</p>}
      <button type="button" disabled={loading} onClick={handleSubmit} className="bg-gray-300 p-3 hover:bg-gray-400 mt-4 text-black">
        Pay
      </button>
    </form>
  );
};

export const Stripe = () => (
  <CheckoutForm />
);
