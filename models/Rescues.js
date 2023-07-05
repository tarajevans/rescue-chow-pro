import { Schema, model } from "mongoose";
import { chowDb } from "../config/connections";

const rescueSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        website: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },

        adminUser: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        authUsers: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

export const Rescues = chowDb.model("Rescues", rescueSchema);
