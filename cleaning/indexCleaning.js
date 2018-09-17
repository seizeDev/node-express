/**
 * Created by lizhen on 2017/11/22.
 */
var indexCleaning = {}
/**
 * 列表传入数据清洗
 * @param username
 * @returns {Promise}
 */
indexCleaning.getList = function (username) {
    return new Promise((resolve, reject) => {
        if(!username||username === ''){
            resolve('false')
        }else{
            resolve('true')
        }
    })
}
/**
 * 添加用户数据清洗
 */
indexCleaning.getList = function (user) {
    return new Promise((resolve, reject) => {
        if(!user||user === ''){
            resolve('false')
        }else{
            resolve('true')
        }
    })
}

module.exports = indexCleaning;