'use strict';

const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

var userSchema = new Schema({
    fullName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    hash_password: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
};

mongoose.model('User', userSchema);



