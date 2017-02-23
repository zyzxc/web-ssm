package com.self.test;

import com.self.dao.UserDao;
import com.self.model.User;
import com.self.service.UserService;

/**
 * Created by zhangxingcai on 2017/2/22 0022.
 */
public class UserTest {
    private UserService userService;
    private UserDao userDao;

    public static void main(String[] args){
        User user=new User();
        user.setUserName("");
        user.setPassWord("");
        user.setSex("");
        user.setAge(26);
        user.setBirthDay("1992-06-01");
        System.out.println();
    }
}
