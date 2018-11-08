package com.mengyunzhi.web.service;

import com.mengyunzhi.web.entity.User;
import com.mengyunzhi.web.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean login(User user) {
        String username = user.getUsername();
        User persistUser = userRepository.findByUsername(username);
        if (persistUser == null) {
            return false;
        }
        return persistUser.getPassword().equals(user.getPassword());
    }
}
