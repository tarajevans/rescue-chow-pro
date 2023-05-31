import { ItemLine } from "../../../models";

const stripe = require("stripe")(
    "sk_test_51LwAJXFZoRYZwQnKrB1KDnIQTimvYiaK2LxWeGS58kKJYCsj1MTns20e5GJsZJW5cLSM248C2PrsIJau71yxEYhi00CsrFsfQo"
);

const handler = async (req, res) => {
    const body = await JSON.parse(req.body);

    const line_items = [];
    const prodLines = [];

    for (let i = 0; i < body.products.length; i++) {
        let newLine = new ItemLine(body.products[i]);
        const { prodId } = await newLine.populate("prodId");
        prodId.quantity = body.products[i].qnty;
        prodLines.push(prodId);
    }

    for (let i = 0; i < prodLines.length; i++) {
        // generate product id
        const product = await stripe.products.create({
            name: prodLines[i].name,
            description: prodLines[i].description,
            website: prodLines[i].website,
            // images: [`${url}/images/${prodLines[i].image}`]
        });

        // generate price id using the product id
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: prodLines[i].price * 100,
            currency: "cad",
        });
        // add price id to the line items array
        line_items.push({
            price: price.id,
            quantity: prodLines[i].quantity,
        });
    }
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
            allowed_countries: ["CA"],
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 0,
                        currency: "cad",
                    },
                    display_name: "Free shipping",
                    // Delivers between 5-7 business days
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 5,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 7,
                        },
                    },
                },
            },
        ],

        line_items,
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/OrderNow`,
    });
    res.status(200).json(session.id);
};

export default handler;
