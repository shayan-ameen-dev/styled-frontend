import Stripe from 'stripe';
import { getSession } from '@auth0/nextjs-auth0';

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  const session = getSession(req, res);
  const user = session?.user;
  if (user) {
    const stripeId = user['http://localhost:3000/stripe_customer_id'];

    if (req.method === 'POST') {
      try {
        const session = await stripe.checkout.sessions.create({
          submit_type: 'pay',
          mode: 'payment',
          customer: stripeId,
          payment_method_types: ['card'],
          shipping_address_collection: {
            allowed_countries: ['US'],
          },
          shipping_options: [
            { shipping_rate: 'shr_1Lmz6FKOCYjO1ZACTlQfkDlA' },
            { shipping_rate: 'shr_1Lmz6pKOCYjO1ZACkMvatQHh' },
          ],
          allow_promotion_codes: true,
          line_items: req.body.map((item) => ({
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          })),
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}`,
        });

        res.status(200).json(session);
      } catch (error) {
        res.status(error.statusCode || 500).json(error.message);
      }
    }
  } else {
    if (req.method === 'POST') {
      try {
        const session = await stripe.checkout.sessions.create({
          submit_type: 'pay',
          mode: 'payment',
          payment_method_types: ['card'],
          shipping_address_collection: {
            allowed_countries: ['US'],
          },
          shipping_options: [
            { shipping_rate: 'shr_1Lmz6FKOCYjO1ZACTlQfkDlA' },
            { shipping_rate: 'shr_1Lmz6pKOCYjO1ZACkMvatQHh' },
          ],
          allow_promotion_codes: true,
          line_items: req.body.map((item) => ({
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          })),
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}`,
        });

        res.status(200).json(session);
      } catch (error) {
        res.status(error.statusCode || 500).json(error.message);
      }
    }
  }
}
