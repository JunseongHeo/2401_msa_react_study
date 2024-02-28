package com.board.boardback.repository;

import com.board.boardback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByloginId(String loginId);
}
