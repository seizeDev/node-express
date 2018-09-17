var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController');
/* 获取列表 */
router.get('/user/getList', indexController.getList);
/* 获取列表 */
router.get('/user/addUser', indexController.addUser);

module.exports = router;
