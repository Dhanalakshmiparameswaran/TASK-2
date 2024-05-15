const express = require('express'); 
const bodyParser = require('body-parser');
const connection = require('./db');
const route=require('./routes');

const app = express();
const port = process.env.port || 4000;
app.use(express.json());

app.use('/root',route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

