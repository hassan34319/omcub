import { loadStripe, Stripe } from "@stripe/stripe-js";

// https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe#loading-stripe.js
// Singleton Pattern Initializes stripe only once by checking if promise already exists? If not than it initializrs
let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABE_KEY!);

  }
  return stripePromise;
};

export default getStripe;