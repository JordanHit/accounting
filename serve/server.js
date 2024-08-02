const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const corsOptions = {
    origin: 'https://accounting-smoky.vercel.app', // Разрешите доступ только с этого домена
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Укажите разрешенные методы
    credentials: true, // Разрешить отправку куки
};

// Используйте CORS middleware
app.use(cors(corsOptions));

// Функция для записи данных в JSON файл
function saveDataToFile(filePath, newData, res) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        let jsonData = [];

        if (err) {
            if (err.code === 'ENOENT') {
                console.log(`Файл ${filePath} не найден, создаем новый файл.`);
            } else {
                console.error(`Ошибка чтения файла ${filePath}:`, err);
                return res.status(500).send(`Ошибка чтения файла ${filePath}`);
            }
        } else {
            try {
                jsonData = JSON.parse(data);
                if (!Array.isArray(jsonData)) {
                    console.error(`Существующий JSON в ${filePath} не является массивом`);
                    return res.status(500).send(`Существующий JSON в ${filePath} не является массивом`);
                }
            } catch (e) {
                console.error(`Ошибка парсинга JSON в ${filePath}:`, e);
                return res.status(500).send(`Ошибка парсинга JSON в ${filePath}`);
            }
        }

        jsonData.push(newData);
        const jsonString = JSON.stringify(jsonData, null, 2);

        fs.writeFile(filePath, jsonString, (err) => {
            if (err) {
                console.error(`Ошибка записи в файл ${filePath}:`, err);
                return res.status(500).send(`Ошибка записи в файл ${filePath}`);
            } else {
                console.log(`Данные успешно записаны в ${filePath}`);
                return res.status(200).send('Данные успешно записаны');
            }
        });
    });
}

// Функция для чтения данных из JSON файла
function readDataFromFile(filePath, res) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.log(`Файл ${filePath} не найден.`);
                return res.status(200).json([]);
            } else {
                console.error(`Ошибка чтения файла ${filePath}:`, err);
                return res.status(500).send(`Ошибка чтения файла ${filePath}`);
            }
        }

        try {
            const jsonData = JSON.parse(data);
            return res.status(200).json(jsonData);
        } catch (e) {
            console.error(`Ошибка парсинга JSON в ${filePath}:`, e);
            return res.status(500).send(`Ошибка парсинга JSON в ${filePath}`);
        }
    });
}

// Маршрут для записи данных в data.json
app.post('/api/save', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');
    saveDataToFile(filePath, req.body, res);
});

// Маршрут для записи данных в data1.json
app.post('/api/save1', (req, res) => {
    const filePath = path.join(__dirname, 'data1.json');
    saveDataToFile(filePath, req.body, res);
});

// Маршрут для записи данных в data2.json
app.post('/api/save2', (req, res) => {
    const filePath = path.join(__dirname, 'data2.json');
    saveDataToFile(filePath, req.body, res);
});

// Маршрут для получения данных из data.json
app.get('/api/data', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');
    readDataFromFile(filePath, res);
});

// Маршрут для получения данных из data1.json
app.get('/api/data1', (req, res) => {
    const filePath = path.join(__dirname, 'data1.json');
    readDataFromFile(filePath, res);
});

// Маршрут для получения данных из data2.json
app.get('/api/data2', (req, res) => {
    const filePath = path.join(__dirname, 'data2.json');
    readDataFromFile(filePath, res);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});