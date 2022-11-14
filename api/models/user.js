const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt   = require('bcryptjs');


/*
User :
    id (must be generated automatically)
    First name
    Last name
    Age
    Phone number
    Address
    Pass's id
*/

const User = new Schema({
    name: {
        type    : String,
        trim    : true,
        required: [true, 'Name is mandatory']
    },
    firstname: {
        type: String,
        trim: true,
        required: [true, 'First name is mandatory']
    },
    age: {
        type: Number,
        trim: true,
        required: [true, 'Age is mandatory']
    },
    email: {
        type     : String,
        trim     : true,
        required : [true, 'email address is mandatory'],
        unique   : true, // unique field
        lowercase: true
    },
    phone: {
        type: String,
        trim: true,
        required: [true, 'Phone number is mandatory']
    },
    address: {
        type: String,
        trim: true,
        required: [true, 'Postal address is mandatory']
    },
    passId: {
        type      : String,
        trim      : true,
        unique    : true, // unique field
        lowercase : true
    },
    password: {
        type: String,
        trim: true,
    }
}, {
    timestamps: true // add 2 fields: createdAt and updatedAt
});

// hook avant la sauvegarde d'un document.
// Hashe le mdp quand il est modifié
User.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    this.password = bcrypt.hashSync(this.password, 10);

    next();
});

module.exports = mongoose.model('User', User);