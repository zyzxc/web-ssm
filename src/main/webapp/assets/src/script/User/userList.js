/**
 * Created by zhangxingcai on 2017/2/23 0023.
 */
define(function (require, exports, module) {
    var internal = {
        init: function () {
            var getUserInfo = cookie.get("userInfo");
            if (getUserInfo) {
                getUserInfo = JSON.parse(getUserInfo);

                $("#userName").text(getUserInfo["userName"]);
                $("#sex").text(getUserInfo["sex"]);
                $("#age").text(getUserInfo["age"]);
                $("#email").text(getUserInfo["email"]);
                $("#birthDay").text(getUserInfo["birthDay"]);
                $("#address").text(getUserInfo["address"]);
                $("#phoneNum").text(getUserInfo["phoneNum"]);
            }
        }
    }
    exports.init = function () {
        internal.init();
    }
});