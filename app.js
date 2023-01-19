const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}...`);
});