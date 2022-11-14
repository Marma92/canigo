const mongoose = require('mongoose')
const Schema  = mongoose.Schema


// Place :

//     id (must be generated automatically)
//     Address
//     Phone number
//     Minimum required pass's level to get in
//     Minimum required age to get in


const Place = new Schema({
  Address: {
      type    : String,
      trim    : true,
      required: [true, 'Address is mandatory']
  },
  Phone: {
      type    : String,
      trim    : true,
      required: [true, 'Phone number is mandatory']
  },
  MinPassLevel:{
      type    : Number,
      trim    : true,
      required: [true, 'Minimum Level required for entrance is mandatory']
  },
  MinAge:{
      type    : Number,
      trim    : true,
      required: [true, 'Minimum age required for entrance is mandatory']
  }
}, {
  timestamps: true // add createdAt and updatedAt
});
