package com.board.boardback.controller.scm;

import com.board.boardback.model.scm.MemberScm;
import com.board.boardback.repository.scm.MemberScmRepository;
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

    // Optional : null 처리
    public Optional<MemberScm> getMemberByLoginId(@PathVariable String loginId) {
        return memberScmRepository.findByLoginId(loginId);
    }
}
