/**
 * Created by zhangxingcai on 2017/2/23 0023.
 */
define(function (require, exports, module) {
    var internal = {
        init: function () {
            window.onload = function () {
                //登录弹框
                var mask = $().getId("mask");//获取遮罩层
                var loginBox = $().getId("loginBox");//获取窗体
                loginBox.center(350, 250);//设置船体居中
                //浏览器窗口改变时依然居中
                $().resize(function () {
                    loginBox.center(350, 250);

                });
                //默认弹窗隐藏，点击登录按钮时显示弹窗
                $().getClass("login").click(function () {
                    /* Act on the event */
                    loginBox.show();
                    mask.show();
                });
                //点击关闭按钮时隐藏弹窗
                $().getClass("close").click(function () {//点击窗体关闭按钮，
                    /* Act on the event */
                    loginBox.hide();
                    mask.hide();
                });

            };
        }
    }
    exports.init = function () {
        internal.init();
    }
});