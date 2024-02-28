package com.board.boardback.controller.scm;

import com.board.boardback.model.scm.MemberScm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/memberscm")
public class MemberScmController {

    @Autowired
    private MemberScmService memberScmService;

    // create member rest api
    @PostMapping("/create")
    public MemberScm createMember(@RequestBody MemberScm member) {
        return memberScmService.createMember(member);
    }

    // get member by id
    @GetMapping("/read/{loginId}")
    public Optional<MemberScm> getMemberByLoginId(@PathVariable String loginId) {
        return memberScmService.getMemberByLoginId(loginId);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody MemberScm member) {
        return memberScmService.login(member);
    }
}
