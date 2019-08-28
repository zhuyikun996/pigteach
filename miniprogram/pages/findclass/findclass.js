var util = require('../../utils/util');
var viewpager = require("../../component/viewpager/viewpager");
var pageObj = {
        data: {
            teacherListArray: [], //名师推荐 列表
            classListArray: [], //精选好课 列表
        },
        onLoad: function(options) {
            var that = this
            console.log("onLoad-function")
                //加载数据库数据：再增加或者改动名师推荐、精选好课，只需要在数据库中增加记录即可，无需改动小程序代码
            const db = wx.cloud.database()
                // 名师推荐 列表库 teacherArrayDB
            db.collection('teacherArrayDB').orderBy('index', 'desc').get({
                    success(res) {
                        console.log("teacherArrayDB res.data：" + JSON.stringify(res.data))
                        that.setData({
                            teacherListArray: res.data,
                        })
                    }
                })
                // 精选好课 列表库 classArrayDB
            db.collection('classArrayDB').orderBy('index', 'desc').get({
                success(res) {
                    console.log("classArrayDB res.data：" + JSON.stringify(res.data))
                    that.setData({
                        classListArray: res.data,
                    })
                }
            })

        }
    }
    // 合并子组件data值及方法
util.mergeComponents(pageObj, viewpager);
Page(pageObj);