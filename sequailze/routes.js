const express = require('express');
const router = express.Router(); 
const { add, show, search, update, del } = require('./controler');

router.post('/add', add);
router.get('/show',show);
router.get('/search', search); 
router.put('/update', update);
router.delete('/del', del); 
module.exports = router;