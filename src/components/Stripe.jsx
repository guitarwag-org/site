import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
        </form>
    );
};

const stripePromise = loadStripe('pk_test_51K88XyCrmjniYqrtczFGpUjWpiJ5SqdYFylbgxYndJcGiTDeppDg88RU2mwrQMG2CHBWvXmi0z4wWjmb6k7XuK2N00lXucjGrs');

export const Stripe = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);