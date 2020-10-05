const express = require('express');
const moment = require('moment');

const router = express.Router();

router.get('/:date_string', (req,res)=>{
    const date_string = req.params.date_string;
    let outputFormat;
    let date;
    if(isNaN(date_string))
    {
        const isValidDate = moment(date_string,"YYYY-MM-DD",true).isValid();
        if(isValidDate)
        {
            date = new Date(date_string);
            outputFormat = {"unix": date.getTime(), "utc": date.toUTCString()};
        }
        else
        {
            outputFormat = {"error" : "Invalid Date" };
        }
    }
    else
    {
        const num = parseInt(date_string);
        date = new Date(num);
        outputFormat = {"unix": date.getTime(), "utc": date.toUTCString()};
    }
    res.json(outputFormat);
});

module.exports = router;