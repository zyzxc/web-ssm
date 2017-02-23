package com.self.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by zhangxingcai on 2017/2/22 0022.
 */
@Controller
@RequestMapping("/star")
public class StarScoreController {
    @RequestMapping("/view/demo")
    public String toStar(){
        return "starScore/demo";
    }
}
