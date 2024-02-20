package com.board.boardback.model.scm;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.Where;

@Entity
@Table(name = "board_scm")
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Getter
@Setter
@Where(clause = "delete_yn = 'N'") // 엔티티 조회시 일괄적인 Where 조건추가
public class BoardScm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer uid;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "writer")
    private String writer;

    @Column(name = "insert_time")
    private String insertTime;

    @Column(name = "delete_yn")
    private String deleteYn;

    @Column(name = "update_time")
    private String updateTime;

    @Column(name = "delete_time")
    private String deleteTime;

}
