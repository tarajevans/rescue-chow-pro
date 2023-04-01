const mongoose = require('mongoose');

const { Schema } = mongoose;
const thoughtSchema = require('./Thought')

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
  thoughts: [thoughtSchema],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
