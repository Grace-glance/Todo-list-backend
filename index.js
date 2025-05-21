const express = require('express');
const app = express();
const connectDB = require('./scripts/ConnectMongoDB');

connectDB();


app.get('/', (req, res) => {
    res.send('Hello, found my backend application!');
});

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});