/**
 * Created by lizhen on 2017/11/23.
 */
var util = {}
/**
 * 统一返回状态码
 * @type {[*]}
 */
let codeStatus = [
    {
        code:200,
        message:"请求成功"
    },
    {
        code:101,
        message:"系统繁忙"
    }
]
/**
 * 统一数据返回控制
 * @param data
 * @param message
 * @param err
 * @returns {*}
 */
util.returnsData = function (data,message,err) {
    if(data){
        return {
            data:data,
            code:codeStatus[0].code,
            success:true,
            message:message||codeStatus[0].message
        }
    }else{
        return {
            data:err||'',
            code:codeStatus[1].code,
            success:false,
            message:message||codeStatus[1].message
        }
    }
}

module.exports = util;