package com.board.boardback.repository.nam;

import com.board.boardback.model.nam.MemberNam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepositoryNam extends JpaRepository<MemberNam, Long> {

    MemberNam findByLoginIdAndUserPw(final String loginId, final String UserPw);
}

