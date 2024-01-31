package com.board.boardback.model.jun;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(
        name = "member"
        ,indexes = {
        @Index(columnList = "member_id"),
       }
)
@Getter
@ToString(exclude = "user_pw")
public class MemberJun {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long member_id;

    @Setter @Column(name="login_id")  private String login_id;
    @Setter @Column(name="user_pw")   private String user_pw;
    @Setter @Column(name="user_name") private String user_name;

    public MemberJun() {}

    public MemberJun(String login_id, String user_pw, String user_name) {
        this.login_id = login_id;
        this.user_pw = user_pw;
        this.user_name = user_name;
    }
}
