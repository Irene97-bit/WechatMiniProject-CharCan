// pages/hanzi/hanzi.js
const app = getApp();
import HanziWriterContext from 'hanzi-writer-miniprogram';

Page({
  properties: {},
  /**
   * 页面的初始数据
   */
  data: {
    inputstr: '天',
    inputCharacter: '天',
    content: '天',//内容
    src:'', //
    pinyinval:'',
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("Do something initial when launch")
    this.drawCharacter();
    // 跟我读

    //拼音
  
  },
  charDataLoader:function(char,onComplete){
    console.log(this.data.chardata);

  },
  drawCharacter:function(){
    this.writerCtx = HanziWriterContext({
      id: 'hz-writer',
      character:"我",
      page: this,
      radicalColor: '#1abc9c',//偏旁部首颜色
    });
    console.log("drawCharacter");
  },
  // 输入框
  inputstrBtn:function(e){
    console.log(e.detail.value)
    var val = e.detail.value;
    this.setData({
      inputstr: val,
      //跟我读内容
    });
  },

  //更新
  updateCharacter:function(e){
    // this.writerCtx.showCharacter();
    this.setData({
      inputCharacter: this.data.inputstr
    });
    this.drawCharacter();
  },
  
  //显示笔画
  showCharacter:function(e){
    this.writerCtx.showCharacter();
    console.log("showCharacter");
  },

  //隐藏笔画
  hideCharacter:function(e){
    this.writerCtx.hideCharacter();
  },

  //播放动画
  playAnimate:function(e){    
    this.writerCtx.loopCharacterAnimation();
  },

  //临摹
  copybook:function(e){
    this.writerCtx.quiz();
    // var colorName ='#ff0'
    // this.writerCtx.updateColor(colorName, colorVal, options);
  },
  // 跟我读-----------------------------------------------------start
  // 文字转语音
  
  // 笔画
  readStrokes:function(){
    var character = "你"
    // this.writerCtx.loadCharacterData(character, options = {})
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
        favorite: '班'
      },
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        
      }
    })
  },
})