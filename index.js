const express = require('express');
const app = express();
const port = process.env.PORT || 3333;
const { createDatabase } = require('./src/database');
const server = require('./src/server');

createDatabase();

server.listen(port, () => console.log(`Running server on port ${port}`));


