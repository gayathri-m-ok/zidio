package com.careerhub.backend.repository;

import com.careerhub.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmailAndPasswordAndRole(String email, String password, String role);
}
