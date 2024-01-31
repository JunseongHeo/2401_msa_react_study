package com.board.boardback.repository;


import com.board.boardback.model.jun.MemberJun;
import com.board.boardback.repository.jun.MemberRepositoryJun;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class MemberRepositoryTest_Jun {

    private final MemberRepositoryJun memberRepositoryJun;

    MemberRepositoryTest_Jun(@Autowired MemberRepositoryJun memberRepositoryJun) {
        this.memberRepositoryJun = memberRepositoryJun;
    }

    @Test
    @DisplayName("멤버테이블 데이터 추가 테스트")
    void givenMemberData_whenInsertMember_thenWorksFine() {
        // given
        long beforeDataRowCount = memberRepositoryJun.count();
        MemberJun insert_member = new MemberJun("testLoginId", "testPw", "testUsername");

        // when
        memberRepositoryJun.save(insert_member);

        // then
        long afterDataRowCount = memberRepositoryJun.count();
        assertThat(afterDataRowCount).isEqualTo(beforeDataRowCount + 1);
    }
}
