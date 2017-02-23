package com.self.service;

import com.self.model.User;
import com.self.service.UserService;
import com.self.service.impl.UserServiceImpl;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Temporal;
import java.util.Date;

/**
 * Created by zhangxingcai on 2017/2/22 0022.
 */
public class UserTest extends BaseTest {
    @Autowired UserService userService;

    @Test
    public void main() {
        User user = new User();
        user.setUserName("admin");
        user.setPassWord("admin");
        user.setSex("男");
        user.setAge(26);
        user.setBirthDay(new Date("1992/06/01"));
        user.setAddress("厦门市");
        user.setEmail("fjsmnhzxc@163.com");
        user.setPhoneNum("15060710833");
        int add = userService.add(user);
        System.out.println(add);
    }
}
