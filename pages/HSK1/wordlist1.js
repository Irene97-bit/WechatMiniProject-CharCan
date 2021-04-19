// pages/HSK1/wordlist1.js


Page({

  /**
   * 生命周期函数--监听页面加载
   */
  
  


  /**
   * 页面的初始数据
   */
  data: {
    hsk1:[], 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    //1、引用数据库
    wx.request({
      url: 'http://2000022764.zhangqx.com/HSK1',//json数据地址
      headers: {
        'Content-Type': 'application/json'
      },     
      success: res => {
        console.log(res.data)   
        this.setData({
          hsk1: res.data
        })
      }
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

  },

  favorite: function(event) {       
    wx.request({
      url: 'https://2000022764.zhangqx.com/favorite',
      method:'POST',
      data: {
        openid: wx.getStorageSync('data').openid,
        favorite: '我'
      },
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        
      }
    })
  },
})