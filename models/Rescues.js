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

        // use to determine what is displayed as rescue choices / when admin approves the rescue set this to true
        active: {
            type: Boolean,
            default: false,
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
