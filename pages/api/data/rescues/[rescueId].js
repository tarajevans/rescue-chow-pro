import { Rescues } from "../../../../models";

const handler = async (req, res) => {
    // Fetch data from external API\
    const result = await Rescues.findById(req.query.rescueId);
    

    res.status(200).json(result);
};

export default handler;
