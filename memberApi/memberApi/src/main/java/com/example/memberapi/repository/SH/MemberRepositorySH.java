package com.example.memberapi.repository.SH;

import com.example.memberapi.model.SH.MemberSH;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepositorySH extends JpaRepository<MemberSH, String> {
    boolean existsByLoginId(String loginId);
}