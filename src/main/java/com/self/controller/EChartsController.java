package com.self.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by zhangxingcai on 2017/5/4 0004.
 */
@Controller
@RequestMapping("echarts")
public class EChartsController {
    @RequestMapping("chart")
    public String ToCharts() {
        return "echarts/chart";
    }
}
