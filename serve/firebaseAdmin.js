// Импортируем модуль firebase-admin
const admin = require('firebase-admin');

// Загружаем учетные данные администратора
const serviceAccount = require('./account-535bb-firebase-adminsdk-b4482-42c952b415.json');

// Инициализируем приложение Firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://account-535bb-default-rtdb.firebaseio.com'
});

// Экспортируем экземпляр admin для использования в других частях приложения
module.exports = admin;