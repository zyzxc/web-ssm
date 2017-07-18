package com.self.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by zhangxingcai on 2017/5/5 0005.
 */
@Controller
@RequestMapping("editor")
public class UEditorController {
    @RequestMapping("demo")
    public String ToEditor() {
        return "UEditor/editor";
    }
}
