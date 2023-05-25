import {Rescuese} from "../../../models/Rescues";
const mapRescues = (rescues) => {
    return "hi";
};

const handler = async (req, res) => {
    
    // if (req.method === "POST") {
        const result = await Rescuese.find();
        if(!result){
            console.log("ERROR");
        }
        return res.status(200).json(result);
    // }
};

export default handler;
