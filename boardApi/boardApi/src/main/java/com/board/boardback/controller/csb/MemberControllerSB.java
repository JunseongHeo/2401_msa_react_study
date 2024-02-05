package com.board.boardback.controller.csb;

import com.board.boardback.model.csb.SBMember;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/memberSB")
public class MemberControllerSB {

    @Autowired
    private SBMemberService sbMemberService;

    // create member rest api
    @PostMapping("/member_sb")
    public SBMember createMember(@RequestBody SBMember sbMember) { return sbMemberService.createMember(sbMember); }

    // get member by id
    @PostMapping("/member_sb/{id}")
    public ResponseEntity<SBMember> getMemberById(@PathVariable String id) { return sbMemberService.getMemberById(id); }

    // login by id, pwd
    @PostMapping("/member_sb/login")
    public ResponseEntity<SBMember> getMemberByIdAndPwd(@RequestBody SBMember sbMember) { return sbMemberService.getMemberByIdAndPwd(sbMember); }

}
