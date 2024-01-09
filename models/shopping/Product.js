import mongoose from "mongoose";
import { chowDb } from "../../config/connections";
import thoughtSchema from './Thought';

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  
  isCharitable: {
    type: Schema.Types.Boolean
  },

  isActive: {
    type:Boolean,
    default: true
  },
  thoughts: [thoughtSchema],
});

export const Product = chowDb.model('Product', productSchema);