// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotTags: null,
    inputValue: '',
    sugData:null,
    historySearch: [],
    historyList: []
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
   wx.request({
     url: 'https://novel.kele8.cn/auto-complete?query=' + this.data.inputValue,
     data: '',
     header: {},
     method: 'GET',
     dataType: 'json',
     responseType: 'text',
     success: (res) => {
       this.setData({
         sugData: res.data.keywords
       })
     },
     fail: function(res) {},
     complete: function(res) {},
   })
  },
  //获取热门搜索数据
  getHotSearchData() {
    wx.request({
      url: 'https://novel.kele8.cn/hot-books',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        this.setData({
          hotTags: res.data.hotWords
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //跳转到搜索结果页面
  navgateToSearchResult(e) {
    this.removeRepeat(this.data.inputValue)
    this.setHistory()
    wx.navigateTo({
      url: '/pages/searchResult/searchResult?kw=' + e.currentTarget.dataset.val,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    });

  },

  //设置历史纪录
  setHistory() {
    console.log(this.data.historySearch, 111)
    wx.setStorage({
      key: 'searchHistory',
      data: JSON.stringify(this.data.historySearch),
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //当点击热门搜索关键词时
  sendHotSearch(e) {
    this.setData({
      inputValue: e.currentTarget.dataset.tag
    })
    this.removeRepeat(this.data.inputValue)
    this.setHistory()
    wx.navigateTo({
      url: '/pages/searchResult/searchResult?kw=' + e.currentTarget.dataset.tag,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    });

  },

  //数组去重
  removeRepeat(str) {
    if (this.data.historySearch.length) {
      for (var i = 0; i < this.data.historySearch.length; i++) {
        if (this.data.historySearch.indexOf(str) == -1) {
          this.data.historySearch.push(str)
        }
      }
    } else {
      this.data.historySearch.push(str)
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotSearchData()
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
    this.setData({
      inputValue : ''
    })
    wx.getStorage({
      key: 'searchHistory',
      success: (res) => {
        var hisList = JSON.parse(res.data)
        this.setData({
          historyList: hisList
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
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