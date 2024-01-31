package com.board.boardback.repository.jun;

import com.board.boardback.model.jun.BoardJun;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepositoryJun extends JpaRepository<BoardJun, Integer> {

    Page<BoardJun> findAllByOrderByUidDesc(Pageable pageable);
}
