package com.board.boardback.controller;

import com.board.boardback.exception.ResourceNotFoundException;
import com.board.boardback.model.Board;
import com.board.boardback.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    // create board rest api
    public Board createBoard(@RequestBody Board board) {
        LocalDateTime localDate = LocalDateTime.now();
        board.setInsertTime(localDate.toString());
        return boardRepository.save(board);
    }

    // list all boards
    public Page<Board> listAllBoards(Pageable pageable) {
        return boardRepository.findAllCount(pageable);
    }

    // get board by id
    public ResponseEntity<Board> getBoardById(@PathVariable Integer id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id :" + id));

        return ResponseEntity.ok(board);
    }

    // update board
    public ResponseEntity<Board> updateBoard(@PathVariable Integer id, @RequestBody Board boardDetails) {

        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        board.setTitle(boardDetails.getTitle());
        board.setContent(boardDetails.getContent());

        Board updateBoard = boardRepository.save(board);

        return ResponseEntity.ok(updateBoard);
    }

    // delete board
    public ResponseEntity<Board> deleteBoard(@PathVariable Integer id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        board.setDeleteYn("Y");
        Board updateBoard = boardRepository.save(board);
        return ResponseEntity.ok(updateBoard);
    }
}
