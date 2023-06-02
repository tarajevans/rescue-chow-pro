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

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],
});

export const Order = chowDb.model("Orders", orderSchema);
