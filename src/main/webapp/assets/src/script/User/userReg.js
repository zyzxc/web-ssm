/**
 * Created by zhangxingcai on 2017/2/23 0023.
 */
define(function (require, exports, module) {
    var internal = {
        init: function () {
            internal.validForm();
            internal.btnRegister();
        },
        validForm: function () {
            $.formValidator.initConfig({
                formid: "form1", debug: false, submitonce: true,
                onerror: function (msg, obj, errorlist) {
                    //$.map(errorlist,function(msg1){alert(msg1)});
                    alert(msg);
                }
            });
            $("#t_UserName").formValidator({
                onshow: "5-10个字符",
                onfocus: "5-10个字符",
                oncorrect: "该用户名可以注册"
            }).inputValidator({min: 5, max: 10, onerror: "输入有误"}).regexValidator({
                regexp: "username",
                datatype: "enum",
                onerror: "格式有误"
            });
            $("#t_UserPass").formValidator({
                onshow: "至少6个字符",
                onfocus: "至少6个字符",
                oncorrect: "密码合法"
            }).inputValidator({
                min: 6,
                empty: {leftempty: false, rightempty: false, emptyerror: "输入有误"},
                onerror: "输入有误"
            });
            $("#t_RePass").formValidator({
                onshow: "请再次输入密码",
                onfocus: "请再次输入密码",
                oncorrect: "密码一致"
            }).inputValidator({
                min: 6,
                empty: {leftempty: false, rightempty: false, emptyerror: "输入有误"},
                onerror: "输入有误"
            }).compareValidator({desid: "t_UserPass", operateor: "=", onerror: "密码不一致"});
            $("#t_Email").formValidator({
                onshow: "6-100个字符",
                onfocus: "6-100个字符",
                oncorrect: "恭喜你,你输对了",
            }).inputValidator({
                min: 6,
                max: 100,
                onerror: "长度非法"
            }).regexValidator({
                regexp: "^([\\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$",
                onerror: "格式不正确"
            });
            $("#t_PhoneNum").formValidator({
                onshow: "5-11个数字",
                onfocus: "5-11个数字",
                oncorrect: "恭喜你,你输对了",
            }).inputValidator({
                min: 6,
                max: 11,
                onerror: "长度非法"
            }).regexValidator({
                regexp: "/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/",
                onerror: "格式不正确"
            });
        },
        btnRegister: function () {
            $("#btnReg").click(function () {
                var regUrl = "http://localhost:8081/user/addUser";
                var userName = $("#userName").val();
                var password = $("#t_UserPass").val();
                var sex = $("input[name='sex']:checked").val();
                var age = $("#age").val();
                var birthDay = $("#t_BirthDay").val();
                var email = $("#t_Email").val();
                var address = $("#t_Address").val();
                var phoneNum = $("#t_PhoneNum").val();
                var userInfo = [];
                userInfo = {
                    "userName": userName,
                    "passWord": password,
                    "sex": sex,
                    "age": age,
                    "birthDay": birthDay,
                    "address": address,
                    "email": email,
                    "phoneNum": phoneNum
                };
                if (userInfo) {
                    $.ajax({
                        url: regUrl,
                        data: userInfo,
                        success: function (data) {
                            if (data) {
                                $.XYTipsWindow.removeBox();
                            }
                        }
                    })
                }
            })
        }
    }
    exports.init = function () {
        internal.init();
    }
});