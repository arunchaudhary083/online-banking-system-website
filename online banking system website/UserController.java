package com.onlinebanking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/user-management")
    public String showUserManagementPage() {
        return "user-management";
    }
}
