const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const app= express();

app.use(cors());

app.use(express.json());

const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://yaseen_saeed:ya9981063722@cluster0.ulxvz.mongodb.net/test`,
{useNewUrlParser: true, 
  useUnifiedTopology: true}).then(()=> console.log('connect mongo atlas sucsess'))

  app.get("/",(req,res)=>{
    res.status(200).json({
      data:"sucsess"
  })
  })
const {seeddata} = require("./models/Watches.model")
  const {getfav,deletefav,updatefav,createfav} = require("./controller/Watches.controller");

app.post("/createfav",createfav)
app.get("/getfav",getfav)
app.get("/seedfav",(req,res)=>{
  seeddata()
  res.status(200).json({
    data:"sucsess"
})
})
app.delete("/deletefav/:id",deletefav)
app.patch("/updatefav/:id",updatefav)

  app.listen(8000, () => {
    console.log(`listening to port 8000`);
  });