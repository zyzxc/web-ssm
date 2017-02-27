/**
 * Created by zhangxingcai on 2017/2/23 0023.
 */
define(function (require, exports, module) {
    var internal = {
        init: function () {
            $("#btnLogin").click(function () {
                var username = $(".username").val();
                var password = $(".password").val();
                var loginUrl = "http://localhost:8081/user/login";
                $.ajax({
                    url: loginUrl,
                    data: {userName: username, passWord: password},
                    success: function (data) {
                        if (data == true) {
                            cookie.set("userInfo", JSON.stringify(data), 2);
                            showInfo("登录成功！", 1);
                            window.location.href = "http://localhost:8081/user/view/list";
                        } else {
                            showInfo("登录失败！用户名或密码错！", 2);
                        }
                    }
                })
            });

            $("#btnReg").click(function(){
                $.XYTipsWindow({
                    ___title:"注册",
                    ___content:"iframe:http://localhost:8081/user/view/reg",
                    ___width:"520",
                    ___height:"420",
                    ___showbg:true,
                    ___drag:"___boxTitle"

                });
            });
        }
    }
    exports.init = function () {
        internal.init();
    }
});