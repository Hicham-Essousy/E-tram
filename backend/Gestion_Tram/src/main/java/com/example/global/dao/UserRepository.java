package com.example.global.dao;

import com.example.global.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {


    User findByGmail(String gmail);
    User findByUsername(String username);




}
