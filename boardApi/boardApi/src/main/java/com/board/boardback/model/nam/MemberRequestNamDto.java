package com.board.boardback.model.nam;

import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Table(name = "member")
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class MemberRequestNamDto {

    @Column(name = "user_id")
    private String userId;

    @Column(name = "user_pw")
    private String userPw;

    /*public MemberNam toEntity() {
        return MemberNam.builder()
                .user_id(userId)
                .user_pw(userPw)
                .build();
    }*/

}


