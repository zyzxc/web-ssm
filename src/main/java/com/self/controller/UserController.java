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

    @RequestMapping("view/login")
    public String toUserLogin() {
        return "User/userLogin";
    }

    @RequestMapping("view/list")
    public String toUserList() {
        return "User/userList";
    }

    @RequestMapping("view/reg")
    public String toUserReg() {
        return "User/userReg";
    }

    @RequestMapping("/showUser")
    @ResponseBody
    List<User> showUser(HttpServletRequest request, Model model) {
        log.info("查询所有用户信息");
        List<User> userList = userService.getAllUser();
        return userList;
    }

    @RequestMapping("/addUser")
    @ResponseBody
    public int addUser(User user) {
        log.info("添加用户信息！");
        return userService.add(user);
    }

    @RequestMapping("/getUserByEmailOrPhone")
    @ResponseBody
    public User getUserByPhoneOrEmail(String emailOrPhone) {
        log.info("根据邮箱或电话查询用户信息！");
        return userService.getUserByPhoneOrEmail(emailOrPhone);
    }

    @RequestMapping("/getUserById")
    @ResponseBody
    public User getUserById(Long userId) {
        log.info("根据用户Id查询用户信息！");
        return userService.getUserById(userId);
    }

    @RequestMapping("login")
    @ResponseBody
    public User checkLogin(String userName,String passWord) throws Exception{
        log.info("用户登录！");
        return userService.checkLogin(userName,passWord);
    }
}
