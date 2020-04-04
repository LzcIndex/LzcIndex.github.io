// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateGoryData:null
  },
  //获取数据
  getCateGorys(){
    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/cate/getList',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success:(res)=> {
        console.log(res)
        this.setData({
          cateGoryData : res.data.data
        })
        wx.setStorage({
          key: 'cateGoryData',
          data: JSON.stringify(res.data.data),
          success: function(res) {
            console.log('类别储存成功')
          },
          fail: function(res) {},
          complete: function(res) {
            wx.hideLoading()
          },
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'cateGoryData',
      success: (res) => {
        this.setData({
          cateGoryData : JSON.parse(res.data)
        })
        
      },
      fail: (res) => {
        this.getCateGorys()
      },
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})