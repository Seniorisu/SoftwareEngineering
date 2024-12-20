// pages/user/index.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: app.username,
        loginStatus: app.loginStatus,
        avatar: 'https://img0.baidu.com/it/u=3204281136,1911957924&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    },

    // 登录监听
    chooseAvatar(e) {
        this.setData({
                loginStatus: 0,
                avatar: e.detail.avatarUrl,
        })
    },
    // 基本信息
    basicClick() {
        console.log('基本信息监听');
    },
    // 匿名反馈
    feedbackClick() {
        console.log('匿名反馈监听');
    },
    // 关于我们
    aboutClick() {
        console.log('关于我们监听');
    },
    // 退出监听
    exitClick() {
        let that = this;
        wx.showModal({
            title: '提示',
            content: '确定退出登录吗？',
            success(res) {
                app.loginStatus=0
                app.username='111111'
                if (res.confirm) {
                    that.setData({
                        loginStatus: 0,
                        avatar: 'https://img0.baidu.com/it/u=3204281136,1911957924&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                    })
                }
            }
        })
    },

    // 立即登录
    loginClick() {
        wx.navigateTo({
            url: '../../pages/loginp/index',
        })
    },

    /**
     * 生命周期函数--监听页面初次加载
     */
    onLoad(options) {

    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.setData({
            loginStatus:app.loginStatus
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }



})