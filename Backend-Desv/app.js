const express = require('express');
const app = express();
const cors = require('cors');
const port = 3715; 

const indexRoute = require('./routes/index.js');
app.use(cors());
app.use(express.json());

const connectDB = require('./Db/connect.js');
connectDB();

app.use('/api', indexRoute);

app.listen(port, ()=>{
  console.log(`listing on port ${port}...`);
});