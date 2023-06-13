const express = require('express');

const app = express();

app.get('/hello',(req,res) => {
    res.status(200).json({
        message:"Working."
    });
})

app.listen(3003, ()=> {
    console.log('server is working on port 3003');
})