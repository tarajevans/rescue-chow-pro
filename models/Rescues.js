import { Schema, model } from'mongoose';
import { chowDb } from '../config/connections';

const rescueSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        website: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        },
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

export const Rescuese = chowDb.model('Rescues', rescueSchema);