import {Rescues} from "../../../models/Rescues";
const mapRescues = (rescues) => {
    return "hi";
};

const handler = async (req, res) => {
    
    // if (req.method === "POST") {
        const result = await Rescues.find();
        if(!result){
            console.log("ERROR");
        }
        return res.status(200).json(result);
    // }
};

export default handler;
