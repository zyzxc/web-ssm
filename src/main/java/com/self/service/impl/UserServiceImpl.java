package com.self.service.impl;

import com.self.dao.UserDao;
import com.self.model.User;
import com.self.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by zxc on 2017/02/22.
 */

@Service
@Transactional(rollbackFor = Exception.class)
public class UserServiceImpl implements UserService {
    
    @Resource
    private UserDao userDao;

    public User getUserById(Long userId) {
        return userDao.selectUserById(userId);
    }

    @Override
    public User add() {
        return userDao.add();
    }

    public User getUserByPhoneOrEmail(String emailOrPhone) {
        return userDao.selectUserByPhoneOrEmail(emailOrPhone);
    }
    
    public List<User> getAllUser() {
        return userDao.selectAllUser();
    }
}
