package com.board.boardback.model.nam;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.Where;

@Entity
@Table(name = "member")
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
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

    public String getMemberId() {
        return memberId;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }

    public String getLoginId() {
        return loginId;
    }

    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }

    public String getUserPw() {
        return userPw;
    }

    public void setUserPw(String userPw) {
        this.userPw = userPw;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getInsertTime() {
        return insertTime;
    }

    public void setInsertTime(String insertTime) {
        this.insertTime = insertTime;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    public String getDeleteYn() {
        return deleteYn;
    }

    public void setDeleteYn(String deleteYn) {
        this.deleteYn = deleteYn;
    }

}


