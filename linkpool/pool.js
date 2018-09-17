/**
 * Created by lizhen on 2017/11/22.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lizhen'
});
connection.connect();
var querySearch = function (search) {
    return new Promise(function (resolve, reject) {
        connection.query(search,function(err,result) {
            if(err) {
                reject(err)
            }
            resolve(result)
        });
        // connection.end();
    })
};

module.exports = querySearch;