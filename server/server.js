const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Маршрут для записи данных в JSON файл
app.post('/api/save', (req, res) => {
    const newData = req.body;
    const filePath = path.join(__dirname, 'data.json');

    // Чтение существующего файла
    fs.readFile(filePath, 'utf8', (err, data) => {
        let jsonData = [];

        if (err) {
            if (err.code === 'ENOENT') {
                // Если файла не существует, создаем новый массив
                console.log('Файл не найден, создаем новый файл.');
            } else {
                console.error('Ошибка чтения файла:', err);
                return res.status(500).send('Ошибка чтения файла');
            }
        } else {
            try {
                // Парсинг существующего JSON
                jsonData = JSON.parse(data);

                // Проверка, что jsonData является массивом
                if (!Array.isArray(jsonData)) {
                    console.error('Существующий JSON не является массивом');
                    return res.status(500).send('Существующий JSON не является массивом');
                }
            } catch (e) {
                console.error('Ошибка парсинга JSON:', e);
                return res.status(500).send('Ошибка парсинга JSON');
            }
        }

        // Добавление новых данных в массив
        jsonData.push(newData);

        // Преобразование объекта в JSON строку
        const jsonString = JSON.stringify(jsonData, null, 2);

        // Запись в файл
        fs.writeFile(filePath, jsonString, (err) => {
            if (err) {
                console.error('Ошибка записи в файл:', err);
                return res.status(500).send('Ошибка записи в файл');
            } else {
                console.log('Данные успешно записаны в data.json');
                return res.status(200).send('Данные успешно записаны');
            }
        });
    });
});

// Маршрут для получения данных из JSON файла
app.get('/api/data', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.log('Файл не найден.');
                return res.status(200).json([]); // Возвращаем пустой массив, если файл не существует
            } else {
                console.error('Ошибка чтения файла:', err);
                return res.status(500).send('Ошибка чтения файла');
            }
        }

        try {
            const jsonData = JSON.parse(data);
            return res.status(200).json(jsonData);
        } catch (e) {
            console.error('Ошибка парсинга JSON:', e);
            return res.status(500).send('Ошибка парсинга JSON');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});