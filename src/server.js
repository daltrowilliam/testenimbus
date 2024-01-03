const http = require('http');
const express = require('express');
const app = express();

const getDamageSummaryByDateRoute = require('./get-damage-summary-by-date/route');
app[getDamageSummaryByDateRoute.method](getDamageSummaryByDateRoute.path, getDamageSummaryByDateRoute.fn);

const server = http.createServer(app);

module.exports = server;

