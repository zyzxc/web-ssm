package com.self.service.impl;

import com.self.dao.UserDao;
import com.self.model.User;
import com.self.service.UserService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by zxc on 2017/02/22.
 */

@Service("userService")
@Transactional(rollbackFor = Exception.class)
public class UserServiceImpl implements UserService {

    @Resource
    private UserDao userDao;

    public User getUserById(Long userId) {
        return userDao.selectUserById(userId);
    }

    @Override
    public int add(User user) {
        String userName = user.userName;
        User addUser = userDao.getUserByName(userName);
        String oldName = addUser.userName;
        if (oldName.equals(userName)) {
            return 0;
        } else {
            return userDao.add(user);
        }
    }

    @Override
    public User getUserByName(@Param("userName") String userName) {
        return userDao.getUserByName(userName);
    }

    /**
     * 验证登录
     *
     * @param username
     * @param password
     * @return
     */
    @Override
    public User checkLogin(String username, String password) {
        User user = userDao.getUserByName(username);
        if (user != null && user.getPassWord().equals(password)) {
            return user;
        }
        return null;
    }

    public User getUserByPhoneOrEmail(String emailOrPhone) {
        return userDao.selectUserByPhoneOrEmail(emailOrPhone);
    }

    public List<User> getAllUser() {
        return userDao.selectAllUser();
    }


}
