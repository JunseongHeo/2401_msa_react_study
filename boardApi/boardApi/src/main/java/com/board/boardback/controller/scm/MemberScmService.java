package com.board.boardback.controller.scm;

import com.board.boardback.model.scm.MemberScm;
import com.board.boardback.repository.scm.MemberScmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class MemberScmService {

    @Autowired
    private MemberScmRepository memberScmRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder; // 비번암호화

    // create board rest api
    public MemberScm createMember(@RequestBody MemberScm member) {
        LocalDateTime localDate = LocalDateTime.now();
        member.setInsertTime(localDate.toString());
        member.setUserPw(bCryptPasswordEncoder.encode(member.getUserPw()));
        return memberScmRepository.save(member);
    }

    // Optional : null 처리
    public Optional<MemberScm> getMemberByLoginId(@PathVariable String loginId) {
        return memberScmRepository.findByLoginId(loginId);
    }

    public boolean login(@RequestBody MemberScm member) {
        Optional<MemberScm> getDBMem = memberScmRepository.findByLoginId(member.getLoginId());
        String getDBPw = getDBMem.orElse(new MemberScm()).getUserPw();
        if (bCryptPasswordEncoder.matches(member.getUserPw(), getDBPw)) {
            return true;
        }
        return false;
    }
}
