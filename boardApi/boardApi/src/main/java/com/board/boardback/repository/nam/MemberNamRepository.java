package com.board.boardback.repository.nam;

import com.board.boardback.model.nam.MemberNam;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberNamRepository extends JpaRepository<MemberNam, String> {

    // check id duplicated or not
    Optional<MemberNam> findByLoginId(String loginId);

    // check id and password for sign in
    Optional<MemberNam> findByLoginIdAndUserPw(String loginId,String userPw);
}

