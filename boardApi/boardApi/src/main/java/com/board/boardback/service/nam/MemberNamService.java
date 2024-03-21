package com.board.boardback.service.nam;

import com.board.boardback.model.jun.MemberJun;
import com.board.boardback.model.nam.MemberNam;
import com.board.boardback.repository.nam.MemberNamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MemberNamService {

    @Autowired
    private MemberNamRepository memberRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    // create board rest api
    public MemberNam createMember(@RequestBody MemberNam member) {
        LocalDateTime localDate = LocalDateTime.now();
        member.setInsertTime(localDate.toString());
        member.setUserPw((bCryptPasswordEncoder.encode(member.getUserPw())));
        return memberRepository.save(member);
    }

    // Optional : null 처리
    public Optional<MemberNam> getMemberByLoginId(@PathVariable String loginId) {
        return memberRepository.findByLoginId(loginId);
    }

    public Optional<MemberNam> findByLoginIdAndUserPw(@PathVariable String loginId,@PathVariable String userPw) {
        return memberRepository.findByLoginIdAndUserPw(loginId,bCryptPasswordEncoder.encode(userPw));
    }

    public List<MemberNam> selectAllMembers() {
        return memberRepository.findAll();
    }
}
