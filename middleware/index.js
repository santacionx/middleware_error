const express = require('express')
const app = express();
const ExpressError=require("./expresserror");
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access is forbidden");
})
app.use((err,req,res,next)=>{
    let {status, message}=err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log("server is listening to port 8080");
  });