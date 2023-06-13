const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.status(200).json({
        message:"Server Is Working."
    });
})

app.listen(3003, ()=> {
    console.log('server is working on port 3003');
})
