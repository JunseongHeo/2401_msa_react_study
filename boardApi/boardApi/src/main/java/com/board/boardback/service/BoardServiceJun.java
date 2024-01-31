package com.board.boardback.service;

import com.board.boardback.exception.ResourceNotFoundException;
import com.board.boardback.model.jun.BoardJun;
import com.board.boardback.repository.jun.BoardRepositoryJun;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BoardServiceJun {

    @Autowired
    private BoardRepositoryJun boardRepositoryJun;

    // create board rest api
    public BoardJun createBoard(@RequestBody BoardJun boardJun) {
        LocalDateTime localDate = LocalDateTime.now();
        boardJun.setInsertTime(localDate.toString());
        return boardRepositoryJun.save(boardJun);
    }

    // list all boards
    public List<BoardJun> listAllBoards() {
        return boardRepositoryJun.findAll();
    }

    // list paging boards
    public Page<BoardJun> findPagingByUidDesc(Pageable pageable) {
        return boardRepositoryJun.findAllByOrderByUidDesc(pageable);
    }

    // get board by id
    public ResponseEntity<BoardJun> getBoardById(@PathVariable Integer id) {
        BoardJun boardJun = boardRepositoryJun.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id :" + id));

        return ResponseEntity.ok(boardJun);
    }

    // update board
    public ResponseEntity<BoardJun> updateBoard(@PathVariable Integer id, @RequestBody BoardJun boardDetails) {

        BoardJun board = boardRepositoryJun.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        board.setTitle(boardDetails.getTitle());
        board.setContent(boardDetails.getContent());

        BoardJun updateBoard = boardRepositoryJun.save(board);

        return ResponseEntity.ok(updateBoard);
    }

    // delete board
    public ResponseEntity<BoardJun> deleteBoard(@PathVariable Integer id) {
        BoardJun board = boardRepositoryJun.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        board.setDeleteYn("Y");
        BoardJun updateBoard = boardRepositoryJun.save(board);
        return ResponseEntity.ok(updateBoard);
    }
}
