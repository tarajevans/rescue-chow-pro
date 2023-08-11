import { resolve } from "path";
import { User } from "../../../../models";

const handler = async (req, res) => {
    if (req.method === "GET") {
        const response = await User.find().populate("affiliateRescue");

        if (!response) {
            console.log("ERROR No Response, line 10");
            return;
        }

        res.status(200).json(response);
    }

    if (req.method === "PUT") {
        const body = await JSON.parse(req.body);
        let result;

        console.log(body)

        if ("firstName" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { firstName: body.firstName },
                { new: true }
            );
        }

        if ("lastName" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { lastName: body.lastName },
                { new: true }
            );
        }

        if ("username" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { username: body.username },
                { new: true }
            );
        }

        if ("email" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { email: body.email },
                { new: true }
            );
        }

        if ("addrNumber" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { addrNumber: body.addrNumber },
                { new: true }
            );
        }

        if ("addrUnitNumb" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { addrUnitNumb: body.addrUnitNumb },
                { new: true }
            );
        }

        if ("addrStreet" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { addrStreet: body.addrStreet },
                { new: true }
            );
        }

        if ("addrCity" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { addrCity: body.addrCity },
                { new: true }
            );
        }

        if ("addrProv" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { addrProv: body.addrProv },
                { new: true }
            );
        }

        if ("addrPostCode" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { addrPostCode: body.addrPostCode },
                { new: true }
            );
        }

        if ("role" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { role: body.role },
                { new: true }
            );
        }

        if ("stripeId" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { stripeId: body.stripeId },
                { new: true }
            );
        }

        if ("isAffiliate" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { isAffiliate: body.isAffiliate },
                { new: true }
            );
        }

        if ("affiliateRescue" in body) {
            result = await User.findByIdAndUpdate(
                body.userId,
                { affiliateRescue: body.affiliateRescue },
                { new: true }
            );
        }

        return res.status(200).json(result);
    }
};

export default handler;
