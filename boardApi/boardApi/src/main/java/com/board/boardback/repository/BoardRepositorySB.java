package com.board.boardback.repository;

import com.board.boardback.model.BoardSB;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepositorySB extends JpaRepository<BoardSB, Integer> {
}
