const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Cakes', 'Pastries', 'Bread', 'Dessert', 'Cookies', 'Toast','Sandwich','Biscuits','Namkeens','Softdrinks','Extra More']
  },
  originalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  weightOptions: {
    type: [
      {
        label: {
          type: String,
          required: true,
          trim: true
        },
        price: {
          type: Number,
          required: true,
          min: 0
        }
      }
    ],
    default: []
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: {
    type: Number,
    default: 0,
    min: 0
  },
  image: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  fullDescription: {
    type: String,
    required: true
  },
  features: {
    type: [String],
    default: []
  },
  specifications: {
    type: Map,
    of: String,
    default: {}
  },
  arrivalDate: {
    type: Date,
    default: Date.now
  },
  isFresh: {
    type: Boolean,
    default: false
  },
  freshnessTag: {
    type: String,
    default: ''
  },
  featured: {
    type: Boolean,
    default: false
  },
  productType: {
    type: String,
    enum: ['just-arrived', 'just-baked', 'regular'],
    default: 'regular'
  },
  inStock: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
productSchema.pre('save', async function() {
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
});

// Update the updatedAt field before findOneAndUpdate operations
productSchema.pre(['findOneAndUpdate', 'updateOne', 'updateMany'], function() {
  this.set({ updatedAt: Date.now() });
});

module.exports = mongoose.model('Product', productSchema);

