// pages/accounts/accounts.js
Page({
  /**
   * cells
   */
  onLoad: function(){
    this.setData({
        slideButtons: [{
          text: '普通',
          src: '/page/weui/cell/icon_love.svg', // icon的路径
        },{
          text: '普通',
          extClass: 'test',
            src: '/page/weui/cell/icon_star.svg', // icon的路径
        },{
          type: 'warn',
          text: '警示',
          extClass: 'test',
            src: '/page/weui/cell/icon_del.svg', // icon的路径
        }],
    });
},
slideButtonTap(e) {
    console.log('slide button tap', e.detail)
},

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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