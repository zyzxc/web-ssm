/**
 * Created by zhangxingcai on 2017/2/27 0027.
 */
/**
 * 介于lt、gt、eq之间的选择器事件
 */
;(function ($) {
    $.extend($.expr[":"], {
        between: function (a, i, m) {
            var temp = m[3].split(",");
            return +temp[0] < i && i < +temp[1];
        }
    });
})(jQuery);