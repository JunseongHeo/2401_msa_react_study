package com.board.boardback.repository;

import com.board.boardback.model.BoardScm;
import com.board.boardback.model.MemberScm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberScmRepository extends JpaRepository<MemberScm, String> {
    Optional<MemberScm> findByLoginId(String loginId); // pk가 아닐때는 별도로 선언
}
