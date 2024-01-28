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
    @Column(name = "user_id")
    private String userId;

    @Column(name = "user_pw")
    private String userPw;

    @Column(name = "insert_time")
    private String insertTime;

    @Column(name = "delete_yn")
    private String deleteYn;


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserPw() {
        return userPw;
    }

    public void setUserPw(String userPw) {
        this.userPw = userPw;
    }

    public String getInsertTime() {
        return insertTime;
    }

    public void setInsertTime(String insertTime) {
        this.insertTime = insertTime;
    }

    public String getDeleteYn() {
        return deleteYn;
    }

    public void setDeleteYn(String deleteYn) {
        this.deleteYn = deleteYn;
    }

}


