import mongoose from "mongoose";
import { chowDb } from "../../config/connections";


const { Schema } = mongoose;

export const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    image: {
        type: String,
        required: true
    }
});

export const Category = chowDb.model('Category', categorySchema);