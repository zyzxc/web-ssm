//分析：想要实现连缀语法Base.getId('box').css('color','red').html('标题').click(function(){alert('a')});
//需要在Base类中实现css(),html(),click()方法，且方法都要return一个Base对象
//在Base对象中，一般设置css,innnerHTML,onclick的方法如下
//var base=new Base();    new一个Base类的实例
//base.getId('box').style.color='red';   定义color
//base.getId('box').style.backgroundColor='red';
//base.getId('box').innerHTML='标题';
//base.getId('box').onclick=function(){alert('a')};
//现在需要将上面的设置为Base类的css,html,click方法，

//定义$函数，用于生成多个Base()实例对象，后面需要Base实例时，直接使用$()即可
var $ = function () {
    return new Base();
};
function Base() {
    //使用this关键字创建elements数组，用来保存获取目标节点和节点数组
    this.elements = [];
    //使用this关键字定义获取节点的方法
    this.getId = function (id) {
        var e = document.getElementById(id);
        this.elements.push(e);
        return this;
    }
    this.getTagName = function (tag) {
        var e = document.getElementsByTagName(tag);
        for (var i in e) {
            this.elements.push(e[i]);
        }
        return this;
    }
}
Base.prototype.css = function (attr, value) {
    //对指定节点元素设置属性和值
    for (var i in this.elements) {
        //使用arguments数组对象获取传入的参数，并判断参数的个数
        if (arguments.length == 1) {
            if (typeof window.getComputedStyle != 'undefined') {//W3C
                return window.getComputedStyle(this.elements[i], null)[attr];
            } else if (typeof this.elements[i].currentStyle != 'undefined') {//IE
                return this.elements[i].currentStyle[attr];
            }
        }
        this.elements[i].style[attr] = value;
    }
    return this;
}

Base.prototype.html = function (str) {
    for (var i in this.elements) {
        //使用arguments数组对象获取传入的参数，并判断参数的个数
        if (arguments.length == 0) {
            return this.elements[i].innerHTML;
        }
        this.elements[i].innerHTML = str;
    }
    return this;
};
//类方法调用
window.onload = function () {
    //每一个$()为一个对象实例，可调用类中封装好的方法
    $().getId('box').css("color", "red").html("title");
    //$().getTagName('p').css("color","blue").html("标题");
    alert($().getId('box').html());
    alert($().getId('box').css("color"));
};
//获取class节点数组
Base.prototype.getClass = function (className, id) {
    //定义node用于获取节点的范围
    var node = null;
    //判断传入的参数个数，如果传入两个参数，则node为传入id下的
    if (arguments.length == 2) {
        node = document.getElementById(id);
    } else {
        //默认时为全部节点
        node = document;
    }
    //首先所有的节点
    var arr = node.getElementsByTagName("*");
    for (var i = 0; i < arr.length; i++) {
        //判断节点的className是否与传入的class一致
        if (arr[i].className == className) {
            //将一致的节点保存到elements数组中并返回object对象
            this.elements.push(arr[i]);
        }
    }
    return this;

}
window.onload = function () {
    $().getClass('red', 'aaa').css("color", "red").html("title");
    $().getClass('red', 'bbb').css("color", "green").html("title");
};
window.onload = function () {
    $().getClass('red').css("color", "blue").html("标题");
};
//获取某一个节点,传入节点的number值
Base.prototype.getElement = function (num) {
    //获取传入num对应的element值
    var element = this.elements[num];
    //清空this.elements数组
    this.elements = [];
    //将获取的element值再加入到数组中,当前数组中只有一个值
    this.elements[0] = element;
    //返回Base对象
    return this;
}
//调用方法
window.onload = function () {
    $().getClass('red').getElement(1).css("color", "red").html("title");
};
////添加class,要求元素节点上可以同时添加多个class值,以空格隔开
//Base.prototype.addClass = function (className) {
//    for (var i = 0; i < this.elements.length; i++) {
//        var element = this.elements[i];
//        //判断添加的className是否已经存在,使用正则表达式
//        if (!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
//            element.className += ' ' + className;
//        }
//    }
//    return this;
//}
////方法调用
//移除class,传入需要移除的className
Base.prototype.removeClass = function (className) {
    for (var i = 0; i < this.elements.length; i++) {
        var element = this.elements[i];
        //判断添加的className是否已经存在,如果存在,使用正则表达式将该className替换为空格
        if (element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
            element.className = element.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), '')
        }
    }
    return this;
}


//设置显示
Base.prototype.show = function () {
    for (var i = 0; i < this.elements.length; i++) {
        var element = this.elements[i];
        element.style.display = 'block';

    }
    return this;
}
//设置显示
Base.prototype.hide = function () {
    for (var i = 0; i < this.elements.length; i++) {
        var element = this.elements[i];
        element.style.display = 'none';

    }
    return this;
}

//设置鼠标移入移入移出
Base.prototype.hover = function (over, out) {//over为移入事件，out为移出事件
    for (var i = 0; i < this.elements.length; i++) {
        var element = this.elements[i];
        element.onmouseover = over;
        element.onmouseout = out;

    }
    return this;
}
Base.prototype.center = function (width, height) {
    //将loginBox 设置为绝对定位
    //将浏览器窗口的高度-窗体自身的高度后除以2后的值设置为top
    //将浏览器窗口的宽度-窗体自身的宽度后除以2后的值设置为left
    var top = (window.innerHeight - height) / 2 + "px";
    var left = (window.innerWidth - width) / 2 + "px";
    for (var i = 0; i < this.elements.length; i++) {
        var element = this.elements[i];
        element.style.top = top;
        element.style.left = left;
    }
    return this;
}
//触发浏览器窗口事件
Base.prototype.resize = function (fn) {
    window.onresize = fn;
    return this;
}
