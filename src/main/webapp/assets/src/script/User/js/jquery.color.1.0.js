/**
 * Created by zhangxingcai on 2017/2/27 0027.
 */
/**
 * 用于设置html颜色、边框、背景等属性
 */
;(function ($) {
    $.fn.extend({
        color: function (value) {
            if (value == undefined) {
                return this.css("color");
            } else {
                return this.css("color", value);
            }
        },
        border: function (value) {

        },
        background: function () {

        }
    })
})(jQuery);