package com.board.boardback.repository.csb;

import com.board.boardback.model.csb.SBMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface SBMemberRepository extends JpaRepository<SBMember, String> {

    @Query("SELECT m FROM SBMember m WHERE m.login_id = :id AND m.user_pw = :userPwd")
    Optional<SBMember> findByLogin_idAndUser_pw(String id, String userPwd);

}
