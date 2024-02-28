package com.board.boardback.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Entity
@Table(
        name = "member"
        ,indexes = {
        @Index(columnList = "member_id"),
    }
)
@Getter
@ToString(exclude = "user_pw")
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long member_id;

    @Setter
    @Column(name="login_id")  private String loginId;
    @Setter
    @Column(name="user_pw")   private String userPw;
    @Setter
    @Column(name="user_name") private String userName;
    @Setter
    @Column(name="user_auth") private String userAuth;

    public User(String login_id, String user_pw, String user_name, String user_auth) {
        this.loginId = login_id;
        this.userPw = user_pw;
        this.userName = user_name;
        this.userAuth = user_auth;
    }

    // ENUM으로 안하고 ,로 해서 구분해서 ROLE을 입력 -> 그걸 파싱!!
    public List<String> getRoleList(){
        if(this.userAuth.length() > 0){
            return Arrays.asList(this.userAuth.split(","));
        }
        return new ArrayList<>();
    }
}
