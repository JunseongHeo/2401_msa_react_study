package com.board.boardback.repository;

import com.board.boardback.model.BoardScm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardScmRepository extends JpaRepository<BoardScm, Integer> {
    Page<BoardScm> findAllByOrderByUidDesc(Pageable pageable);
}
