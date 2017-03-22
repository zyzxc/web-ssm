/**
 * Created by zhangxingcai on 2017/3/7 0007.
 */
(function ($) {
    $.fn.maxHeight = function () {
        var max = 0;
        this.each(function () {
            max = Math.max(max, $(this).height());
        });
        return max;
    };
})(jQuery);

var tallestHeight = $("div").maxHeight();