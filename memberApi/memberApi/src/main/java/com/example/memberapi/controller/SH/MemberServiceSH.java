package com.example.memberapi.controller.SH;

import com.example.memberapi.model.SH.MemberSH;
import com.example.memberapi.repository.SH.MemberRepositorySH;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class MemberServiceSH {

    @Autowired
    private MemberRepositorySH memberScmRepository;

    // create board rest api
    public MemberSH createMember(@RequestBody MemberSH member) {
        LocalDateTime localDate = LocalDateTime.now();
        member.setInsertTime(localDate.toString());
        return memberScmRepository.save(member);
    }

    // exist member by id
    public boolean existsByLoginId(@PathVariable String id) {
        return memberScmRepository.existsByLoginId(id);
    }
}
