const express = require('express');
const router = express.Router(); 
const { add, show, search, update, del } = require('./controler');

router.post('/add', add);
router.get('/show',show);
router.get('/search', search); 
router.put('/update', update);
router.delete('/del', del); 
module.exports = router;

/*const con=require("./controler")
const Router= require("express")

const route =Router();

route.post('/', con.add);
route.get('/show',con.show);
route.get('/search',con.search);
route.put('/update',con.update);
route.delete('/del',con.del);

module.exports=route;*/