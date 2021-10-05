const mongoose = require('mongoose')
const watchesSchema = new mongoose.Schema({
    "id": Number,
    "title": String,
    "description": String,
    "toUSD": String,
    "image_url": String
})
const watchesModel = mongoose.model("watche",watchesSchema)
module.exports = {watchesModel}