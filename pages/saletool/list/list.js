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
    console.log(subcatevalue);
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
        this.getOnePaperList();
        break;
      case "DataSheet":
        this.getOnePaperList();
        break;
      case "资质列表":
        this.getOnePaperList();
        break;
      case "技术白皮书":
        this.getOnePaperList();
        break;
      case "案例集":
        this.getOnePaperList();
        break;
      case "需求挖掘":
        this.getOnePaperList();
        break;
      case "竞争策略":
        this.getOnePaperList();
        break;
      case "招标参数":
        this.getOnePaperList();
        break;
        
      default:break;
    }
  },
  
  hideFilter: function () { //关闭筛选面板
    this.setData({
      showfilter: false,
      showfilterindex: null
    })
  },

  /**
   * 获取一纸通列表数据
   */
  getOnePaperList: function () {
    const d = this.data;
    request.rqOnePaperList(d.subcatevalue, (data) => {
      console.log(data);
      // if (0 == data.code) {
      //   wx.showToast({
      //     title: '登录成功',
      //     icon: 'success',
      //     duration: 2000
      //   });
      //   setTimeout(function () {
      //     wx.navigateTo({
      //       url: '../index/index',
      //     });
      //   }, 1000);
      // } else {
      //   wx.showToast({
      //     title: '登录失败',
      //     icon: 'none',
      //     duration: 2000
      //   })
      // }
    }, () => {
      console.log('e');
    }, () => {
      console.log('c');
    });
  },

})