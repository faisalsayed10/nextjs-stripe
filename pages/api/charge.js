import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "INR",
      description: "Food.",
      payment_method: id,
      confirm: true,
    });
    return res.status(200).json(payment);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.raw.message })
  }
};
