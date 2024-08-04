const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');

app.use(express.json());
app.use('/api', dataRoutes);


// Используйте CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://accounting-smoky.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.options('/api/save1', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://accounting-smoky.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.status(204).send();
});

// Your API route
app.post('/api/save1', (req, res) => {
    // Implement your API logic here
    res.json({ message: 'Data saved successfully' });
});

app.options('/api/save1', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://accounting-smoky.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.status(204).send();
});

// Your API route
app.post('/api/save1', (req, res) => {
    // Implement your API logic here
    res.json({ message: 'Data saved successfully' });
});

app.options('/api/save1', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://accounting-smoky.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.status(204).send();
});

// Your API route
app.post('/api/save1', (req, res) => {
    // Implement your API logic here
    res.json({ message: 'Data saved successfully' });
});

app.options('/api/save', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://accounting-smoky.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.status(204).send();
});

// Your API route
app.post('/api/save', (req, res) => {
    // Implement your API logic here
    res.json({ message: 'Data saved successfully' });
});

app.options('/api/save2', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://accounting-smoky.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.status(204).send();
});

// Your API route
app.post('/api/save2', (req, res) => {
    // Implement your API logic here
    res.json({ message: 'Data saved successfully' });
});

app.options('/api/data1', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://accounting-smoky.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.status(204).send();
});

// Your API route
app.post('/api/data1', (req, res) => {
    // Implement your API logic here
    res.json({ message: 'Data saved successfully' });
});

app.options('/api/data2', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://accounting-smoky.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.status(204).send();
});

// Your API route
app.post('/api/data2', (req, res) => {
    // Implement your API logic here
    res.json({ message: 'Data saved successfully' });
});

app.options('/api/data', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://accounting-smoky.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.status(204).send();
});

// Your API route
app.post('/api/data', (req, res) => {
    // Implement your API logic here
    res.json({ message: 'Data saved successfully' });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});