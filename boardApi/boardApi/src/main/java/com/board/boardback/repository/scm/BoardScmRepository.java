package com.board.boardback.repository.scm;

import com.board.boardback.model.scm.BoardScm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardScmRepository extends JpaRepository<BoardScm, Integer> {
    Page<BoardScm> findAllByOrderByUidDesc(Pageable pageable); // findAllOrderByUidDesc : error
}
