import mongoose from 'mongoose'
import downloadSchema from '../models/downloadModel'
 
const Download = mongoose.model('Download', downloadSchema)
 
// add new download to the database
exports.addNewDownload = (req, res) => {
    // console.log("hii")
    let newDownload = new Download(req.body)
    newDownload.save((error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// get all downloads from the database
exports.getDownloads = (req, res) => {
    // console.log("hii")
    Download.find({}, (error, downloads) => {
        if (error) { res.json(error) }
        res.json(downloads)
    })
}
 
// get single download based on the id
exports.getDownload = (req, res) => {
    Download.findById(req.params.id, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// update the download information based on id
exports.updateDownload = (req, res) => {
    Download.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// delete the download from the database.
exports.deleteDownload = (req, res) => {
    Download.remove({ _id: req.params.id }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}