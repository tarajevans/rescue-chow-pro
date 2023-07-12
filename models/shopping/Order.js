import mongoose from "mongoose";
import { chowDb } from "../../config/connections";
import { itemLineSchema } from "./ItemLine";

const { Schema } = mongoose;

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now,
    },

    products: [itemLineSchema],

    rescue: {
        type: Schema.Types.ObjectId,
        ref: "Rescues",
    },

    customer: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    email: {
        type: String,
    },

    status: {
        type: String, // values: new, picking, picked, shipped
    },
    paymentStatus: {
        type: String, // values: pending, success, failed
    },

    stripeSessionId: {
        type: String,
    },

    shipLine1: {
        type: String,
    },

    shipLine2: {
        type: String,
    },

    shipCity: {
        type: String,
    },

    shipCountry: {
        type: String,
    },

    shipPostalCode: {
        type: String,
    },

    shipProv: {
        type: String,
    },

    // thoughts: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "Thought",
    //     },
    // ],
});

export const Order = chowDb.model("Orders", orderSchema);
