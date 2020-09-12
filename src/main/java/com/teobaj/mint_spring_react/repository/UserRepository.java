package com.teobaj.mint_spring_react.repository;

import com.teobaj.mint_spring_react.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}
