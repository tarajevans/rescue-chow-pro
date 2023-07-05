// import { compare } from "bcrypt";
import NextAuth, { NextAuthOption } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../../../models/shopping/User";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import CryptoJS from "crypto-js";
import { getToken } from "next-auth/jwt";

const createRefreshToken = (userIn) => {
    const pvtkey = "PleaseMakeThisAsSecureAsWeCan";
    const random = Math.floor(Math.random() * 10000000000).toString();
    const token = jwt.sign({ rand: random, user: userIn }, pvtkey, {
        expiresIn: 60 * 60 * 24 * 7,
    });
    return encryptString(token);
};
const createAccessToken = () => {
    const pvtkey = "PleaseMakeThisAsSecureAsWeCanAgain";
    const random = Math.floor(Math.random() * 10000000000).toString();
    const token = jwt.sign({ rand: random }, pvtkey, {
        expiresIn: 60 * 60,
    });
    return encryptString(token);
};

const createExpirey = () => {
    const date = Date.now();
    const term = 86400000; // 24 hours - 86400000, 1 hour - 3600000
    const expirey = date + term;
    return expirey;
};

const createTokens = (userIn) => {
    const access = createAccessToken();
    const refresh = createRefreshToken(userIn);
    const expirey = createExpirey();

    return { accessToken: access, refreshToken: refresh, expirey: expirey };
};

const checkRefreshToken = (refreshToken, userId) => {
    const user = User.findById(userId);
    if (!user) {
        console.log("USER NOT FOUND!!!");
        return false;
    }

    if (user.refresh) {
        const decrypted = decryptString(user.refresh);
        if (decrypted === refreshToken) {
            return true;
        } else {
            return false;
        }
    }
};

const refreshAccessToken = (tokenObject, userId) => {
    // - check that the refresh token is valid for the user
    const isTokenValid = checkRefreshToken(tokenObject.refreshToken, userId);
    // - If token is valid then create new tokens
    if (isTokenValid) {
        const tokens = createTokens(userId);
        // - return the tokens
        return tokens;
    }
    return null;

    // const tokenResponse =
};

const decryptString = (stringIn) => {
    const bytes = CryptoJS.AES.decrypt(stringIn, "Super Secret Password");
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};

const encryptString = (inputString) => {
    const cipherText = CryptoJS.AES.encrypt(
        inputString,
        "Super Secret Password"
    ).toString();

    return cipherText;
};

const mapUser = (userIn) => {
    let mappedUser = {};

    if ("isAffiliate" in userIn) {
        Object.assign(mappedUser, { isAffiliate: userIn.isAffiliate });
    }

    if (userIn.affiliateRescue) {
        Object.assign(mappedUser, { affiliateRescue: userIn.affiliateRescue });
    }

    if (userIn._id) {
        Object.assign(mappedUser, { _id: userIn._id });
    }

    if (userIn.username) {
        Object.assign(mappedUser, { username: userIn.username });
    }

    if (userIn.email) {
        Object.assign(mappedUser, { email: userIn.email });
    }

    if (userIn.role) {
        Object.assign(mappedUser, { role: userIn.role });
    }

    // if (userIn.refresh) {
    //     Object.assign(mappedUser, { refreshToken: userIn.refresh });
    // }

    return mappedUser;
};
const mapRefreshTokenUser = (userIn) => {
    let mappedUser = {};

    if (userIn._id) {
        Object.assign(mappedUser, { _id: userIn._id });
    }

    return mappedUser;
};

const verifyPassword = async (password, hashedPassword) => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
};

const doesAccountExists = async (usernameIn) => {
    const foundUser = await User.findOne({ username: usernameIn });
    if (foundUser) {
        return { result: true, user: foundUser };
    }

    return { result: false };
};

const testEncryption = () => {
    const start = "Testing";
    const encript = encryptString(start);
    const decrpt = decryptString(encript);
    const match = () => {
        if (decrpt === start) {
            return "Matches";
        } else {
            return "Doesn't Match";
        }
    };

    console.log(start);
    console.log(encript);
    console.log(decrpt);
    console.log(match);
};

// export const authOptions:

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "jsmith",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                // const user = { username: "testName", name: "J Smith", email: "jsmith@example.com", public: true, scanner: false }

                const { username, password } = credentials;

                const result = await doesAccountExists(username);
                const user = result.user;

                // if no account is found
                if (!user) {
                    // TODO
                    // inform the user and offer to create an account
                    return null;
                }

                if (!verifyPassword(password, user.password)) {
                    console.log("Passwords did not match!!!");
                    return null;
                }

                const tokens = createTokens(mapRefreshTokenUser(user));
                const { refreshToken } = tokens;

                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { refresh: refreshToken },
                    { returnOriginal: false }
                );
                const mapped = mapUser(updatedUser);
                Object.assign(mapped, { tokens: tokens });

                return mapped;
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },
    jwt: {
        maxAge: 60 * 60 * 24,
    },
    callbacks: {
        jwt({ token, user, trigger, session }) {
            if (user) {
                token.user = user;
            }

            // if (trigger === "update") {

            //     console.log("Triggered");
            // }

            return token;
        },
        async session({ token, trigger, session }) {
            if (token) {
                session.user = token.user;
            }

            return session;
        },
    },
});
