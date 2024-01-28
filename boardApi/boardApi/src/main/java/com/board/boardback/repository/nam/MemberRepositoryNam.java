package com.board.boardback.repository.nam;

import com.board.boardback.model.nam.MemberNam;
import com.board.boardback.model.nam.MemberResponseNamDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepositoryNam extends JpaRepository<MemberNam, Long> {

    MemberResponseNamDto findByUserIdAndUserPw(final String userId, final String UserPw);
}

