const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const server = express();
const cors = require('cors');

server.use(cors());
server.use(express.json());



server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});