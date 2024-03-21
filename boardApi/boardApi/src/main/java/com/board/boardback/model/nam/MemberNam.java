package com.board.boardback.model.nam;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.Where;

import java.util.Date;

@Entity
@Table(
        name = "member"
        ,indexes = {
            @Index(columnList = "member_id")
        }
)
@AllArgsConstructor
@DynamicInsert
@Getter
@Setter
@ToString(exclude = "user_pw")
@Where(clause = "delete_yn = 'N'") // 엔티티 조회시 일괄적인 Where 조건추가
public class MemberNam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long memberId;

    /*@Column(name = "login_id")
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
    private String deleteYn;*/

    /*@Enumerated(EnumType.STRING)
    private Authority authority;

    @Builder
    public MemberNam(String loginId, String userPw, Authority authority) {
        this.loginId = loginId;
        this.userPw = userPw;
        this.authority = authority;
    }*/

    @Setter @Column(name="login_id")  private String loginId;
    @Setter @Column(name="user_pw")   private String userPw;
    @Setter @Column(name="user_name") private String userName;
    @Setter @Column(name = "insert_time") private String insertTime;

    @Setter @Column(name = "update_time") private String updateTime;

    public MemberNam() {}

    public MemberNam(String loginId, String userPw, String userName, Date insertTime, Date updateTime) {
        this.loginId = loginId;
        this.userPw = userPw;
        this.userName = userName;
        this.insertTime = String.valueOf(insertTime);
        this.updateTime = String.valueOf(updateTime);
    }
}


