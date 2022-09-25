const express = require('express');

const cors = require('cors');
const { dbConnection } = require('./database/config/dbconfig');
require('dotenv').config();
const app = express();

// Conexion postgresql
dbConnection();

app.use(cors());
app.use(express.json());

app.use('/user', require('./routes/user.routes'));

app.listen(process.env.PORT, () => {
  console.log(`Server runing in port ${process.env.PORT}`);
});
