/**
 * Created by lizhen on 2017/11/23.
 */
var monitorCleaning = require('../cleaning/monitorCleaning');
var querySearch = require('../linkpool/poolQuery');
var util = require('../util/util');
var indexController = {}
/**
 * 传入监控信息
 */
indexController.getList = async function (req, res, next) {
    let jsError = req.query.jsError;
    let response = await monitorCleaning.jsError(jsError);
    if(response === "true"){
        let data = await querySearch.searchList(userName);
        res.send(util.returnsData(data));
    }else{
        res.send(util.returnsData(false,'查询条件不能为空'));
    }
}

module.exports = indexController;