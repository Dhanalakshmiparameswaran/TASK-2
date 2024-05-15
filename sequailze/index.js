const express = require('express');
const connection = require('./db');
const bodyParser = require('body-parser');
const route=require('./routes');

const app = express();
const port = 7085;
app.use(express.json());

app.use('/root',route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
