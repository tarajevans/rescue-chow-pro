import mongoose from "mongoose";
import { chowDb } from "../../config/connections";
import ItemLine from './ItemLine';

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  
  products: [ItemLine.schema], 

  rescue: {
      type: Schema.Types.ObjectId,
      ref: 'Rescues'
    }
});

export const Orders = chowDb.model('Orders', orderSchema);