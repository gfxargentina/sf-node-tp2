const express = require('express');

const cors = require('cors');
const { dbConnection } = require('./database/config/dbconfig');
require('dotenv').config();
const app = express();

// Conexion postgresql
dbConnection();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', require('./routes/auth.routes'));
app.use('/user', require('./routes/user.routes'));
app.use('/car', require('./routes/car.routes'));

app.listen(process.env.PORT, () => {
  console.log(`Server runing in port ${process.env.PORT}`);
});
