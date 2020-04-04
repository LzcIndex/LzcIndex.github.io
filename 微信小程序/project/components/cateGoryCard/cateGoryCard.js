// components/cateGoryCard/cateGoryCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cate : Object
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
    navgateToCategoryDetailed : (e) => {
      wx.navigateTo({
        url: '/pages/categoryDetailed/categoryDetailed?category=' + e.currentTarget.dataset.category,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  }
})
