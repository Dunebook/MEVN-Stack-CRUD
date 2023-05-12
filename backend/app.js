const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
// create our express app
const app = express()


const uri = "mongodb+srv://deven:PbPDmSdq9EVdwnH1@cluster0.4vfccik.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))

// middleware
app.use(cors())
app.use(bodyParser.json())

// routes
app.get("/", (req,res)=>{
    res.send("my home page dey show sha")
})

const QuotesRoute = require('./routes/Quotes')
app.use('/quotes', QuotesRoute)

//start server
app.listen(3000, ()=>{
    console.log("listeniing at port:3000")
})   