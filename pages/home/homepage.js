// pages/home/homepage.js
Page({
  data:{
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    //font//
    loaded :false,
    fontFamily: 'hanzifont',
  },
  

  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   * 
   */
  toHanzi:function(options){
   wx.navigateTo({
     url: '../HSK1/wordlist1',
   })
  },
  toHSK:function(options){
    wx.navigateTo({
      url: '../HSK1/wordlist1',
    })
   },
   tofav:function(options){
    wx.navigateTo({
      url: '../favorite/favorite',
    })
   },

  explore:function(options){
    wx.navigateTo({
      url: '../signup/signup',
    })
  },
  onLoad: function (options) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  loadFontFace:function(){
    const self = this
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://2000022764.zhangqx.com:9999/fonttype/HYKuiSuW.ttf")',
      success(res) {
        console.log("success")
        console.log(res.status)
        self.setData({ loaded: true })
      },
      fail: function(res) {
        console.log("fail")
        console.log(res.status)
      },
      complete: function(res) {
        console.log("complete")
        console.log(res.status)
      }
    });
    },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log(res)
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

    data: {
        inputShowed: false,
        inputVal: ""
    },
    onLoad() {
        this.setData({
            search: this.search.bind(this)
        })
    },
    search: function (value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
            }, 200)
        })
    },
    selectResult: function (e) {
        console.log('select result', e.detail)
    },

    onShareAppMessage() {
      return {
        title: 'tabs',
        path: 'page/weui/example/tabs/tabs'
      }
    },
    data: {
      tabs: [],
      activeTab: 0,
    },
  
    onLoad() {
      const tabs = [
        {
          title: 'Beginner',
          title2: 'Introducation to Hanzi',
          //img:'https://i.loli.net/2021/04/02/xmK9Ee4z2XrS1uq.png',
        },
        {
          title: 'Intermediate',
          title2: 'Intermediate to Hanzi',
          //img: 'https://i.loli.net/2021/04/02/taBxvfPyVjONc58.png',
        },
        {
          title: 'Advanced',
          title2: 'Advanced Practice',
          //img: 'https://i.loli.net/2021/04/02/5kt39qND6QWdLCg.png',
        },
        {
          title: 'Challenging',
          title2:'Challenges!',
          //img: 'https://i.loli.net/2021/04/02/oIitef6qzkswW9n.png',
        },
      ]
      this.setData({ tabs })
    },
  
    onTabClick(e) {
      const index = e.detail.index
      this.setData({ 
        activeTab: index 
      })
    },
  
    onChange(e) {
      const index = e.detail.index
      this.setData({ 
        activeTab: index 
      })
    },
    handleClick(e) {
      wx.navigateTo({
        url: './webview',
      })
    }
});
