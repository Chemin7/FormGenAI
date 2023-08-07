const express = require('express')
const app = express()
const PORT = 5000
app.get("/api",(req,res)=>{
    res.json({"users": ["user1","user2"]})
})

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });