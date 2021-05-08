// pages/signin/signin.js
Component({
  data: {
      showTopTips: false,

      radioItems: [
          {name: 'cell standard', value: '0', checked: true},
          {name: 'cell standard', value: '1'}
      ],
      checkboxItems: [
          {name: 'standard is dealt for u.', value: '0', checked: true},
          {name: 'standard is dealicient for u.', value: '1'}
      ],

      levels: ["HSK1", "HSK2", "HSK3"],
      levelsIndex: 0,

      formData: {
          username:[]

      },
      rules: [{
          name: 'un',
          rules: {required: true, message: 'username必填'},
      }, {
          name: 'pw',
          rules: [{required: true, message: 'password必填'}, {mobile: true, message: 'password格式不对'}],
      }, ]
  },
  methods: {
      formInputChange(e) {
          const {field} = e.currentTarget.dataset
          this.setData({
              [`formData.${field}`]: e.detail.value
          })
      },
      bindLevelChange: function(e) {
          console.log('picker level 发生选择改变，携带值为', e.detail.value);
  
          this.setData({
              levelsIndex: e.detail.value
          })
      },
      submitForm() {
          this.selectComponent('#form').validate((valid, errors) => {
              console.log('valid', valid, errors)
              if (!valid) {
                  const firstError = Object.keys(errors)
                  if (firstError.length) {
                      this.setData({
                          error: errors[firstError[0]].message
                      })
  
                  }
              } else {
                  wx.showToast({
                      title: '校验通过'
                  })
              }
          })
      }

  }
});

