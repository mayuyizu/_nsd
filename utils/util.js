const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function isFunction(obj) {
  return typeof obj === 'function';
}

function bigImg(event) {
  var src = event.currentTarget.dataset.src;//获取data-src
  var imgList = [];//event.currentTarget.dataset.list;//获取data-list
  //图片预览
  wx.previewImage({
    current: src, // 当前显示图片的http链接
    urls: imgList.concat(src) // 需要预览的图片http链接列表
  })
}

function downPDF(event) {
  wx.showLoading({
    title: '加载中',
  });
  wx.downloadFile({
    url: event.currentTarget.dataset.url,
    success: function (res) {
      var Path = res.tempFilePath //返回的文件临时地址，用于后面打开本地预览所用
      wx.openDocument({
        filePath: Path,
        success: function (res) {
          console.log(res);
          wx.hideLoading();
        }
      })
    },
    fail: function (res) {
      console.log(res);
      wx.hideLoading();
    }
  });
}

module.exports = {
  formatTime: formatTime,
  isFunction: isFunction,
  bigImg: bigImg,
  downPDF: downPDF
}
