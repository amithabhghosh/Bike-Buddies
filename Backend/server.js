const express=require("express")
const dotenv =require("dotenv")
const cors=require("cors")

dotenv.config()
const app=express()
const port=process.env.PORT||5000


app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Bike Buddies Succesfully Started")
})


app.listen(port,()=>{
    console.log(`Server Running Succesfully on ${port}`)
})