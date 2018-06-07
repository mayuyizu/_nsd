const request = require('../../../requests/request.js')
const util = require('../../../utils/util.js')

Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2500,
    duration: 1200,
    
    _type: "", //一级分类
    _id: "", //二级分类
    stName: "", //名称
    stIntroduction: "", //简介
    pdfUrl: "", //PDF
    featureList: [], //亮点数组

    //DataSheet
    texingImg: "", //特性列表图片
    yingyongImg: "", //应用场景图片
    guanjianImg: "", //关键指标图片
    kuozhanImg: "", //扩展模块图片
    ruanjianImg: "", //软件模块图片

    //资质列表
    zizhiList: [],//

    //案例集
    userRequirement:"", //用户需求
    userSolution:"", //解决方案
    caseValue:"", //方案价值
    solutionImg:"", //方案图片

    //竞争策略
    strategy:"", //策略内容


  },
  
  onLoad: function(e){
    console.log(e);
    this.setData({
      _type: e._type,
      _id: e._id,
    })
  },

  onReady: function(){
      this.getDetail();
  },

  getDetail: function(){
    const d = this.data;
    switch (d._type) {
      case "一纸通":
        this.getOnePaperDetail();
        break;
      case "产品彩页":
        this.getColorPageDetail();
        break;
      case "DataSheet":
        this.getDataSheetDetail();
        break;
      case "资质列表":
        this.getQualiDetail();
        break;
      case "技术白皮书":
        this.getWhiteDetail();
        break;
      case "案例集":
        this.getCaseDetail();
        break;
      case "需求挖掘":
        this.getRequireDetail();
        break;
      case "竞争策略":
        this.getStrategyDetail();
        break;
      case "招标参数":
        this.getTenderDetail();
        break;

      default: break;
    }
  },

  /**
   * 一纸通
   */
  getOnePaperDetail: function () {
    const d = this.data;
    request.rqOnePaperDetail(d._id, (data) => {
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

  /**
   * 产品彩页
   */
  getColorPageDetail: function () {
    const d = this.data;
    request.rqColorPageDetail(d._id, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      const newlist1 = [];
      let colorPageImgList = data.data.colorPageImgList;
      for (var i = 0; i < colorPageImgList.length; i++) {
        newlist1.push({
          "url": colorPageImgList[i],
        })
      }
      const newlist2 = [];
      let colorPageFeatureList = data.data.colorPageFeatureList;
      for (var i = 0; i < colorPageFeatureList.length; i++) {
        newlist2.push({
          "id": colorPageFeatureList[i].featureID,
          "title": colorPageFeatureList[i].featureTitle,
          "content": colorPageFeatureList[i].featureContent,
          "img": colorPageFeatureList[i].featureImg.length == 0 ? "" : colorPageFeatureList[i].featureImg[0].url
        })
      }
      _this.setData({
        stName: data.data.colorPageName,
        stIntroduction: data.data.colorPageIntroduction,
        pdfUrl: ""==data.data.pdfFile?"":data.data.pdfFile[0].url,
        imgUrls: _this.data.imgUrls.concat(newlist1),
        featureList: _this.data.featureList.concat(newlist2)
      });

    }, () => {
      console.log('e');
    }, () => {
    });
  },

  /**
   * DataSheet
   */
  getDataSheetDetail: function () {
    const d = this.data;
    request.rqDataSheetDetail(d._id, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      const newlist1 = [];
      let datasheetImgList = data.data.datasheetImgList;
      for (var i = 0; i < datasheetImgList.length; i++) {
        newlist1.push({
          "url": datasheetImgList[i],
        })
      }
      const newlist2 = [];
      let datasheetFeatureList = data.data.datasheetFeatureList;
      for (var i = 0; i < datasheetFeatureList.length; i++) {
        newlist2.push({
          "id": datasheetFeatureList[i].featureID,
          "title": datasheetFeatureList[i].featureTitle,
          "content": datasheetFeatureList[i].featureContent,
          "img": datasheetFeatureList[i].featureImg.length == 0 ? "" : datasheetFeatureList[i].featureImg[0].url
        })
      }
      _this.setData({
        stName: data.data.datasheetName,
        stIntroduction: data.data.datasheetIntroduction,
        pdfUrl: "" == data.data.pdfFile ? "" : data.data.pdfFile[0].url,
        imgUrls: _this.data.imgUrls.concat(newlist1),
        featureList: _this.data.featureList.concat(newlist2),
        texingImg: "" == data.data.featurelistImg.img ? "" : data.data.featurelistImg.img[0].url,
        yingyongImg: "" == data.data.applicationsceneImg.img ? "" : data.data.applicationsceneImg.img[0].url,
        guanjianImg: "" == data.data.keyImg.img ? "" : data.data.keyImg.img[0].url,
        kuozhanImg: "" == data.data.extendedImg.img ? "" : data.data.extendedImg.img[0].url,
        ruanjianImg: "" == data.data.softwareImg.img ? "" : data.data.softwareImg.img[0].url,
      });

    }, () => {
      console.log('e');
    }, () => {
    });
  },

  /**
   * 资质列表
   */
  getQualiDetail: function () {
    const d = this.data;
    request.rqQualiDetail(d._id, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      const newlist1 = [];
      let qualificationImgList = data.data.qualificationImgList;
      for (var i = 0; i < qualificationImgList.length; i++) {
        newlist1.push({
          "url": qualificationImgList[i],
        })
      }
      const newlist2 = [];
      let qualificationList = data.data.qualificationList;
      for (var i = 0; i < qualificationList.length; i++) {
        newlist2.push({
          "name": qualificationList[i].qualificationName,
          "time": qualificationList[i].qualificationIndate
        })
      }
      _this.setData({
        stName: "资质列表",
        stIntroduction: data.data.qualificationIntroduction,
        pdfUrl: "" == data.data.pdfFile ? "" : data.data.pdfFile[0].url,
        imgUrls: _this.data.imgUrls.concat(newlist1),
        zizhiList: _this.data.featureList.concat(newlist2)
      });

    }, () => {
      console.log('e');
    }, () => {
    });
  },

  /**
   * 技术白皮书
   */
  getWhiteDetail: function () {
    const d = this.data;
    request.rqWhiteDetail(d._id, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      const newlist1 = [];
      let whitepaperImgList = data.data.whitepaperImgList;
      for (var i = 0; i < whitepaperImgList.length; i++) {
        newlist1.push({
          "url": whitepaperImgList[i],
        })
      }
      const newlist2 = [];
      let whitepaperFeatureList = data.data.whitepaperFeatureList;
      for (var i = 0; i < whitepaperFeatureList.length; i++) {
        newlist2.push({
          "id": whitepaperFeatureList[i].featureID,
          "title": whitepaperFeatureList[i].featureTitle,
          "content": whitepaperFeatureList[i].featureContent,
          "img": whitepaperFeatureList[i].featureImg.length == 0 ? "" : whitepaperFeatureList[i].featureImg[0].url
        })
      }
      _this.setData({
        stName: "技术白皮书",
        stIntroduction: data.data.whitepaperIntroduction,
        pdfUrl: "" == data.data.pdfFile ? "" : data.data.pdfFile[0].url,
        imgUrls: _this.data.imgUrls.concat(newlist1),
        featureList: _this.data.featureList.concat(newlist2)
      });

    }, () => {
      console.log('e');
    }, () => {
    });
  },

  /**
  * 案例集
  */
  getCaseDetail: function () {
    const d = this.data;
    request.rqCaseDetail(d._id, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      const newlist1 = [];
      let caseImgList = data.data.caseImgList;
      for (var i = 0; i < caseImgList.length; i++) {
        newlist1.push({
          "url": caseImgList[i],
        })
      }
      _this.setData({
        stName: data.data.caseName,
        stIntroduction: data.data.caseIntroduction,
        pdfUrl: "" == data.data.pdfFile ? "" : data.data.pdfFile[0].url,
        imgUrls: _this.data.imgUrls.concat(newlist1),
        userRequirement: data.data.userRequirement,
        userSolution: data.data.userSolution,
        caseValue: data.data.caseValue,
        solutionImg: "" == data.data.solutionImg ? "" : data.data.solutionImg[0].url,
      });

    }, () => {
      console.log('e');
    }, () => {
    });
  },

  /**
   * 需求挖掘
   */
  getRequireDetail: function () {
    const d = this.data;
    request.rqRequireDetail((data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      const newlist1 = [];
      let demandImgList = data.data.demandImgList;
      for (var i = 0; i < demandImgList.length; i++) {
        newlist1.push({
          "url": demandImgList[i],
        })
      }
      const newlist2 = [];
      let demandList = data.data.demandList;
      for (var i = 0; i < demandList.length; i++) {
        newlist2.push({
          "content": demandList[i],
        })
      }
      _this.setData({
        stName:"需求列表",
        stIntroduction: data.data.demandIntroduction,
        pdfUrl: "" == data.data.pdfFile ? "" : data.data.pdfFile[0].url,
        imgUrls: _this.data.imgUrls.concat(newlist1),
        featureList: _this.data.featureList.concat(newlist2)
      });
      
    }, () => {
      console.log('e');
    }, () => {
    });
  },

  /**
   * 竞争策略
   */
  getStrategyDetail: function () {
    const d = this.data;
    request.rqStrategyDetail(d._id, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      const newlist1 = [];
      let strategyImgList = data.data.strategyImgList;
      for (var i = 0; i < strategyImgList.length; i++) {
        newlist1.push({
          "url": strategyImgList[i],
        })
      }
      const newlist2 = [];
      let analysisList = data.data.analysisList;
      for (var i = 0; i < analysisList.length; i++) {
        newlist2.push({
          "id": analysisList[i].analysisID,
          "title": analysisList[i].analysisTitle,
          "img": analysisList[i].analysisImg.length == 0 ? "" : analysisList[i].analysisImg[0].url
        })
      }
      _this.setData({
        stName: data.data.strategyName,
        stIntroduction: data.data.strategyIntroduction,
        strategy: data.data.strategy,
        pdfUrl: "" == data.data.pdfFile ? "" : data.data.pdfFile[0].url,
        imgUrls: _this.data.imgUrls.concat(newlist1),
        featureList: _this.data.featureList.concat(newlist2)
      });

    }, () => {
      console.log('e');
    }, () => {
    });
  },

  /**
   * 招标参数
   */
  getTenderDetail: function () {
    const d = this.data;
    request.rqTenderDetail(d._id, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      const newlist1 = [];
      let tenderImgList = data.data.tenderImgList;
      for (var i = 0; i < tenderImgList.length; i++) {
        newlist1.push({
          "url": tenderImgList[i],
        })
      }
      const newlist2 = [];
      let tenderList = data.data.tenderList;
      for (var i = 0; i < tenderList.length; i++) {
        newlist2.push({
          "id": tenderList[i].tenderItemID,
          "title": tenderList[i].tenderItemTitle,
          "img": tenderList[i].tenderItemImg.length == 0 ? "" : tenderList[i].tenderItemImg[0].url
        })
      }
      _this.setData({
        stName: data.data.tenderName,
        stIntroduction: data.data.tenderIntroduction,
        pdfUrl: "" == data.data.pdfFile ? "" : data.data.pdfFile[0].url,
        imgUrls: _this.data.imgUrls.concat(newlist1),
        featureList: _this.data.featureList.concat(newlist2)
      });

    }, () => {
      console.log('e');
    }, () => {
    });
  },


  /**
   * 查看大图
   */
  bigImg: function(event){
    util.bigImg(event);
  },

  /**
   * 下载PDF
   */
  downPDF: function (event) {
    util.downPDF(event);
  }

})