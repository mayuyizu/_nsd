const request = require('../../../requests/request.js')

Page({
  data: {
    filterdata: {},  //筛选条件数据
    showfilter: false, //是否显示下拉筛选
    showfilterindex: null, //显示哪个筛选类目
    typeindex: 0,  //类型索引
    typetitle: "类型", //类型title
    heightindex: 0,  //高度索引
    heighttitle: "高度", //高度title
    slotindex: 0,  //插槽索引
    slottitle: "插槽", //插槽title
    _price: "", //价格
    price_: "",
    _ji: "", //整机吞吐
    ji_: "",
    _qianzhao: "", //千兆接口
    qianzhao_: "",
    _wanzhao: "", //万兆接口
    wanzhao_: "",
    _bingfa: "", //并发连接
    bingfa_: "",
    _new: "", //新建连接
    new_: "",
    _ips: "", //IPS吞吐
    ips_: "",
    _ipsec: "", //IPSec吞吐
    ipsec_: "",
    _ssl: "", //SSL吞吐
    ssl_: "",
    _bingdu: "", //防病毒吞吐
    bingdu_: "",
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
    this.getPriceList();
    this.rqPriceList();
  },

  fetchFilterData: function () { //获取筛选条件
    this.setData({
      filterdata: {
        "type": [
          {
            "id": -1,
            "title": "不限",
            "value": ""
          },
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
          },
        ],
        "height": [
          {
            "id": -1,
            "title": "不限",
            "value": ""
          },
          {
            "id": 0,
            "title": "1U",
            "value": "1U"
          },
          {
            "id": 1,
            "title": "2U",
            "value": "2U"
          },
          {
            "id": 2,
            "title": "桌面型",
            "value": "desk"
          },
        ],
        "slot": [
          {
            "id": -1,
            "title": "不限",
            "value": ""
          },
          {
            "id": 0,
            "title": "0",
            "value": "0"
          },
          {
            "id": 1,
            "title": "1",
            "value": "1"
          },
          {
            "id": 2,
            "title": "2",
            "value": "2"
          },{
            "id": 3,
            "title": "4",
            "value": "4"
          },
          {
            "id": 4,
            "title": "8",
            "value": "8"
          }
        ],
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

  //类型索引
  setTypeIndex: function (e) {
    const d = this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      typeindex: dataset.typeindex,
      typetitle: 0 == dataset.typeindex?"类型":d.filterdata.type[dataset.typeindex].title
    });
    this.getPriceList();
  },

  //高度索引
  setHeightIndex: function (e) {
    const d = this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      heightindex: dataset.heightindex,
      heighttitle: 0 == dataset.heightindex ? "高度" : d.filterdata.height[dataset.heightindex].title
    });
    this.getPriceList();
  },

  //插槽索引
  setSlotIndex: function (e) {
    const d = this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      slotindex: dataset.slotindex,
      slottitle: 0 == dataset.slotindex ? "插槽" : d.filterdata.slot[dataset.slotindex].title
    });
    this.getPriceList();
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

  cleanInput: function (e) { //清空表单
    this.setData({
      _price: "",
      price_: "",
      _ji: "",
      ji_: "",
      _qianzhao: "",
      qianzhao_: "",
      _wanzhao: "",
      wanzhao_: "",
      _bingfa: "",
      bingfa_: "",
      _new: "",
      new_: "",
      _ips: "",
      ips_: "",
      _ipsec: "",
      ipsec_: "",
      _ssl: "",
      ssl_: "",
      _bingdu: "",
      bingdu_: "",
    })
  },

  btn_search:function(e){ //搜索数据
    this.setData({
      _price: e.detail.value._price,
      price_: e.detail.value.price_,
      _ji: e.detail.value._ji,
      ji_: e.detail.value.ji_,
      _qianzhao: e.detail.value._qianzhao,
      qianzhao_: e.detail.value.qianzhao_,
      _wanzhao: e.detail.value._wanzhao,
      wanzhao_: e.detail.value.wanzhao_,
      _bingfa: e.detail.value._bingfa,
      bingfa_: e.detail.value.bingfa_,
      _new: e.detail.value._new,
      new_: e.detail.value.new_,
      _ips: e.detail.value._ips,
      ips_: e.detail.value.ips_,
      _ipsec: e.detail.value._ipsec,
      ipsec_: e.detail.value.ipsec_,
      _ssl: e.detail.value._ssl,
      ssl_: e.detail.value.ssl_,
      _bingdu: e.detail.value._bingdu,
      bingdu_: e.detail.value.bingdu_,
    });
    this.getPriceList();
  },

  /**
   * list
   */
  getPriceList: function () {
    this.hideFilter();
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

  rqPriceList: function(){
    const data=this.data;
    let datalist = this.formatDatalist();
    request.rqPriceList("", "", "", 20, 0, datalist,
      // {
      //   quotationPrice: '[' + data._price + ',' + data.price_ + ']',
      //   totalThroughput: '"' + data._ji + ',' + data.ji_ + '"',
      //   gigabitInterface: '"' + data._qianzhao + ',' + data.qianzhao_ + '"',
      //   tenThousandTrillionInterface: '"' + data._wanzhao + ',' + data.wanzhao_ + '"',
      //   maximumConcurrentConnections: '"' + data._bingfa + ',' + data.bingfa_ + '"',
      //   newConnection: '"' + data._new + ',' + data.new_ + '"',
      //   IPSThroughput: '"' + data._ips + ',' + data.ips_ + '"',
      //   IPsecVPNThroughput: '"' + data._ipsec + ',' + data.ipsec_ + '"',
      //   SSLVPNThroughput: '"' + data._ssl + ',' + data.ssl_ + '"',
      //   antivirusThroughput: '"' + data._bingdu + ',' + data.bingdu_ + '"'
      // },
    (data) => {
      let _this = this;
      console.log(data);
    }, () => {
    }, () => {
    });
  },

  formatDatalist:function(){
    const data = this.data;
    // quotationPrice: '[' + data._price + ',' + data.price_ + ']',
    // totalThroughput: '"' + data._ji + ',' + data.ji_ + '"',
    // gigabitInterface: '"' + data._qianzhao + ',' + data.qianzhao_ + '"',
    // tenThousandTrillionInterface: '"' + data._wanzhao + ',' + data.wanzhao_ + '"',
    // maximumConcurrentConnections: '"' + data._bingfa + ',' + data.bingfa_ + '"',
    // newConnection: '"' + data._new + ',' + data.new_ + '"',
    // IPSThroughput: '"' + data._ips + ',' + data.ips_ + '"',
    // IPsecVPNThroughput: '"' + data._ipsec + ',' + data.ipsec_ + '"',
    // SSLVPNThroughput: '"' + data._ssl + ',' + data.ssl_ + '"',
    // antivirusThroughput: '"' + data._bingdu + ',' + data.bingdu_ + '"'

    return {
      quotationPrice: '[' + (data._price == "" && data.price_ == "" ? "" : (data._price != "" && data.price_ != "" ? data._price + "," + data.price_ : (data._price == "" ? data.price_ : data._price))) + ']',
      totalThroughput: '[' + (data._ji == "" && data.ji_ == "" ? "" : (data._ji != "" && data.ji_ != "" ? data._ji + "," + data.ji_ : (data._ji == "" ? data.ji_ : data._ji))) + ']',
      gigabitInterface: '[' + (data._qianzhao == "" && data.qianzhao_ == "" ? "" : (data._qianzhao != "" && data.qianzhao_ != "" ? data._qianzhao + "," + data.qianzhao_ : (data._qianzhao == "" ? data.qianzhao_ : data._qianzhao))) + ']',
      tenThousandTrillionInterface: '[' + (data._wanzhao == "" && data.wanzhao_ == "" ? "" : (data._wanzhao != "" && data.wanzhao_ != "" ? data._wanzhao + "," + data.wanzhao_ : (data._wanzhao == "" ? data.wanzhao_ : data._wanzhao))) + ']',
      maximumConcurrentConnections: '[' + (data._bingfa == "" && data.bingfa_ == "" ? "" : (data._bingfa != "" && data.bingfa_ != "" ? data._bingfa + "," + data.bingfa_ : (data._bingfa == "" ? data.bingfa_ : data._bingfa))) + ']',
      newConnection: '[' + (data._new == "" && data.new_ == "" ? "" : (data._new != "" && data.new_ != "" ? data._new + "," + data.new_ : (data._new == "" ? data.new_ : data._new))) + ']',
      IPSThroughput: '[' + (data._ips == "" && data.ips_ == "" ? "" : (data._ips != "" && data.ips_ != "" ? data._ips + "," + data.ips_ : (data._ips == "" ? data.ips_ : data._ips))) + ']',
      IPsecVPNThroughput: '[' + (data._ipsec == "" && data.ipsec_ == "" ? "" : (data._ipsec != "" && data.ipsec_ != "" ? data._ipsec + "," + data.ipsec_ : (data._ipsec == "" ? data.ipsec_ : data._ipsec))) + ']',
      SSLVPNThroughput: '[' + (data._ssl == "" && data.ssl_ == "" ? "" : (data._ssl != "" && data.ssl_ != "" ? data._ssl + "," + data.ssl_ : (data._ssl == "" ? data.ssl_ : data._ssl))) + ']',
      antivirusThroughput: '[' + (data._bingdu == "" && data.bingdu_ == "" ? "" : (data._bingdu != "" && data.bingdu_ != "" ? data._bingdu + "," + data.bingdu_ : (data._bingdu == "" ? data.bingdu_ : data._bingdu))) + ']',
    };
  }

})