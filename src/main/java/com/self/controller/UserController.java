package com.self.controller;

import com.alibaba.fastjson.JSONArray;
import com.self.model.User;
import com.self.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by zxc on 2017/02/22.
 */

@Controller
@RequestMapping("user")
public class UserController {

    private Logger log = Logger.getLogger(UserController.class);
    @Resource
    private UserService userService;

    @RequestMapping("/showUser")
    @ResponseBody
    List<User> showUser(HttpServletRequest request, Model model) {
        log.info("查询所有用户信息");
        List<User> userList = userService.getAllUser();
        //model.addAttribute("userList",userList);
        return userList;
    }
}
