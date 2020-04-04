// pages/abouts/abouts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg : "hello world",
    location : null,
    userInFo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.kele8.cn',
      success:(res)=>{
        console.log(res)
      }
    })

    //获取个人信息
    wx.getUserInfo({
      success:(res)=>{
        console.log(res)
        this.setData({
          userInFo : res.userInfo
        })
      }
    })
    //获取位置信息
    wx.getLocation({
      success:(res) => {
        console.log(res)
        this.setData({
          location : res
        })
      },
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