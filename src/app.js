const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const timestampRouter = require('./routes/timestamp');

dotenv.config();
const app = express();

/* 
 * enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
 * so that your API is remotely testable by FCC 
 */
app.use(cors({optionsSuccessStatus: 200}))
app.use('/api/timestamp', timestampRouter);

app.get('/',(req,res)=>{
    res.send("Timestamp Microservice");
});



const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`server is running on port ${port}`));