/**
 * Created by lizhen on 2017/11/22.
 */

var querySearch = require('./pool');
let poolQuery = {};

poolQuery.searchList = function (userName) {//查询用户
    let query = `SELECT * FROM lizhen_user WHERE  user = '${userName}'`;
    return querySearch(query)
}
poolQuery.addUser = function (user) {//添加用户
    let query = `insert into MyClass values `;
    return querySearch(query)
}
poolQuery.jsError = function (jsError) {//添加JS错误信息
    let query = `insert into MyClass values `;
    return querySearch(query)
}

module.exports = poolQuery;