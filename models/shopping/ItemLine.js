import mongoose from "mongoose";
import { chowDb } from "../../config/connections";

const { Schema } = mongoose;

export const itemLineSchema = new Schema({
    prodId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    qnty: {
        type: Number,
        required: true
    }
    
});

export const ItemLine = chowDb.model('ItemLine', itemLineSchema);