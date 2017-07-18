package com.self.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by zhangxingcai on 2017/5/2 0002.
 */
@Controller
@RequestMapping("super")
public class SuperSliderController {
    @RequestMapping("slider")
    public String ToSlider() {
        return "slide/slide";
    }
}
