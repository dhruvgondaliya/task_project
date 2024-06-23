require('dotenv').config();
const express = require('express');
const app = express();
const Employe = require('./app/routes/employeesRoutes'); 

app.use(express.json());

const port = process.env.PORT;

app.use('/api', Employe);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});