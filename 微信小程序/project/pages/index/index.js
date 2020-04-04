// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexData:null,
    indexDataPosts : [],
    newArr:[],
    indexDataPostsCopy:null,
  },
  // 跳转到搜索页面
  navigateToSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  //获取数据
  getIndexData(){
    var url;
    if (!this.data.indexData){
      console.log('aa')
      url = 'https://app.vmovier.com/apiv3/index/index'
    }else{
      url = this.data.newArr[this.data.newArr.length - 1].next_page_url_full
    }

  //加载动画
    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: 'https://api.kele8.cn/agent/'+url,
      success:(res)=>{
        console.log(res.data.data)
          if (res.data.data.today){
            this.setData({
              indexData: res.data.data,
              
            })
            this.data.indexDataPostsCopy = res.data.data.posts
          }else{
              this.data.indexDataPostsCopy =  res.data.data
           
          }
          console.log(this.data.indexDataPostsCopy)
          this.getPosts(this.data.indexDataPostsCopy)
          // wx.setStorage({
          //   key: 'indexData',
          //   data: JSON.stringify({
          //     time : Date.now(),
          //     data: res.data.data
          //   }),
          //   success: res =>{
          //     console.log('存储ok')
          //   }
          // })
        
      },
      complete: function (res) {
        wx.hideLoading()
       },
    })
  },
  getPosts(arr){
    // this.data.newArr.push(arr)
    this.removeRepeat(arr)
    this.setData({
      indexDataPosts: this.data.newArr,
    })
  },
  //数组去重
  removeRepeat(arr) {
    if (this.data.newArr.length) {
      for (var i = 0; i < this.data.newArr.length; i++) {
        if (this.data.newArr.indexOf(arr) == -1) {
          this.data.newArr.push(arr)
        }
      }
    } else {
      this.data.newArr.push(arr)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getStorage({
    //   key: 'indexData',
    //   success: (res)=> {
    //     let storageIndexData = JSON.parse(res.data)
    //     if(Date.now() - storageIndexData.time > 10*60*1000){
    //       this.getIndexData()
    //     }else{
    //       this.setData({
    //         indexData: storageIndexData.data
    //       })
    //     }
    //   },
    //   fail:res=>{
    //     this.getIndexData()
    //   }
    // })
    this.getIndexData()
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
    this.getIndexData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})