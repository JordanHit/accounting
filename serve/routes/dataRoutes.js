const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/save', dataController.saveData);
router.get('/data', dataController.loadData);
router.post('/save1', dataController.saveData1);
router.get('/data1', dataController.loadData1);
router.post('/save2', dataController.saveData2);
router.get('/data2', dataController.loadData2);
module.exports = router;