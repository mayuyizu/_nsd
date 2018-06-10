const request = require('../../../requests/request.js')
const util = require('../../../utils/util.js')
var app = getApp();

Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2500,
    duration: 1200,
    
    num: 1, //数量
    goldnum: 1, //金牌
    silvernum: 1, //银牌
    coppernum: 1, //铜牌
    numPrice: 12, //裸机价格
    goldPrice: 12, //金牌价格
    silverPrice: 12, //银牌价格
    copperPrice: 12, //铜牌价格
    hardList: [
      { "PN": "OpenStack-LBaaSController-LIC-50", "hardnum": 1, "hardPrice": 12, "hardTip": "hardTip"}
    ], //硬件模块
    softList: [
      { "PN": "OpenStack-LBaaSController-LIC-50", "softnum": 1, "softPrice": 22, "softTip": "softTip" }
    ], //软件模块

    stName: "NISG1001001", //名称
    stIntroduction: "东软 NetEye 集成安全网关 (NISG) 采用业界领先的多核并行计算架构， 以东软多年创新的流过滤检测技术为核心， 通过模块化设计融合了多种安全技术。", //简介
    toast1: {
      show: false,
      alertWarn: 'warn',
      info: ''
    },
    toast2: {
      show: false
    }
  },
  
  onLoad: function(e){
  },

  onReady: function(){
  },

  /**
   * 一纸通
   */
  getOnePaperDetail: function () {
    const d = this.data;
    request.rqOnePaperDetail("1527816822823", (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      const newlist1 = [];
      let onePaperImgList = data.data.onePaperImgList;
      for (var i = 0; i < onePaperImgList.length; i++) {
        newlist1.push({
          "url": onePaperImgList[i],
        })
      }
      const newlist2 = [];
      let onePaperFeatureList = data.data.onePaperFeatureList;
      for (var i = 0; i < onePaperFeatureList.length; i++) {
        newlist2.push({
          "id": onePaperFeatureList[i].featureID,
          "title": onePaperFeatureList[i].featureTitle,
          "content": onePaperFeatureList[i].featureContent,
          "img": onePaperFeatureList[i].featureImg.length == 0 ? "" : onePaperFeatureList[i].featureImg[0].url
        })
      }
      _this.setData({
        stName: data.data.onePaperName,
        stIntroduction: data.data.onePaperIntroduction,
        imgUrls: _this.data.imgUrls.concat(newlist1),
        featureList: _this.data.featureList.concat(newlist2)
      });

    }, () => {
      console.log('e');
    }, () => {
    });
  },

  alertWarn: function (e) { //提示信息框
    let _type = e.currentTarget.dataset.type;
    console.log(_type);
    let _title = "";
    let _content = "";
    var obj = {
      pointer: this,
      title:'title',
      content:'content',
      duration: 3000
    }
    app.toast2(obj);
  },

  minusNum: function () { //购买数量-
    this.data.num--;
    if(this.data.num>=0){
      this.setData({
        num:this.data.num
      })
    }else{
      this.data.num++;
      var obj = {
        pointer: this,
        info: '数量不能小于0！',
        duration: 2000
      }
      app.toast1(obj);
    }
  },

  plusNum: function () { //购买数量+

  },

  minusGoldNum: function () { //金牌数量-

  },

  plusGoldNum: function () { //金牌数量+

  },

  minusSilverNum: function () { //银牌数量-

  },

  plusSilverNum: function () { //银牌数量+

  },

  minusCopperNum: function () { //铜牌数量-

  },

  plusCopperNum: function () { //铜牌数量+

  },

  minusHardNum: function () { //硬件数量-

  },

  plusHardNum: function () { //硬件数量+

  },

  minusSoftNum: function () { //软件数量-

  },

  plusSoftNum: function () { //软件数量+

  },

})