package com.board.boardback.model.csb;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.jpa.repository.Query;

@Entity
@Table(name = "member")
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
public class SBMember {

    @Id
    @Column(name = "login_id")
    private String login_id;

    @Column(name = "user_pw")
    private String user_pw;

    @Column(name = "delete_yn")
    private String delete_yn;

    @Column(name = "insert_time")
    private String insert_time;

    public void setInsert_time(String insert_time) {
        this.insert_time = insert_time;
    }

    public String getLogin_id() {
        return login_id;
    }

    public void setLogin_id(String login_id) {
        this.login_id = login_id;
    }

    public String getUser_pw() {
        return user_pw;
    }

    public void setUser_pw(String user_pw) {
        this.user_pw = user_pw;
    }

    public String getDelete_yn() {
        return delete_yn;
    }

    public void setDelete_yn(String delete_yn) {
        this.delete_yn = delete_yn;
    }

    public String getInsert_time() {
        return insert_time;
    }
}
