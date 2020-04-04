// pages/view/view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoPostid : null,
    videoDetail : null
  },
  redirectToView(e){
    wx.redirectTo({
      url: '/pages/view/view?id=' + e.currentTarget.dataset.postid,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getVideoMsg(){
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/view?postid='+ this.data.videoPostid,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        this.setData({
          videoDetail : res.data.data
        })
      },
      fail: function(res) {},
      complete: function(res) {
        wx.hideLoading()
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this)
    this.setData({
      videoPostid: options.id
    })

    this.getVideoMsg()
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