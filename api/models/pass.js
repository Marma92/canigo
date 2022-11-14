const mongoose = require('mongoose')
const Schema  = mongoose.Schema

// Pass:
// id (must be generated automatically)
// Pass's level
// Created_at
// Updated_at

const Pass = new Schema({
  level: {
      type    : Number,
      trim    : true,
      required: [true, 'Level is mandatory']
  },
}, {
  timestamps: true // add createdAt and updatedAt
});
