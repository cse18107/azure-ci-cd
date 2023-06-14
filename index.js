const express = require('express');

const app = express();

const port = 3003

app.get('/',(req,res) => {
    res.status(200).json({
        message:"Server Is Working."
    });
})

app.listen(process.env.PORT|| port, ()=> {
    console.log(`server is working on port ${port}`);
})
