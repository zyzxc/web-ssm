package com.self.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by zhangxingcai on 2017/5/11 0011.
 */
@Controller
@RequestMapping("rgb")
public class RGBasterController {
    @RequestMapping("demo")
    public String ToRGB() {
        return "rgbaster/demo";
    }
}
