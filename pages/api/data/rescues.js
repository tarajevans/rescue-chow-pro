import { Rescues } from "../../../models/Rescues";
const mapRescues = (rescues) => {
    return "hi";
};

const newRescue = {
    name: "NEW RESCUE",
    website: "https://localhost:3000",
    description: "This is a test rescue object",
    image: "charity-jrt.png",
    adminUser: "647f1c894792c4561a8541a4",
    authUsers: [],
};

const handler = async (req, res) => {
    if (req.method === "GET") {
        const result = await Rescues.find();
        if (!result) {
            console.log("ERROR");
        }
        return res.status(200).json(result);
    }

    if (req.method === "POST") {
        const result = await Rescues.create(newRescue);
        const data = await result.json();
        console.log(data);
    }
};

export default handler;
