const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');  // Импортируем пакет cors
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 444;

const serviceAccount = require('../serve/account-535bb-firebase-adminsdk-b4482-42c952b415.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://account-535bb-default-rtdb.firebaseio.com/'
});

const db = admin.firestore();

// Настройка CORS с указанием допустимого источника
const corsOptions = {
    origin: 'http://localhost:5173',  // Укажите здесь ваш источник
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));  // Используем cors с настройками
app.use(bodyParser.json());

app.post('/procurement', async (req, res) => {
    try {
        const data = req.body;
        const docRef = await db.collection('procurement').add(data);
        res.status(201).json({ id: docRef.id });
    } catch (error) {
        console.error('Error adding document:', error);
        res.status(500).send('Error adding document');
    }
});

app.get('/procurement', async (req, res) => {
    try {
        const snapshot = await db.collection('procurement').get();
        const procurements = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(procurements);
    } catch (error) {
        console.error('Error getting documents:', error);
        res.status(500).send('Error getting documents');
    }
});

app.post('/refill', async (req, res) => {
    try {
        const data = req.body;
        const docRef = await db.collection('refill').add(data);
        res.status(201).json({ id: docRef.id });
    } catch (error) {
        console.error('Error adding document:', error);
        res.status(500).send('Error adding document');
    }
});

app.get('/refill', async (req, res) => {
    try {
        const snapshot = await db.collection('refill').get();
        const procurements = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(procurements);
    } catch (error) {
        console.error('Error getting documents:', error);
        res.status(500).send('Error getting documents');
    }
});

app.post('/repair', async (req, res) => {
    try {
        const data = req.body;
        const docRef = await db.collection('repair').add(data);
        res.status(201).json({ id: docRef.id });
    } catch (error) {
        console.error('Error adding document:', error);
        res.status(500).send('Error adding document');
    }
});

app.get('/repair', async (req, res) => {
    try {
        const snapshot = await db.collection('repair').get();
        const procurements = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(procurements);
    } catch (error) {
        console.error('Error getting documents:', error);
        res.status(500).send('Error getting documents');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});