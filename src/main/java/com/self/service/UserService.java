package com.self.service;

import com.self.model.User;

import java.util.List;

/**
 * Created by zxc on 2017/02/22.
 */
public interface UserService {

    List<User> getAllUser();

    User getUserByPhoneOrEmail(String emailOrPhone);

    User getUserById(Long userId);

    User add();
}
