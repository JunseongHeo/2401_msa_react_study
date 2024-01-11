package com.board.boardback.controller;

import com.board.boardback.model.BoardScm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardScmController {

    @Autowired
    private BoardScmService boardScmService;

    // create board rest api
    @PostMapping("/boardscm")
    public BoardScm createBoard(@RequestBody BoardScm board) {
        return boardScmService.createBoard(board);
    }

    // list all boards
    @GetMapping("/boardscm")
    public List<BoardScm> listAllBoards() {
        return boardScmService.listAllBoards();
    }

    // get board by id
    @GetMapping("/boardscm/{id}")
    public ResponseEntity<BoardScm> getBoardById(@PathVariable Integer id) {
        return boardScmService.getBoardById(id);
    }

    // update board
    @PutMapping("/boardscm/{id}")
    public ResponseEntity<BoardScm> updateBoard(@PathVariable Integer id, @RequestBody BoardScm boardDetails) {
        return boardScmService.updateBoard(id, boardDetails);
    }

    // delete board
    @DeleteMapping("/boardscm/{id}")
    public ResponseEntity<BoardScm> deleteBoard(@PathVariable Integer id) {
        return boardScmService.deleteBoard(id);
    }
}
