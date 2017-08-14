package com.self.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by zhangxingcai on 2017/3/22 0022.
 */
@Controller
@RequestMapping("knockout")
public class KnockOutController {
    @RequestMapping("/view/index")
    public String ToKnockOut() {
        return "knockout/index";
    }

    @RequestMapping("/view/add")
    public String ToAdd() {
        return "knockout/add";
    }

    @RequestMapping("/view/render")
    public String ToRender() {
        return "knockout/render";
    }

    @RequestMapping("/view/hello")
    public String ToHelloWorld() {
        return "knockout/helloWorld";
    }

    @RequestMapping("/view/checkbox")
    public String ToCheckBox() {
        return "knockout/checkbox";
    }

    @RequestMapping("/view/validate")
    public String ToValidate() {
        return "knockout/validate";
    }

    @RequestMapping("/view/task")
    public String ToTask() {
        return "knockout/task";
    }

    @RequestMapping("/view/pageSize")
    public String ToPageSize() {
        return "knockout/pageSize";
    }

    @RequestMapping("/view/foreach")
    public String ToForEach() {
        return "knockout/foreach";
    }

    @RequestMapping("/view/ifnot")
    public String ToIfNot() {
        return "knockout/ifnot";
    }

    @RequestMapping("/view/with")
    public String ToWith() {
        return "knockout/with";
    }

    @RequestMapping("page")
    public String ToPage() {
        return "knockout/page";
    }

    @RequestMapping("chart")
    public String ToChart() {
        return "knockout/chart";
    }

    @RequestMapping("template")
    public String ToTemplate() {
        return "knockout/template";
    }

    @RequestMapping("echarts")
    public String ToECharts() {
        return "knockout/echarts";
    }

    @RequestMapping("rgbaster")
    public String ToRGBaster() {
        return "knockout/rgbaster";
    }

    @RequestMapping("treeList")
    public String ToTreeList() {
        return "knockout/treeList";
    }

    @RequestMapping("mapping")
    public String ToMapping() {
        return "knockout/mapping";
    }

    @RequestMapping("select")
    public String ToSelect() {
        return "knockout/select";
    }
}
