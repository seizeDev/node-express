/**
 * Created by lizhen on 2017/11/22.
 */
var indexCleaning = {}
/**
 * 监控数据数据清洗
 * @param username
 * @returns {Promise}
 */
indexCleaning.jsError = function (username) {
    return new Promise((resolve, reject) => {
        if(!errorName||errorName === ''){
            resolve('false')
        }else{
            resolve('true')
        }
    })
}

module.exports = indexCleaning;