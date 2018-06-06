const api = require('../../../requests/api.js')
const request = require('../../../requests/request.js')

Page({
  data: {
    selectedItem:"", //当前选择项
    filterdata: {},  //筛选条件数据
    showfilter: false, //是否显示下拉筛选
    showfilterindex: null, //显示哪个筛选类目
    cateindex: 0,  //一级分类索引
    catetitle: "", //一级分类title
    subcateindex: -1, //二级分类索引
    subcatevalue: "", //二级分类value
    listdata: [],//
    page: 0  //分页
  },

  onLoad: function () { //加载数据渲染页面
    this.fetchFilterData();
  },

  onReady: function(){
    this.setData({
      subcateindex: 0,
      catetitle: "一纸通",
      subcatevalue: "",
      selectedItem: "一纸通 / 全部",
    });
    this.getOnePaperList();
  },

  fetchFilterData: function () { //获取筛选条件
    this.setData({
      filterdata: {
        "cate": [
          {
            "id": 0,
            "title": "一纸通",
            "cate_two": [
              {
                "id": 0,
                "title": "全部",
                "value": ""
              },
              {
                "id": 1,
                "title": "FW",
                "value": "FW"
              },
              {
                "id": 2,
                "title": "NISG",
                "value": "NISG"
              },
              {
                "id": 3,
                "title": "IPS",
                "value": "IPS"
              }
            ]
          },
          {
            "id": 1,
            "title": "产品彩页",
            "cate_two": [
              {
                "id": 0,
                "title": "全部",
                "value": ""
              },
              {
                "id": 1,
                "title": "FW",
                "value": "FW"
              },
              {
                "id": 2,
                "title": "NISG",
                "value": "NISG"
              },
              {
                "id": 3,
                "title": "IPS",
                "value": "IPS"
              }
            ]
          },
          {
            "id": 2,
            "title": "DataSheet",
            "cate_two": [
              {
                "id": 0,
                "title": "全部",
                "value": ""
              },
              {
                "id": 1,
                "title": "FW",
                "value": "FW"
              },
              {
                "id": 2,
                "title": "NISG",
                "value": "NISG"
              },
              {
                "id": 3,
                "title": "IPS",
                "value": "IPS"
              }
            ]
          },
          {
            "id": 3,
            "title": "资质列表",
            "cate_two": [
              {
                "id": 0,
                "title": "FW",
                "value": "FW"
              },
              {
                "id": 1,
                "title": "NISG",
                "value": "NISG"
              },
              {
                "id": 2,
                "title": "IPS",
                "value": "IPS"
              }
            ]
          },
          {
            "id": 4,
            "title": "技术白皮书",
            "cate_two": [
              {
                "id": 0,
                "title": "FW",
                "value": "FW"
              },
              {
                "id": 1,
                "title": "NISG",
                "value": "NISG"
              },
              {
                "id": 2,
                "title": "IPS",
                "value": "IPS"
              }
            ]
          },
          {
            "id": 5,
            "title": "案例集",
            "cate_two": [
              {
                "id": 0,
                "title": "公共事业",
                "value": "case01"
              },
              {
                "id": 1,
                "title": "国防",
                "value": "case02"
              },
              {
                "id": 2,
                "title": "财务",
                "value": "case03"
              },
              {
                "id": 3,
                "title": "交通",
                "value": "case04"
              },
              {
                "id": 4,
                "title": "电力",
                "value": "case05"
              },
              {
                "id": 5,
                "title": "电信",
                "value": "case06"
              },
              {
                "id": 6,
                "title": "金融",
                "value": "case07"
              },
              {
                "id": 7,
                "title": "公检法",
                "value": "case08"
              },
              {
                "id": 8,
                "title": "医疗",
                "value": "case09"
              },
              {
                "id": 9,
                "title": "烟草",
                "value": "case10"
              },
              {
                "id": 10,
                "title": "教育",
                "value": "case11"
              },
              {
                "id": 11,
                "title": "企业",
                "value": "case12"
              }
            ]
          },
          {
            "id": 6,
            "title": "需求挖掘",
            "cate_two": [
              {
                "id": 0,
                "title": "全部",
                "value": ""
              },
            ]
          },
          {
            "id": 7,
            "title": "竞争策略",
            "cate_two": [
              {
                "id": 0,
                "title": "全部",
                "value": ""
              },
              {
                "id": 1,
                "title": "FW",
                "value": "FW"
              },
              {
                "id": 2,
                "title": "NISG",
                "value": "NISG"
              },
              {
                "id": 3,
                "title": "IPS",
                "value": "IPS"
              }
            ]
          },
          {
            "id": 8,
            "title": "招标参数",
            "cate_two": [
              {
                "id": 0,
                "title": "全部",
                "value": ""
              },
              {
                "id": 1,
                "title": "FW",
                "value": "FW"
              },
              {
                "id": 2,
                "title": "NISG",
                "value": "NISG"
              },
              {
                "id": 3,
                "title": "IPS",
                "value": "IPS"
              }
            ]
          },
        ]
      }
    })
  },

  setFilterPanel: function (e) { //展开筛选面板
    const d = this.data;
    const i = e.currentTarget.dataset.findex;
    if (d.showfilterindex == i) {
      this.setData({
        showfilter: false,
        showfilterindex: null
      })
    } else {
      this.setData({
        showfilter: true,
        showfilterindex: i,
      })
    }
  },

  setCateIndex: function (e) { //分类一级索引
    const d = this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      cateindex: dataset.cateindex,
      subcateindex: -1,//d.cateindex == dataset.cateindex ? d.subcateindex : 0,
      catetitle: d.filterdata.cate[dataset.cateindex].title
    })
  },

  setSubcateIndex: function (e) { //分类二级索引
    const d = this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      subcateindex: dataset.subcateindex,
      subcatevalue: d.filterdata.cate[d.cateindex].cate_two[dataset.subcateindex].value,
      selectedItem: d.catetitle + " / " + d.filterdata.cate[d.cateindex].cate_two[dataset.subcateindex].title
    });
    console.log(d.subcatevalue);
    this.getList();
  },

  /**
   * getlist
   */
  getList: function(){
    const d = this.data;
    switch(d.catetitle){
      case "一纸通":
        this.getOnePaperList();
        break;
      case "产品彩页":
        this.getColorPageList();
        break;
      case "DataSheet":
        this.getDataSheetList();
        break;
      case "资质列表":
        wx.navigateTo({
          url: '../detail/detail?_type=' + this.data.catetitle + '&_id=' + this.data.subcatevalue,
        })
        break;
      case "技术白皮书":
        wx.navigateTo({
          url: '../detail/detail?_type=' + this.data.catetitle + '&_id=' + this.data.subcatevalue,
        })
        break;
      case "案例集":
        this.getCaseList();
        break;
      case "需求挖掘":
        wx.navigateTo({
          url: '../detail/detail?_type=' + this.data.catetitle + '&_id=' + this.data.subcatevalue,
        })
        break;
      case "竞争策略":
        this.getStrategyList();
        break;
      case "招标参数":
        this.getTenderList();
        break;
        
      default:break;
    }
  },

  /**
   * 
   */
  toDetail:function(e){
    console.log(e);
    const _id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?_type=' + this.data.catetitle + '&_id=' + _id,
    })
  },
  
  hideFilter: function () { //关闭筛选面板
    this.setData({
      showfilter: false,
      showfilterindex: null
    })
  },

  cleardata: function () { //关闭筛选面板
    this.setData({
      listdata: []
    })
  },

  /**
   * 一纸通
   */
  getOnePaperList: function () {
    const d = this.data;
    request.rqOnePaperList(d.subcatevalue, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      _this.cleardata();
      const newlist = [];
      let onePaperList = data.data.onePaperList;
      for (var i = 0; i < onePaperList.length; i++) {
        newlist.push({
          "id": onePaperList[i].onePaperID,
          "name": onePaperList[i].onePaperName,
          "des": onePaperList[i].onePaperIntroduction,
          "thumb": "" == onePaperList[i].thumbImg ? "../../../image/def.png" : onePaperList[i].thumbImg
        })
      }
      _this.setData({
        listdata: _this.data.listdata.concat(newlist)
      });

    }, () => {
      console.log('e');
    }, () => {
      this.hideFilter();
    });
  },

  /**
   * 产品彩页
   */
  getColorPageList: function () {
    const d = this.data;
    request.rqColorPageList(d.subcatevalue, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      _this.cleardata();
      const newlist = [];
      let colorPageList = data.data.colorPageList;
      for (var i = 0; i < colorPageList.length; i++) {
        newlist.push({
          "id": colorPageList[i].colorPageID,
          "name": colorPageList[i].colorPageName,
          "des": colorPageList[i].colorPageIntroduction,
          "thumb": "" == colorPageList[i].thumbImg ? "../../../image/def.png" : colorPageList[i].thumbImg
        })
      }
      _this.setData({
        listdata: _this.data.listdata.concat(newlist)
      });

    }, () => {
      console.log('e');
    }, () => {
      this.hideFilter();
    });
  },

  /**
   * DataSheet
   */
  getDataSheetList: function () {
    const d = this.data;
    request.rqDataSheetList(d.subcatevalue, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      _this.cleardata();
      const newlist = [];
      let datasheetList = data.data.datasheetList;
      for (var i = 0; i < datasheetList.length; i++) {
        newlist.push({
          "id": datasheetList[i].datasheetID,
          "name": datasheetList[i].datasheetName,
          "des": datasheetList[i].datasheetIntroduction,
          "thumb": "" == datasheetList[i].thumbImg ? "../../../image/def.png" : datasheetList[i].thumbImg
        })
      }
      _this.setData({
        listdata: _this.data.listdata.concat(newlist)
      });

    }, () => {
      console.log('e');
    }, () => {
      this.hideFilter();
    });
  },

  /**
   * 资质列表
   */
  getQualiList: function () {
    
  },

  /**
   * 技术白皮书
   */
  getWhiteList: function () {
    
  },

  /**
   * 案例集
   */
  getCaseList: function () {
    const d = this.data;
    request.rqCaseList(d.subcatevalue, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      _this.cleardata();
      const newlist = [];
      let caseList = data.data.caseList;
      for (var i = 0; i < caseList.length; i++) {
        newlist.push({
          "id": caseList[i].caseID,
          "name": caseList[i].caseName,
          "des": caseList[i].caseIntroduction,
          "thumb": "" == caseList[i].thumbImg ? "../../../image/def.png" : caseList[i].thumbImg
        })
      }
      _this.setData({
        listdata: _this.data.listdata.concat(newlist)
      });

    }, () => {
      console.log('e');
    }, () => {
      this.hideFilter();
    });
  },

  /**
   * 需求挖掘
   */
  getRequireList: function () {
    
  },

  /**
   * 竞争策略
   */
  getStrategyList: function () {
    const d = this.data;
    request.rqStrategyList(d.subcatevalue, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      _this.cleardata();
      const newlist = [];
      let strategyList = data.data.strategyList;
      for (var i = 0; i < strategyList.length; i++) {
        newlist.push({
          "id": strategyList[i].strategyID,
          "name": strategyList[i].strategyName,
          "des": strategyList[i].strategyIntroduction,
          "thumb": "" == strategyList[i].thumbImg ? "../../../image/def.png" : strategyList[i].thumbImg
        })
      }
      _this.setData({
        listdata: _this.data.listdata.concat(newlist)
      });

    }, () => {
      console.log('e');
    }, () => {
      this.hideFilter();
    });
  },

  /**
   * 招标参数
   */
  getTenderList: function () {
    const d = this.data;
    request.rqTenderList(d.subcatevalue, (data) => {
      let _this = this;
      console.log(data);
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      });
      _this.cleardata();
      const newlist = [];
      let tenderList = data.data.tenderList;
      for (var i = 0; i < tenderList.length; i++) {
        newlist.push({
          "id": tenderList[i].tenderID,
          "name": tenderList[i].tenderName,
          "des": tenderList[i].tenderIntroduction,
          "thumb": "" == tenderList[i].thumbImg ? "../../../image/def.png" : tenderList[i].thumbImg
        })
      }
      _this.setData({
        listdata: _this.data.listdata.concat(newlist)
      });

    }, () => {
      console.log('e');
    }, () => {
      this.hideFilter();
    });
  },

})