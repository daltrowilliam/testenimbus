const endpoint = require('./endpoint');

module.exports = {
    method: 'get',
    path: '/damage-summary-by-date',
    fn: endpoint.execute,
};

