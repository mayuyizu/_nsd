const API_BASE = "https://nwce.neusoft.com/lqd/";

module.exports = {

  //登录
  API_LOGIN: API_BASE + 'auth.Userldap.login.json?username=":username"&password=":password"',

  //首页


  //报价表


  //一纸通
  API_ST_ONEPAPERLIST: API_BASE + 'sale.onePaper.getOnePaperListMobile.json?onePaperType=":onePaperType"',
  API_ST_ONEPAPERDETAIL: API_BASE + 'sale.onePaper.getOnePaperDetailMobile.json?onePaperID=":onePaperID"',
  
  
  //产品彩页
  API_ST_COLORPAGELIST: API_BASE + 'sale.colorPage.getColorPageListMobile.json?colorPageType=":colorPageType"',
  API_ST_COLORPAGEDETAIL: API_BASE + 'sale.colorPage.getColorPageDetailMobile.json?colorPageID=":colorPageID"',


  //DataSheet
  API_ST_DATASHEETLIST: API_BASE + 'sale.datasheet.getDataSheetListMobile.json?datasheetType=":datasheetType"',
  API_ST_DATASHEETDETAIL: API_BASE + 'sale.datasheet.getDataSheetDetailMobile.json?datasheetID=":datasheetID"',


  //资质列表
  API_ST_QUALIDETAIL: API_BASE + 'sale.qualification.getQualificationDetailMobile.json?qualificationType=":qualificationType"',


  //技术白皮书
  API_ST_WHITEDETAIL: API_BASE + 'sale.whitepaper.getWhitepaperDetailMobile.json?whitepaperType=":whitepaperType"',


  //案例集
  API_ST_CASELIST: API_BASE + 'sale.case.getCaseListMobile.json?caseType=":caseType"',
  API_ST_CASEDETAIL: API_BASE + 'sale.case.getCaseDetailMobile.json?caseID=":caseID"',


  //需求挖掘
  API_ST_REQUIREDETAIL: API_BASE + 'sale.demandMining.getDemandDetailMobile.json',


  //竞争策略
  API_ST_STRATEGYLIST: API_BASE + 'sale.competeStrategy.getStrategyListMobile.json?strategyType=":strategyType"',
  API_ST_STRATEGYDETAIL: API_BASE + 'sale.competeStrategy.getStrategyDetailMobile.json?strategyID=":strategyID"',


  //招标参数
  API_ST_TENDERLIST: API_BASE + 'sale.tender.getTenderListMobile.json?tenderType=":tenderType"',
  API_ST_TENDERDETAIL: API_BASE + 'sale.tender.getTenderDetailMobile.json?tenderID=":tenderID"',


}