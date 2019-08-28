// pages/adpage/adpage.js
// const AV = require('../../utils/av-live-query-weapp-min');
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '../../images/adbanner.jpg',
    mode: 'widthFix',
    msg0: "寒假班抢先报名",
    msg_red: "99元",
    msg2: "名师课程",
    inputInfoChildName: "请输入您家孩子姓名",
    inputInfoPhoneNumber: "请输入您的手机号码",
    btnMsgGetClass: "立即报名",
    inforSecurityTips:"比特教育保证每位学员信息安全",
    introTeacherTitle: "师资力量",
    introTeacherContent: "授课教师均为硕士学历/教育专业/具备留学经验，良好教育背景，懂教育，爱孩子。",
    introCourseTitle:"课程简介",
    introCourseContent:"5节单词语法提高教学课，1节答疑辅导课。独家专业定制教材。5节提高课可让学生形成科学合理的英语学习方法，1节辅导课程由名师解答学生日常作业中的疑难问题。全程1对1辅导，保证教学质量。",
    promissInfoTitle: "我们的承诺",
    servicePromissTitle: "服务承诺",
    servicePromissContent: "因材施教，根据孩子特点与进度，调整授课节奏，专业1对1辅导，全程提供五星服务，为孩子英语成绩提高和进步保驾护航。",
    refundPromissTitle: "退款承诺",
    refundPromissContent: "对课程不满意，对辅导老师不满意，对孩子进步效果不满意，随时可以提出退款要求。",
    callThePhone: "客服热线：17610328056 (点击)",
    btnGetClassBottom: "立即报名",
    shareToYourFriend:"告诉朋友",
    stuName: null, //孩子姓名
    phoneNumber: null, //家长手机号码
    called: false, //是否拨打过电话
    btnIsClieck: false
  },
  // 请输入您家小演奏家的名字
  inputInfoChildName: function(e) {
    this.setData({
      stuName: e.detail.value
    })
  },
  // 请输入您的手机号码
  inputInfoPhoneNumber: function(e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  },
  // "立即报名" 按钮
  getClassFunc: function(e) {
    //判断是否重复多次点击
    if (wx.getStorageSync("applyTag") == 1) {
      wx.showToast({
        title: '您已报名成功',
        duration: 2000,
        mask: true
      })
    } else { //首次点击
      //上传孩子姓名和家长手机号到数据库
      var stuName = this.data.stuName;
      var phoneNumber = this.data.phoneNumber;
      console.log("stuName=" + stuName + " phoneNumber=" + phoneNumber)
      if (stuName == '') {
        wx.showToast({
          title: '请填写孩子姓名便于联系',
          duration: 2000,
          mask: true
        })
      }else if (util.validatemobile(phoneNumber)) {//如果已经填写了孩子姓名，再检查手机号是否正确
        const db = wx.cloud.database(); //获取数据库
        const customerinfo = db.collection('customerinfo').add({
          data: {
            stuName: stuName,
            phoneNumber: phoneNumber
          },
          success(res) {
            console.log(res)
           wx.showModal({
             title: '报名成功！',
             content: '稍后会有工作人员与您联系',
           })
            //报名标志置为1
            wx.setStorageSync("applyTag", 1);
          },
          fail: console.error
        })
      }
    }
  },
  //定时器提示框3秒消失  
  ohShitfadeOut() {
    var fadeOutTimeout = setTimeout(() => {
      this.setData({
        popErrorMsg: ''
      });
      clearTimeout(fadeOutTimeout);
    }, 3000);
  },
  // 客服热线：13465912653(点击)
  callMe: function() {
    wx.makePhoneCall({
      phoneNumber: '17610328056'
    })
  },
  //点击底部免费领取课程按钮返回顶部
  backToTop: function() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 200
    })
  },
  //分享给朋友
  shareToYourFriend:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})