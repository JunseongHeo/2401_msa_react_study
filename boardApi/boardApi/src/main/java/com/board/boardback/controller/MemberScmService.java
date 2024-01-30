package com.board.boardback.controller;

import com.board.boardback.model.MemberScm;
import com.board.boardback.repository.MemberScmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class MemberScmService {

    @Autowired
    private MemberScmRepository memberScmRepository;

    // create board rest api
    public MemberScm createMember(@RequestBody MemberScm member) {
        LocalDateTime localDate = LocalDateTime.now();
        member.setInsertTime(localDate.toString());
        return memberScmRepository.save(member);
    }

    // get board by id
    public Optional<MemberScm> getMemberById(@PathVariable String id) {
        return memberScmRepository.findById(id);
    }
}
