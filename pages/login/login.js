// pages/login/login.js
const request = require('../../requests/request.js')

Page({
  data: {
    name: '',
    pwd: ''
  },

  onLoad: function (e) {
    // wx.getStorage({
    //   key: 'IsLogin',
    //   success: function (res) {
    //     if (res.data) {
    //       wx.switchTab({
    //         url: '../index/index'
    //       })
    //     }
    //   }
    // })
  },

  bindNameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  bindPwdInput: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },

  bindInputLogin: function (e) {
    this.login();
  },

  formLogin: function (e) {
    this.login();
  },

  login: function (e) {
    let name = this.data.name;
    let pwd = this.data.pwd;
    request.rqLogin(name, pwd, (data) => {
      console.log(data);
      if (0 == data.code) {
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000
        });
        setTimeout(function () {
          wx.navigateTo({
            url: '../index/index',
          });
        }, 1000);
      } else {
        wx.showToast({
          title: '登录失败',
          icon: 'none',
          duration: 2000
        })
      }
    }, () => {
      console.log('e');
    }, () => {
      console.log('c');
    });
  }
})