const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');

app.use(express.json());
app.use('/api', dataRoutes);


// Используйте CORS middleware
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://accounting-smoky.vercel.app');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});