// pages/home/homepage.js
Page({
    /**
   * tabbar
   */
  /*data: {
    list: [{
        "text": "对话",
        "iconPath": "images/my.png",
        "selectedIconPath": "images/my-selected.png",
        dot: true
    },
    {
        "text": "设置",
        "iconPath": "images/my.png",
        "selectedIconPath": "images/my.png",
        badge: 'New'
    }]
},
tabChange(e) {
    console.log('tab change', e)
},*/
  

  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   * 
   */

  explore:function(options){
    wx.navigateTo({
      url: '../hanzi/hanzi',
    })
  },
  onLoad: function (options) {
    let that = this;
    console.log("onLoad");
    wx.request({
      url: 'http://114.115.142.135/getcode',
      success(res){
        console.log(res.data)
        that.setData({
          myList:res.data.data
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
