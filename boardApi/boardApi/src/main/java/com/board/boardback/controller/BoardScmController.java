package com.board.boardback.controller;

import com.board.boardback.model.BoardScm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/boardscm")
public class BoardScmController {

    @Autowired
    private BoardScmService boardScmService;

    // create board rest api
    @PostMapping("/scm")
    public BoardScm createBoard(@RequestBody BoardScm board) {
        return boardScmService.createBoard(board);
    }

    // list all boards
    @GetMapping("/scm")
    public Page<BoardScm> getBoardList(Pageable pageable) {
        return boardScmService.listAllBoards(pageable);
    }

    // get board by id
    @GetMapping("/scm/{id}")
    public ResponseEntity<BoardScm> getBoardById(@PathVariable Integer id) {
        return boardScmService.getBoardById(id);
    }

    // update board
    @PutMapping("/scm/{id}")
    public ResponseEntity<BoardScm> updateBoard(@PathVariable Integer id, @RequestBody BoardScm boardDetails) {
        return boardScmService.updateBoard(id, boardDetails);
    }

    // delete board
    @DeleteMapping("/scm/{id}")
    public ResponseEntity<BoardScm> deleteBoard(@PathVariable Integer id) {
        return boardScmService.deleteBoard(id);
    }
}
