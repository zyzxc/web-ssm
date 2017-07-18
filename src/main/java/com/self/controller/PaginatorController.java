package com.self.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by zhangxingcai on 2017/5/22 0022.
 */
@Controller
@RequestMapping("page")
public class PaginatorController {
    @RequestMapping("demo")
    public String ToPageDemo() {
        return "jqPaginator/demo";
    }
}
