package com.board.boardback.repository;

import com.board.boardback.model.BoardNam;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BoardNamRepository extends JpaRepository<BoardNam, Integer> {

    @Query(value="select n from BoardNam as n where n.deleteYn='N'",
            countQuery = "select count(n.uid) from BoardNam as n where n.deleteYn='N'")
    Page<BoardNam> findAllBoardNam (Pageable pageable);
}

