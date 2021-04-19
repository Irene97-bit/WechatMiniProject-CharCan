// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code)
        wx.request({
          url: 'https://2000022764.zhangqx.com/getopenid',
          method:'POST',
          data:{
            'code':res.code
          },
          header:{
            'content-type':'application/json'
          },
          success(res){
            console.log(res.data)
            wx.setStorageSync('data', res.data)
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
