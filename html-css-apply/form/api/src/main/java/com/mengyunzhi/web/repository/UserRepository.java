package com.mengyunzhi.web.repository;

import com.mengyunzhi.web.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);
}
