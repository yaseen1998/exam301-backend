const mongoose = require('mongoose')
const watchesSchema = new mongoose.Schema({
    "id": Number,
    "title": String,
    "description": String,
    "toUSD": String,
    "image_url": String
})



const watchesModel = mongoose.model("watche",watchesSchema)

const seeddata = ()=>{
    let newdata = new watchesModel({
        id:4,
title:"RD YTR",
description:"New Generation Latest M2 SMART Digital WATCHES Band For Unisex Of Mode...",
toUSD:"250",
image_url:"https://rukminim1.flixcart.com/image/800/960/jybva…atch-big-mart-origi..."
    })
    newdata.save()
}

module.exports = {watchesModel,seeddata}