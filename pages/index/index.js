//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    hotgoods: [
      {
        "name": "报价表",
        "pic_url": "../../image/baojia.png",
        "url":"../price/list/list"
      },
      {
        "name": "销售工具",
        "pic_url": "../../image/st.png",
        "url": "http://home.mi.com/shop/detail?gid=95",
        "url": "../saletool/list/list"
      },
      {
        "name": "调查问卷",
        "pic_url": "../../image/wenjuan.png",
        "url": ""
      }
    ]
  },

  onLoad: function () {
    console.log('onLoad')
  },

  //
  navigation: function (e) {
    let url = e.currentTarget.dataset.nav;
    if("" == url){
      wx.showToast({
        title: '暂无数据',
        icon: 'none'
      });
    }else{
      wx.navigateTo({
        url: url
      });
    }
  }

})
