import * as React from "react"
import {mockPacks} from "../services/Pack";
import {Stripe} from "../components/Stripe";



const packs = mockPacks();
// markup
const PaymentPage = () => {
    return (
        <main className="bg-gray-200 h-full w-screen">
            <header className="w-screen p-4 justify-center flex absolute">
                <h1 className="text-3xl">guitarwag</h1>
            </header>
            <div className="bg-white p-24 m-8">
                <Stripe />
            </div>
        </main>
    )
}

export default PaymentPage
