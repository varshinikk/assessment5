import mongoose from 'mongoose'
// var bcrypt = require('bcryptjs');
// mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema
 
const DownloadSchema = new Schema({
    Firstname: {
        type: String,
        required: "enter firstname"
    },
    Lastname: {
        type: String,
        required: "enter lastname"
    },
    Email: {
        type: String,
        match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        unique: true,
        // useCreateIndex: true,
        required: "enter email"    
    },
    Password: {
        type: String,
        match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
        minlength: 5,
        maxlength: 8,
        required: "enter password"
    },
    ConformPassword: {
        type: String,
        required: "enter correct password"
    }
}, { timestamps: {} });

export default DownloadSchema;

// var User = module.exports = mongoose.model('User', DownloadSchema);