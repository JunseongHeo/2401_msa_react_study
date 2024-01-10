package com.board.boardback.controller;

import com.board.boardback.exception.ResourceNotFoundException;
import com.board.boardback.model.BoardNam;
import com.board.boardback.repository.BoardNamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BoardNamService {

    @Autowired
    private BoardNamRepository boardNamRepository;

    // create board rest api
    public BoardNam createBoard(@RequestBody BoardNam board) {
        LocalDateTime localDate = LocalDateTime.now();
        board.setInsertTime(localDate.toString());
        return boardNamRepository.save(board);
    }

    // list all boards
    public List<BoardNam> listAllBoards() {
        return boardNamRepository.findAll();
    }

    // get board by id
    public ResponseEntity<BoardNam> getBoardById(@PathVariable Integer id) {
        BoardNam board = boardNamRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id :" + id));

        return ResponseEntity.ok(board);
    }

    // update board
    public ResponseEntity<BoardNam> updateBoard(@PathVariable Integer id, @RequestBody BoardNam boardDetails) {

        BoardNam board = boardNamRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        board.setTitle(boardDetails.getTitle());
        board.setContent(boardDetails.getContent());

        BoardNam updateBoard = boardNamRepository.save(board);

        return ResponseEntity.ok(updateBoard);
    }

    // delete board
    public ResponseEntity<BoardNam> deleteBoard(@PathVariable Integer id) {
        BoardNam board = boardNamRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        board.setDeleteYn("Y");
        BoardNam updateBoard = boardNamRepository.save(board);
        return ResponseEntity.ok(updateBoard);
    }
}
