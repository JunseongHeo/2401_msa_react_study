package com.board.boardback.repository.nam;

import com.board.boardback.model.nam.BoardNam;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardNamRepository extends JpaRepository<BoardNam, Integer> {

    Page<BoardNam> findAllByOrderByUidDesc (Pageable pageable);
}

