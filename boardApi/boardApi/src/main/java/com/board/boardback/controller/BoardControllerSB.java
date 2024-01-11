package com.board.boardback.controller;

import com.board.boardback.model.BoardSB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardControllerSB {

    @Autowired
    private BoardServiceSB boardServiceSB;

    // create board rest api
    @PostMapping("/board_sb")
    public BoardSB createBoard(@RequestBody BoardSB boardSB) {
        return boardServiceSB.createBoard(boardSB);
    }

    // list all boards
    @GetMapping("/board_sb")
    public List<BoardSB> listAllBoards() {
        return boardServiceSB.listAllBoards();
    }

    // get board by id
    @GetMapping("/board_sb/{id}")
    public ResponseEntity<BoardSB> getBoardById(@PathVariable Integer id) {
        return boardServiceSB.getBoardById(id);
    }

    // update board
    @PutMapping("/board_sb/{id}")
    public ResponseEntity<BoardSB> updateBoard(@PathVariable Integer id, @RequestBody BoardSB boardDetails) {
        return boardServiceSB.updateBoard(id, boardDetails);
    }

    // delete board
    @DeleteMapping("/board_sb/{id}")
    public ResponseEntity<BoardSB> deleteBoard(@PathVariable Integer id) {
        return boardServiceSB.deleteBoard(id);
    }
}
