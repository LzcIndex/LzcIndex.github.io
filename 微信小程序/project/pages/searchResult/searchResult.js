// pages/searchResult/searchResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultData:[],
    resultDatakw : null,
    newArr:[],
    resultDataUrl:[],
    resultDataCopy:null
  },
  //获取搜索结果数据
  getResultData(){
    let url;
    if (!this.data.resultDataUrl.length){
      url = 'https://app.vmovier.com/apiv3/search?kw='
    }else{
      url = this.data.resultDataUrl[this.data.resultDataUrl.length-1]
    }
    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: 'https://api.kele8.cn/agent/'+ url +this.data.resultDatakw ,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        this.setData({
          resultDataCopy : res.data.data.result,
          // resultDataUrl: res.data.data.result.next_page_url_full
        })
        this.setResultData(this.data.resultDataCopy)
      },
      fail: function(res) {},
      complete: function(res) {
        wx.hideLoading()
      },
    })
  },

  setResultData(arr){
    this.removeRepeat(arr.next_page_url_full);
    for(var i = 0; i< arr.list.length;i++){
      this.data.newArr.push(arr.list[i])
    }
    this.setData({
      resultData : this.data.newArr
    })
  },

  //数组去重
  removeRepeat(str) {
    if (this.data.resultDataUrl.length) {
      for (var i = 0; i < this.data.resultDataUrl.length; i++) {
        if (this.data.resultDataUrl.indexOf(str) == -1) {
          this.data.resultDataUrl.push(str)
        }
      }
    } else {
      this.data.resultDataUrl.push(str)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      resultDatakw : options.kw
    })
    this.getResultData()
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
    this.getResultData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})