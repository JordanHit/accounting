// Импортируем модуль firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Конфигурация вашего Firebase проекта
const firebaseConfig = {
    apiKey: "AIzaSyD3VDjNxKI-Bru2e858d8VmRXl0p90Yzj4",
    authDomain: "account-535bb.firebaseapp.com",
    databaseURL: "https://account-535bb-default-rtdb.firebaseio.com",
    projectId: "account-535bb",
    storageBucket: "account-535bb.appspot.com",
    messagingSenderId: "280459514689",
    appId: "1:280459514689:web:06254b4e09e274632e47c0",
    measurementId: "G-92JJHVH1WE"
};

// Инициализируем Firebase
const app = initializeApp(firebaseConfig);

// Экспортируем Firestore для использования в других частях приложения
const db = getFirestore(app);
export { db };