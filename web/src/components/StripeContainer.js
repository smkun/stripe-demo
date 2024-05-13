import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
    "pk_test_51PFzqTFBWDN7KFlS4tuNLa470ygLXgcY1ulz4i0CSo0KFS0wxha6CpSlYZ2tEJytHdCiM7bI9USI8XQPPVAF2dEL00Zwl64L0n";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    );
}
