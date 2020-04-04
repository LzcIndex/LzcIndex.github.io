// pages/categoryDetailed/categoryDetailed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      category:null,
      page:1,
      cateDetailed : null,
      newarr : [],
      cateDetailedData:[]
  },
  getCateDetailedData(){
    console.log(this.data.category)
    var url;
    if (parseInt(this.data.category).toString() != "NaN") {
      url = "https://app.vmovier.com/apiv3/post/getPostInCate?p="+ this.data.page +"&size=10&cateid=" + this.data.category
    } else {
      url = "app.vmovier.com/apiv3/post/getPostByTab&p=" + this.data.page +"&size=10&tab=" + this.data.category
    }
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url:'https://api.kele8.cn/agent/' + url,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        this.setData({
          cateDetailed : res.data.data
        })
        this.pushDetail(this.data.cateDetailed)
        this.data.page++
      },
      fail: function(res) {
        
      },
      complete: function(res) {
        wx.hideLoading()
      },
    })
  },

  pushDetail(arr){
    
    for(var i = 0;i < arr.length;i++){
      this.data.newarr.push(arr[i])
    }
    this.setData({
      cateDetailedData: this.data.newarr

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      category: options.category
    })
    this.getCateDetailedData()
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
    this.getCateDetailedData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})