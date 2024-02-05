package com.example.memberapi.controller.SH;

import com.example.memberapi.model.SH.MemberSH;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/MemberSH")
public class MemberControllerSH {

    @Autowired
    private MemberServiceSH memberServiceSH;

    // create member rest api
    @PostMapping("/sh")
    public MemberSH createMember(@RequestBody MemberSH member) {
        return memberServiceSH.createMember(member);
    }

    // get member by id
    @GetMapping("/existBy/{id}")
    public boolean existsById(@PathVariable String id) {
        return memberServiceSH.existsByLoginId(id);
    }
}
