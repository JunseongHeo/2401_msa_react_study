package com.board.boardback.repository;

import com.board.boardback.model.BoardNam;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardNamRepository extends JpaRepository<BoardNam, Integer> {

    Page<BoardNam> findAllByOrderByUidDesc (Pageable pageable);
}

