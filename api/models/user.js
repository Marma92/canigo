const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt   = require('bcryptjs');

const User = new Schema({
    name: {
        type    : String,
        trim    : true,
        required: [true, 'Name is mandatory']
    },
    firstname: {
        type: String,
        trim: true
    },
    email: {
        type     : String,
        trim     : true,
        required : [true, 'email address is mandatory'],
        unique   : true, // unique field
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
    }
}, {
    timestamps: true // add 2 fields: createdAt and updatedAt
});

// hook executé avant la sauvegarde d'un document. Hash le mot de passe quand il est modifié
User.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    this.password = bcrypt.hashSync(this.password, 10);

    next();
});

module.exports = mongoose.model('User', User);