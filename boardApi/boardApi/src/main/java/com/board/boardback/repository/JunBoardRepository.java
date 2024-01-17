package com.board.boardback.repository;

import com.board.boardback.model.JunBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JunBoardRepository extends JpaRepository<JunBoard, Integer> {

    Page<JunBoard> findAllByOrderByUidDesc(Pageable pageable);
}
