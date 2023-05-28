import mongoose from "mongoose";
import { chowDb } from "../../config/connections";
import {itemLineSchema} from './ItemLine';

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  
  products: [itemLineSchema], 

  rescue: {
      type: Schema.Types.ObjectId,
      ref: 'Rescues'
    }
});

export const Orders = chowDb.model('Orders', orderSchema);