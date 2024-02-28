package com.board.boardback.service;

import com.board.boardback.model.jun.MemberJun;
import com.board.boardback.repository.jun.MemberRepositoryJun;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class MemberServiceJun {

    @Autowired
    private MemberRepositoryJun memberRepositoryJun;

    public MemberJun createMember(@RequestBody MemberJun memberJun) {
        return memberRepositoryJun.save(memberJun);
    }

    public List<MemberJun> selectAllMembers() {
        return memberRepositoryJun.findAll();
    }
}
