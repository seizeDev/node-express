var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('欢迎访问权限管理系统');
});
router.get('/user/addUser', indexController.addUser);

module.exports = router;
