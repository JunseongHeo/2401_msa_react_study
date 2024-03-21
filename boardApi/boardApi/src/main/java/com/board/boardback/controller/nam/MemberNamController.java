package com.board.boardback.controller.nam;

import com.board.boardback.model.nam.MemberNam;
import com.board.boardback.service.nam.MemberNamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/membernam")
public class MemberNamController {

    @Autowired
    private MemberNamService memberService;

    // create member rest api
    @PostMapping("/create")
    public MemberNam createMember(@RequestBody MemberNam member) {
        return memberService.createMember(member);
    }

    // get member by id --> check the id duplicated or not -- for sign up
    @GetMapping("/read/{loginId}")
    public Optional<MemberNam> getMemberByLoginId(@PathVariable String loginId) {
        return memberService.getMemberByLoginId(loginId);
    }

    // get member by id and pw for sign in
    @GetMapping("/read/signIn/{loginId}/{userPw}")
    public Optional<MemberNam> findByLoginIdAndUserPw(@PathVariable String loginId, @PathVariable String userPw) {
        return memberService.findByLoginIdAndUserPw(loginId,userPw);
    }

    @PostMapping("/all")
    public List<MemberNam> selectAllMembers() {
        return memberService.selectAllMembers();
    }
}
