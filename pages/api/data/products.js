import { Product } from "../../../models/shopping/Product";

const handler = async (req, res) => {

    if (req.method === "GET") {
        const result = await Product.find().populate("category");
        if (!result) {
            console.log("ERROR");
        }
        return res.status(200).json(result);
    }

    if (req.method === "POST"){
        const body = await JSON.parse(req.body);
        const result = await Product.create(body)
    }

    if (req.method === "PUT"){
        
        const body = await JSON.parse(req.body);
        let result;

        
        console.log(body)

        if ("name" in body) {
            result = await Product.findByIdAndUpdate(
                body.prodId,
                { name: body.name },
                { new: true }
            );
        }

        if ("price" in body) {
            result = await Product.findByIdAndUpdate(
                body.prodId,
                { price: body.price },
                { new: true }
            );
        }

        if ("description" in body) {
            result = await Product.findByIdAndUpdate(
                body.prodId,
                { description: body.description },
                { new: true }
            );
        }

        if ("category" in body) {
            result = await Product.findByIdAndUpdate(
                body.prodId,
                { category: body.category },
                { new: true }
            );
        }

        if ("isCharitable" in body) {
            result = await Product.findByIdAndUpdate(
                body.prodId,
                { isCharitable: body.isCharitable },
                { new: true }
            );
        }

        if("isActive" in body){
            
            result = await Product.findByIdAndUpdate(
                body.prodId,
                { isActive: body.isActive },
                { new: true }
            );
        }

        return res.status(200).json(result);
    }
};

export default handler;
