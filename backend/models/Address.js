const mongoose = require('mongoose');

// Address Schema
const AddressSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  country: {
    type: String
  },
  zipCode: {
    type: String
  },
  isDefault: {
    type: Boolean,
    default: false
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Address', AddressSchema);