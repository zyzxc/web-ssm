package com.self.service;

import com.self.model.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by zxc on 2017/02/22.
 */
public interface UserService {

    List<User> getAllUser();

    User getUserByPhoneOrEmail(String emailOrPhone);

    User getUserById(Long userId);

    int add(User user);

    User getUserByName(@Param("username") String username);

    User checkLogin(String username, String password);
}
