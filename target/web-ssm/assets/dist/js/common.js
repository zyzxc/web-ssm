﻿//消息提示（type 1:正确信息 0:错误信息）
var showInfo = function (text, type) {
    $(".info-box").remove();
    if (type == 1) {
        $("body").append("<div class='info-box'><div class=success>" + text + "</div></div>");
    } else {
        $("body").append("<div class='info-box'><div class=error>" + text + "</div></div>");
    }
    setTimeout(function () {
        $(".info-box").animate({"top": "50px", "opacity": 0}, function () {
            $(".info-box").remove();
        });
    }, 2000)
};

//显示提示
var showTips = function (obj) {
    var v = $(obj);
    var _left = v.offset().left;
    var _top = v.offset().top;
    var _title = v.data('description');
    var tipsStr = '<span class="tips_arrow">◆</span><div class="tips">' + _title + '</div>';
    $('body').append(tipsStr);
    $('.tips_arrow').css({left: _left + 8, top: _top - 32});
    $('.tips').css({'left': _left, top: _top - 40, 'margin-left': -($('.tips').width() / 2) + 7});
};

//移除提示
var removeTips = function () {
    $('.tips_arrow').remove();
    $('.tips').remove();
};

//加载完成
var loaded = function () {
    $('.blackbg').animate({'opacity': '0'}, function () {
        $('.blackbg').remove();
    });
    $('#loading').remove();
};

var fillZero = function (number, digits) {
    number = String(number);
    var length = number.length;
    if (number.length < digits) {
        for (var i = 0; i < digits - length; i++) {
            number = "0" + number;
        }
    }
    return number;
};

var getNowFormatDate = function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hour = date.getHours();
    var second = date.getSeconds();
    var minute = date.getMinutes();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + "-" + month + "-" + strDate + " " + hour + ":" + second + ":" + minute;
    return currentdate;
}

function PrefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}

Date.prototype.toLocaleString = function () {
    return this.getFullYear() + "-" + PrefixInteger((this.getMonth() + 1), 2) + "-" + PrefixInteger(this.getDate(), 2) + "  " + PrefixInteger(this.getHours(), 2) + ":" + PrefixInteger(this.getMinutes(), 2) + ":" + PrefixInteger(this.getSeconds(), 2);
};