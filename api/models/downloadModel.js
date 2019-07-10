import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const DownloadSchema = new Schema({
    Firstname: {
        type: String
    },
    Lastname: {
        type: String
    },
    Email: {
        type: String
    },
    Password: {
        type: String
    },
    ConformPassword: {
        type: String
    }
    // Created_at: {
    //     type: String
    // },
    // Updated_at: {
    //     type: String
    // }
}, { timestamps: {} });

export default DownloadSchema;