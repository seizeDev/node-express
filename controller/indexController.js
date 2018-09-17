/**
 * Created by lizhen on 2017/11/23.
 */
var indexCleaning = require('../cleaning/indexCleaning');
var querySearch = require('../linkpool/poolQuery');
var util = require('../util/util');
var indexController = {}
/**
 * 获取列表
 */
indexController.getList = async function (req, res, next) {
    let userName = req.query.name;
    let response = await indexCleaning.getList(userName);
    if(response === "true"){
        let data = await querySearch.searchList(userName);
        res.send(util.returnsData(data));
    }else{
        res.send(util.returnsData(false,'查询条件不能为空'));
    }
}
/**
 * 添加用户
 */
indexController.addUser = async function (req, res, next) {
    let userName = req.query.username;
    let password = req.query.password;
    let permiss = req.query.permiss;
    let userType = req.query.userType;
    let userMsg = {
        userName,
        password,
        userType,
        permiss
    }
    let response = await indexCleaning.getList(userMsg);
    if(response === "true"){
        let data = await querySearch.searchList(userMsg);
        res.send(util.returnsData(data));
    }else{
        res.send(util.returnsData(false,'查询条件不能为空'));
    }
}

module.exports = indexController;