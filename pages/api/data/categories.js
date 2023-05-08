import {Category} from "../../../models/shopping/Category";

const handler = async (req, res) => {
    
    // if (req.method === "POST") {
        const result = await Category.find();
        if(!result){
            console.log("ERROR");
        }
        return res.status(200).json(result);
    // }
};

export default handler;