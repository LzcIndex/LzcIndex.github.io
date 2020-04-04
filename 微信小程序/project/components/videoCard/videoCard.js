// components/videoCard/videoCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "item":Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    navgateToView(e){
      console.log(e.currentTarget.dataset.postid)
      wx.navigateTo({
        url: '/pages/view/view?id=' + e.currentTarget.dataset.postid,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  }
})
