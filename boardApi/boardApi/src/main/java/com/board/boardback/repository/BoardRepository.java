package com.board.boardback.repository;

import com.board.boardback.model.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BoardRepository extends JpaRepository<Board, Integer> {
    //JPQL은 엔티티 객체를 대상으로 쿼리를 질의
    //SQL은 데이터베이스 테이블 대상으로 쿼리를 질의
    //nativeQuery = true 사용시 => 일반 SQL쿼리
    //nativeQuery 없을 시 일반 JPQL쿼리, from뒤는 엔티티 명 (소문자로 할 시 에러)
    //JPQL에서 엔티티의 별칭은 필수적으로 명시
    @Query(value="select b from Board as b where b.deleteYn = 'N'"
            , countQuery = "select count(b.id) from Board as b where b.deleteYn = 'N'"
    )
    Page<Board> findAllCount(Pageable pageable);
}
