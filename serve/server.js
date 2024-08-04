const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');

app.use(express.json());

app.use(cors({
    origin: 'https://accounting-smoky.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use('/api', dataRoutes);


// Используйте CORS middleware
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.listen(3000, () => {
    console.log('Server started on port 3000');
});