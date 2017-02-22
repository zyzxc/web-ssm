/**
 * Created by zhangxingcai on 2017/2/21 0021.
 */
define(function (require, exports, module) {
    var internal = {
        init: function () {
            scoreFun($("#startone"))
            scoreFun($("#starttwo"), {
                fen_d: 22,//每一个a的宽度
                ScoreGrade: 5//a的个数 10或者
            });

            //显示分数
            $(".show_number li p").each(function (index, element) {
                var num = $(this).attr("tip");
                var www = num * 2 * 16;//
                $(this).css("width", www);
                $(this).parent(".atar_Show").siblings("span").text(num + "分");
            });
        }
    }
    exports.init = function () {
        internal.init();
    }
});