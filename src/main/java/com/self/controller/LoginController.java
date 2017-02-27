package com.self.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by zhangxingcai on 2017/2/27 0027.
 */
@Controller
@RequestMapping("login")
public class LoginController {
    @RequestMapping("view/index")
    public String toIndex() {
        return "login/index";
    }
}
