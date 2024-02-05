package com.board.boardback.repository.nam;

import com.board.boardback.model.nam.MemberNam;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberNamRepository extends JpaRepository<MemberNam, String> {
    Optional<MemberNam> findByLoginId(String loginId);
}

