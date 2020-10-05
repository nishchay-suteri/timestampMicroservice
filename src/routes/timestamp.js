const express = require('express');

const router = express.Router();

router.get('/:date_string', (req,res)=>{
    const date_string = req.params.date_string;
    res.send(`Date received: ${date_string}`);
});

module.exports = router;