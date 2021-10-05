const {watchesModel} = require("../models/Watches.model")

const createfav = async(req,res)=>{
    try{
        const create = await watchesModel.create(req.body)
        res.status(200).json({
            data:create
        })
    }catch(err){
        res.status(400).json({
            message:err
        })
    }
}

const deletefav = async(req,res)=>{
    try{
        const remove = await watchesModel.findByIdAndDelete(req.params.id)
        const create = await watchesModel.find()
        res.status(200).json({
            data:create
        })
    }catch(err){
        res.status(400).json({
            message:err
        })
    }
}

const getfav = async(req,res)=>{
    try{
        const create = await watchesModel.find()
        res.status(200).json({
            data:create
        })
    }catch(err){
        res.status(400).json({
            message:err
        })
    }
}

const updatefav =async(req,res)=>{
    try{
        const update = await watchesModel.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        const create = await watchesModel.find()
        res.status(200).json({
            data:create
        })
    }catch(err){
        res.status(400).json({
            message:err
        })
    }
}

module.exports = {getfav,deletefav,updatefav,createfav}