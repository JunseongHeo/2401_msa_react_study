package com.board.boardback.controller;

import com.board.boardback.exception.ResourceNotFoundException;
import com.board.boardback.model.SBMember;
import com.board.boardback.repository.SBMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SBMemberService {

    @Autowired
    private SBMemberRepository sbMemberRepository;

    // create member rest api
    public SBMember createMember(@RequestBody SBMember sbMember) {
        LocalDateTime localDate = LocalDateTime.now();
        sbMember.setInsert_time(localDate.toString());
        return sbMemberRepository.save(sbMember);
    }

    // list all members
    public List<SBMember> listAllMembers() {
        return sbMemberRepository.findAll();
    }

    // get member by id
    public ResponseEntity<SBMember> getMemberById(@PathVariable String id) {
        SBMember sbMember = sbMemberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Member not exist with id :" + id));

        return ResponseEntity.ok(sbMember);
    }

    // update member
    public ResponseEntity<SBMember> updateMember(@PathVariable String id, @RequestBody SBMember sbMemberDetails) {

        SBMember sbMember = sbMemberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Member not exist with id : " + id));

        sbMember.setUser_pw(sbMemberDetails.getUser_pw());

        SBMember updateMember = sbMemberRepository.save(sbMember);

        return ResponseEntity.ok(updateMember);
    }

    // delete member
    public ResponseEntity<SBMember> deleteMember(@PathVariable String id) {
        SBMember sbMember = sbMemberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Member not exist with id : " + id));

        sbMember.setDelete_yn("Y");
        SBMember updateMember = sbMemberRepository.save(sbMember);
        return ResponseEntity.ok(updateMember);
    }
}
