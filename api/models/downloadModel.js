import mongoose from 'mongoose'

var Schema = mongoose.Schema
 
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
        isEmail: true,
        unique: true,
        required: "enter email"    
    },
    Password: {
        type: String,
        required: "enter password"
    },
    ConformPassword: {
        type: String,
        required: "enter correct password"
    }
}, { timestamps: {} });

export default DownloadSchema;