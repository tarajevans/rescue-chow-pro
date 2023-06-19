import mongoose from "mongoose";
import { chowDb } from "../../config/connections";
import Orders from "./Order";
import { stringify } from "querystring";

const { Schema } = mongoose;
// const bcrypt = require('bcrypt');
const userSchema = new Schema({
    firstName: {
        type: String,
        // required: true,
        trim: true,
    },
    lastName: {
        type: String,
        // required: true,
        trim: true,
    },
    username: {
        type: String,
        // required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },

    // Shipping address info below - Billing address is handled by stripe.
    // house number
    addrNumber: {
        type: String,
    },

    // apartment, unit, or suite number
    addrUnitNumb: {
        type: String,
    },

    //street name
    addrStreet: {
        type: String,
    },

    // City
    addrCity: {
        type: String,
    },

    // Providence
    addrProv: {
        type: String,
    },

    // Zipcode
    addrPostCode: {
        type: String,
    },
    // end of shipping info

    role: {
        type: String,
        default: "user",
    },

    stripId: {
        type: String,
    },

    refresh: {
        type: String,
        default: "testing",
    },
});

// set up pre-save middleware to create password
// userSchema.pre('save', async function (next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

export const User = chowDb.model("User", userSchema);
