package com.example.memberapi.model.SH;

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
public class MemberSH {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private long member_id;

    @Column(name = "login_id")
    private String loginId;

    @Column(name = "user_pw")
    private String userPw;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "delete_yn")
    private String deleteYn;

    @Column(name = "insert_time")
    private String insertTime;

    @Column(name = "update_time")
    private String updateTime;
}
