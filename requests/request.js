var api = require('./api.js');
var utils = require('../utils/util.js');

/**
 * 网路请求
 */
function request(url, data, successCb, errorCb, completeCb) {
    wx.request({
        url: url,
        // method: 'GET',//工具升级后不能再这样写，新的格式为下面head...
        header: {
          "Content-Type": "json"
        },
        data: data,
        success: function(res) {
            if (res.statusCode == 200) {
                utils.isFunction(successCb) && successCb(res.data);
            }else
                console.log('请求异常', res);
        },
        error: function() {
            utils.isFunction(errorCb) && errorCb();
        },
        complete: function() {
            utils.isFunction(completeCb) && completeCb();
        }
    });
}

/**
 * 登录
 */
function rqLogin(username, password, successCb, errorCb, completeCb) {
  request(api.API_LOGIN.replace(':username', username).replace(':password', password), {}, successCb, errorCb, completeCb);
}

/**
 * 一纸通
 */
function rqOnePaperList(onePaperType, successCb, errorCb, completeCb) {
  request(api.API_ST_ONEPAPERLIST.replace(':onePaperType', onePaperType), {}, successCb, errorCb, completeCb);
}


module.exports = {
  rqLogin: rqLogin,
  rqOnePaperList: rqOnePaperList,


  
}

