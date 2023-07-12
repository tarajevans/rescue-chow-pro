import Stripe from "stripe";
import { buffer } from "micro";
import { Order } from "../../../models";

export const config = {
    api: {
        bodyParser: false,
    },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { 
    apiVersion: "2020-08-27",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const handler = async (req, res) => {
    if (req.method === "POST") {
        const buf = await buffer(req);
        const sig = req.headers["stripe-signature"];

        let event;
        try {
            event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);

            let address;
            if (event?.data?.object?.shipping_details?.address) {
                address = event.data.object.shipping_details.address;
            }
            // Handle events here
            switch (event.type) {
                case "checkout.session.completed":
                    // find the order in the database via the stripeSessionId
                    const thisOrder = await Order.findOne({
                        stripeSessionId: event.data.object.id,
                    });

                    // add the shipping address information

                    if (address.line1) {
                        thisOrder.shipLine1 = address.line1;
                    }

                    if (address.line2) {
                        thisOrder.shipLine2 = address.line2;
                    }

                    if (address.city) {
                        thisOrder.shipCity = address.city;
                    }

                    if (address.country) {
                        thisOrder.shipCountry = address.country;
                    }

                    if (address.postal_code) {
                        thisOrder.shipPostalCode = address.postal_code;
                    }

                    if (address.state) {
                        thisOrder.shipProv = address.state;
                    }

                    thisOrder.paymentStatus = "success";

                    // set status to success
                    await thisOrder.save();
                    break;

                case "checkout.session.async_payment_succeeded":
                    // find the order in the database via the stripeSessionId
                    const result = await Order.findOne({
                        stripeSessionId: event.data.object.id,
                    });

                    // add the shipping address information

                    if (address.line1) {
                        result.shipLine1 = address.line1;
                    }

                    if (address.line2) {
                        result.shipLine2 = address.line2;
                    }

                    if (address.city) {
                        result.shipCity = address.city;
                    }

                    if (address.country) {
                        result.shipCountry = address.country;
                    }

                    if (address.postal_code) {
                        result.shipPostalCode = address.postal_code;
                    }

                    if (address.state) {
                        result.shipProv = address.state;
                    }

                    // set status to success
                    result.paymentStatus = "success";

                    await result.save();
                    break;

                case "checkout.session.async_payment_failed":
                    // find the order in the database via the stripeSessionId
                    const res = await Order.findOne({
                        stripeSessionId: event.data.object.id,
                    });

                    // set status to failed
                    res.paymentStatus = "failed";
                    
                    await res.save();
                    break;

                case "checkout.session.expired":
                    // find the order in the database via the stripeSessionId
                    const resOrder = await Order.findOne({
                        stripeSessionId: event.data.object.id,
                    });

                    // set status to failed
                    resOrder.paymentStatus = "failed";

                    
                    await resOrder.save();
                    break;

                // additional cases here

                default:
                // capture any unhandled cases received???
            }
        } catch (err) {
            console.log(err);
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        res.json({ received: true });
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};

export default handler;
