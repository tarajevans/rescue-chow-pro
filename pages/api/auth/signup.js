import { User } from "../../../models/shopping/User";
import bcrypt, { hash } from "bcrypt";

const encryptPassword = async (passwordIn) => {
    const hashed = await hash(passwordIn, 12);
    return hashed;
};

const doesEmailExist = async (emailIn) => {
    const foundUser = await User.findOne({ email: emailIn });
    if (foundUser) {
        return true;
    } else {
        return false;
    }
};

const doesUsernameExist = async (usernameIn) => {
    const foundUser = await User.findOne({ username: usernameIn });
    if (foundUser) {
        return true;
    } else {
        return false;
    }
};

const signup = async (req, res) => {
    const data = req.body;

    if (req.method === "POST") {
        const { email, username, password } = data;

        if (
            !email ||
            !email.includes("@") ||
            !password ||
            password.trim().length < 7 ||
            username.trim().length < 1
        ) {
            res.status(422).json({ message: " Invalid input" });
            return;
        }

        const emailExists = await doesEmailExist(email);
        if (!emailExists) {
            const usernameExists = await doesUsernameExist(username);
            if (!usernameExists) {
                const hashed = await encryptPassword(password);
                const newUser = await User.create({
                    email: email,
                    username: username,
                    password: hashed,
                });
                res.status(200).json(newUser);
            } else {
                res.status(417).json({
                    message: "username already assigned to an account",
                });
            }
        } else {
            res.status(417).json({
                message: "email already assigned to an account",
            });
        }
    }
};

export default signup;
