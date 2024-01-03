const { db } = require('../database');

module.exports = {
    async execute(dateStart, dateEnd) {
        try {
            const result = await db.query('SELECT * FROM alerts WHERE date BETWEEN $1 AND $2', [dateStart, dateEnd]);
            return result;
        } catch (error) {
            console.error('Erro na consulta ao banco de dados:', error);
            throw error;
        }
    },
};
