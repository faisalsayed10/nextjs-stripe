import Head from "next/head";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Stripe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Elements stripe={stripePromise}><CheckoutForm /></Elements>
      </main>
    </div>
  );
}
