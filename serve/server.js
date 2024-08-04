const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');

app.use(express.json());
app.use('/api', dataRoutes);


// Используйте CORS middleware
app.use(cors({
    origin: 'https://accounting-smoky.vercel.app' // Укажите ваш клиентский адрес
}));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});