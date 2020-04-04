//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   bannerSrc:[
     '/assets/banner1.jpg',
     '/assets/banner2.jpg',
     '/assets/banner3.jpg',
     '/assets/banner4.jpg',
     '/assets/banner5.jpg',
     '/assets/banner6.jpg',
   ],
   indexData:null
  },
  getIndexData(){
    wx.request({
      url: 'https://novel.kele8.cn/category-info?gender=male&type=hot&major=%E9%83%BD%E5%B8%82&minor=&start=0&limit=6',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        this.setData({
          indexData: (res.data.books).splice(0,4)
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //事件处理函数
  navigateToSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  navigateToCategory(){
    wx.navigateTo({
      url: '/pages/category/category',
    })
  },
  onLoad: function () {
    this.getIndexData()
  },

})
