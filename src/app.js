const express = require('express');
const dotenv = require('dotenv');
const timestampRouter = require('./routes/timestamp');

dotenv.config();
const app = express();

app.use('/api/timestamp', timestampRouter);

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`server is running on port ${port}`));