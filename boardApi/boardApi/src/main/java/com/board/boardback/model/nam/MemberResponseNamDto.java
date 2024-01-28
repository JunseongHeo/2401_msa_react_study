package com.board.boardback.model.nam;

import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@Table(name = "member")
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class MemberResponseNamDto {

    @Column(name = "user_id")
    private String userId;

    @Column(name = "user_pw")
    private String userPw;

    @Column(name = "delete_yn")
    private String deleteYn;

    @Column(name = "insert_time")
    private String insertTime;

    public MemberResponseNamDto(MemberNam member) {
        this.userId = member.getUserId();
        this.userPw = member.getUserPw();
        this.deleteYn = member.getDeleteYn();
        this.insertTime = member.getInsertTime();
    }



}


