package com.board.boardback.model.nam;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.Where;

@Entity
@Table(name = "member")
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Getter
@Setter
@Where(clause = "delete_yn = 'N'") // 엔티티 조회시 일괄적인 Where 조건추가
public class MemberNam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private String memberId;

    @Column(name = "login_id")
    private String loginId;
    @Column(name = "user_pw")
    private String userPw;
    @Column(name = "user_name")
    private String userName;

    @Column(name = "insert_time")
    private String insertTime;

    @Column(name = "update_time")
    private String updateTime;

    @Column(name = "delete_yn")
    private String deleteYn;

}


