var util = require('../../utils/util');
var viewpager = require("../../component/viewpager/viewpager");

var pageObj = {
  data: {

  },
  onLoad: function (options) {
      console.log(111111111)
  }
}
// 合并子组件data值及方法
util.mergeComponents(pageObj, viewpager);
Page(pageObj);