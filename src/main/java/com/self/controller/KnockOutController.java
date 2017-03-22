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
}
