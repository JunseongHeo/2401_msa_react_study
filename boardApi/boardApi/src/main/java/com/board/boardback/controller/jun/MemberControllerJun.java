package com.board.boardback.controller.jun;

import com.board.boardback.model.jun.MemberJun;
import com.board.boardback.service.MemberServiceJun;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/memberjun")
public class MemberControllerJun {

    @Autowired
    private MemberServiceJun memberServiceJun;

    // create board rest api
    @PostMapping("/create")
    public MemberJun createMember(@RequestBody MemberJun memberJun) {
        return memberServiceJun.createMember(memberJun);
    }

    @PostMapping("/all")
    public List<MemberJun> selectAllMembers() {
        return memberServiceJun.selectAllMembers();
    }
}
