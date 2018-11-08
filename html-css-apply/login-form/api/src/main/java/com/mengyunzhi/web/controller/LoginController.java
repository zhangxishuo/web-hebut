package com.mengyunzhi.web.controller;

import com.mengyunzhi.web.entity.User;
import com.mengyunzhi.web.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping
    public void login(@RequestBody User user, HttpServletResponse httpServletResponse) {
        if (!userService.login(user)) {
            httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
        }
    }
}
