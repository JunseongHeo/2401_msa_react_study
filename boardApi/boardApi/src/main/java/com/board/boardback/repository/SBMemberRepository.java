package com.board.boardback.repository;

import com.board.boardback.model.SBMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SBMemberRepository extends JpaRepository<SBMember, String> {

}
