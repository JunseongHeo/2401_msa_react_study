package com.board.boardback.model.scm;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Table(name = "member")
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Getter
@Setter
public class MemberScm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Integer memberId;

    @Column(name = "login_id")
    private String loginId;

    @Column(name = "user_pw")
    private String userPw;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "user_auth")
    private String userAuth;

    @Column(name = "delete_yn")
    private String deleteYn;

    @Column(name = "insert_time")
    private String insertTime;

    @Column(name = "update_time")
    private String updateTime;

}
