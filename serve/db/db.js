const { Pool } = require('pg');

const pool = new Pool({
    host: 'postgresql://q1010001q:tdEofwb2PxpK4T9LRhSDqfq62Z9UYXaL@dpg-cqnqo6ggph6c73b0m820-a/accounting_fwsr',
    user: 'q1010001q',
    password: 'tdEofwb2PxpK4T9LRhSDqfq62Z9UYXaL',
    database: 'accounting_fwsr',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};