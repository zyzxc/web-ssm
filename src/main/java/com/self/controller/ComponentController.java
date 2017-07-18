package com.self.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by zhangxingcai on 2017/5/8 0008.
 */
@Controller
@RequestMapping("component")
public class ComponentController {
    @RequestMapping("demo")
    public String ToComponent() {
        return "Component/demo";
    }
}
