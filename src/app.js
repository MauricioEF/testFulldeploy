import express from 'express';

const app = express();
const PORT = process.env.PORT||8080;
app.listen(PORT,()=>console.log("Listening"))

app.get('/',(req,res)=>{
    console.log("Listening");
})