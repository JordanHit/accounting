const db = require('../db/db');

exports.saveData = async (req, res) => {
    try {
        const { item, room, date, count } = req.body;
        const { rows } = await db.query(
            'INSERT INTO data (item, room, count, date) VALUES ($1, $2, $3, $4) RETURNING *',
            [item, room, count, date]
        );
        res.status(201).json(rows[0]);
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(500).json({ message: 'Error creating data' });
    }
};

exports.loadData = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM data');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error loading data:', error);
        res.status(500).json({ message: 'Error loading data' });
    }
};

exports.saveData1 = async (req, res) => {
    try {
        const {room, date, count } = req.body;
        const { rows } = await db.query(
            'INSERT INTO data1 ( room, count, date) VALUES ($1, $2, $3) RETURNING *',
            [room, count, date]
        );
        res.status(201).json(rows[0]);
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(500).json({ message: 'Error creating data' });
    }
};

exports.loadData1 = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM data1');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error loading data:', error);
        res.status(500).json({ message: 'Error loading data' });
    }
};

exports.saveData2 = async (req, res) => {
    try {
        const { item, room, date, count } = req.body;
        const { rows } = await db.query(
            'INSERT INTO data2 (item, room, count, date) VALUES ($1, $2, $3, $4) RETURNING *',
            [item, room, count, date]
        );
        res.status(201).json(rows[0]);
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(500).json({ message: 'Error creating data' });
    }
};

exports.loadData2 = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM data2');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error loading data:', error);
        res.status(500).json({ message: 'Error loading data' });
    }
};