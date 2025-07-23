import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // apiVersion optional
});

// Use the correct secret based on environment
const webhookSecret =
  process.env.NODE_ENV === 'production'
    ? process.env.STRIPE_WEBHOOK_SECRET_LIVE
    : process.env.STRIPE_WEBHOOK_SECRET_LOCAL;

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature') as string;

  console.log("Using webhook secret:", webhookSecret); // debug

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      webhookSecret!
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("✅ Payment received:", session.id, session.customer);
      // TODO: upgrade user in DB here
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook Error:", err);
    if (err instanceof Error) {
      return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }
    return new NextResponse('Webhook Error', { status: 400 });
  }
}
