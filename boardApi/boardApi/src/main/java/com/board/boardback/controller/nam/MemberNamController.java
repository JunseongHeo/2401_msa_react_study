package com.board.boardback.controller.nam;

import com.board.boardback.model.nam.MemberNam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
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

    // get member by id
    @GetMapping("/read/{loginId}")
    public Optional<MemberNam> getMemberByLoginId(@PathVariable String loginId/*, @PathVariable String userPw*/) {
        System.out.println("loginId : " + loginId);
//        System.out.println("userPw : " + userPw);

        return memberService.getMemberByLoginId(loginId);
    }
}
