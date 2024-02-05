package com.board.boardback.controller.nam;

import com.board.boardback.model.nam.MemberNam;
import com.board.boardback.repository.nam.MemberNamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class MemberNamService {

    @Autowired
    private MemberNamRepository memberRepository;

    // create board rest api
    public MemberNam createMember(@RequestBody MemberNam member) {
        LocalDateTime localDate = LocalDateTime.now();
        member.setInsertTime(localDate.toString());
        return memberRepository.save(member);
    }

    // Optional : null 처리
    public Optional<MemberNam> getMemberByLoginId(@PathVariable String loginId) {
        return memberRepository.findByLoginId(loginId);
    }
}
