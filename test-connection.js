const db = require('./src/database');

async function testConnection() {
    try {
        const result = await db.query('SELECT 1 as test');
        console.log('Conexão com o banco de dados estabelecida com sucesso. Resultado:', result);
    } catch (error) {
        console.error('Erro ao testar a conexão com o banco de dados:', error);
    } finally {
        db.$pool.end();
    }
}

testConnection();
