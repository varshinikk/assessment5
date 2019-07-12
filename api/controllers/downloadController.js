import mongoose from 'mongoose'
import downloadSchema from '../models/downloadModel'
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
// var bcrypt = require('bcryptjs');

const Download = mongoose.model('Download', downloadSchema)

exports.addNewDownload = (req, res) => {
    const reg= /^[a-zA-Z0-9!@#$%^&*]{5,8}$/
        if(reg.test(req.body.Password))
        {
        if(req.body.Password === req.body.ConformPassword){
            req.body.Password = cryptr.encrypt(req.body.Password);
            req.body.ConformPassword = cryptr.encrypt(req.body.ConformPassword);
        } 
        else{
            req.body.Password ="";
        }
    let newDownload = new Download(req.body)
    newDownload.save((error, download) => {
    if (error) { res.json(error) }
    res.json("user created")
    })
}
}

exports.getDownloads = (req, res) => {
    Download.find({}, (error, downloads) => {
        if (error) { res.json(error) }
        res.json(downloads)
    })
}

exports.getDownload = (req, res) => {
    Download.findById(req.params.id, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
exports.updateDownload = (req, res) => {
    Download.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
exports.deleteDownload = (req, res) => {
    Download.remove({ _id: req.params.id }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}