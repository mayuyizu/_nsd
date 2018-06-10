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
function rqOnePaperDetail(onePaperID, successCb, errorCb, completeCb) {
  request(api.API_ST_ONEPAPERDETAIL.replace(':onePaperID', onePaperID), {}, successCb, errorCb, completeCb);
}


/**
 * 产品彩页
 */
function rqColorPageList(colorPageType, successCb, errorCb, completeCb) {
  request(api.API_ST_COLORPAGELIST.replace(':colorPageType', colorPageType), {}, successCb, errorCb, completeCb);
}
function rqColorPageDetail(colorPageID, successCb, errorCb, completeCb) {
  request(api.API_ST_COLORPAGEDETAIL.replace(':colorPageID', colorPageID), {}, successCb, errorCb, completeCb);
}


/**
 * DataSheet
 */
function rqDataSheetList(datasheetType, successCb, errorCb, completeCb) {
  request(api.API_ST_DATASHEETLIST.replace(':datasheetType', datasheetType), {}, successCb, errorCb, completeCb);
}
function rqDataSheetDetail(datasheetID, successCb, errorCb, completeCb) {
  request(api.API_ST_DATASHEETDETAIL.replace(':datasheetID', datasheetID), {}, successCb, errorCb, completeCb);
}


/**
 * 资质列表
 */
function rqQualiDetail(qualificationType, successCb, errorCb, completeCb) {
  request(api.API_ST_QUALIDETAIL.replace(':qualificationType', qualificationType), {}, successCb, errorCb, completeCb);
}


/**
 * 技术白皮书
 */
function rqWhiteDetail(whitepaperType, successCb, errorCb, completeCb) {
  request(api.API_ST_WHITEDETAIL.replace(':whitepaperType', whitepaperType), {}, successCb, errorCb, completeCb);
}


/**
 * 案例集
 */
function rqCaseList(caseType, successCb, errorCb, completeCb) {
  request(api.API_ST_CASELIST.replace(':caseType', caseType), {}, successCb, errorCb, completeCb);
}
function rqCaseDetail(caseID, successCb, errorCb, completeCb) {
  request(api.API_ST_CASEDETAIL.replace(':caseID', caseID), {}, successCb, errorCb, completeCb);
}


/**
 * 需求挖掘
 */
function rqRequireDetail(successCb, errorCb, completeCb) {
  request(api.API_ST_REQUIREDETAIL, {}, successCb, errorCb, completeCb);
}


/**
 * 竞争策略
 */
function rqStrategyList(strategyType, successCb, errorCb, completeCb) {
  request(api.API_ST_STRATEGYLIST.replace(':strategyType', strategyType), {}, successCb, errorCb, completeCb);
}
function rqStrategyDetail(strategyID, successCb, errorCb, completeCb) {
  request(api.API_ST_STRATEGYDETAIL.replace(':strategyID', strategyID), {}, successCb, errorCb, completeCb);
}


/**
 * 招标参数
 */
function rqTenderList(tenderType, successCb, errorCb, completeCb) {
  request(api.API_ST_TENDERLIST.replace(':tenderType', tenderType), {}, successCb, errorCb, completeCb);
}
function rqTenderDetail(tenderID, successCb, errorCb, completeCb) {
  request(api.API_ST_TENDERDETAIL.replace(':tenderID', tenderID), {}, successCb, errorCb, completeCb);
}


/**
 * 报价表
 */
function rqPriceDetail(tenderType, successCb, errorCb, completeCb) {
  request(api.API_PRICEDETAIL.replace(':tenderType', tenderType), {}, successCb, errorCb, completeCb);
}
function rqPriceList(productType, productHeight, mangerNumber, limit, offset, data, successCb, errorCb, completeCb) {
  request(api.API_PRICELIST.replace(':productType', productType).replace(':productHeight', productHeight).replace(':mangerNumber', mangerNumber).replace(':limit', limit).replace(':offset', offset), data, successCb, errorCb, completeCb);
}




module.exports = {
  rqLogin: rqLogin,

  rqOnePaperList: rqOnePaperList,
  rqColorPageList: rqColorPageList,
  rqDataSheetList: rqDataSheetList,
  rqCaseList: rqCaseList,
  rqStrategyList: rqStrategyList,
  rqTenderList: rqTenderList,

  rqOnePaperDetail: rqOnePaperDetail,
  rqColorPageDetail: rqColorPageDetail,
  rqDataSheetDetail: rqDataSheetDetail,
  rqQualiDetail: rqQualiDetail,
  rqWhiteDetail: rqWhiteDetail,
  rqCaseDetail: rqCaseDetail,
  rqRequireDetail: rqRequireDetail,
  rqStrategyDetail: rqStrategyDetail,
  rqTenderDetail: rqTenderDetail,
  rqPriceList: rqPriceList,
}

