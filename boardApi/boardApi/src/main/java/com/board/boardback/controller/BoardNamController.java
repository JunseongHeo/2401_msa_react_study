package com.board.boardback.controller;

import com.board.boardback.model.BoardNam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardNamController {

    @Autowired
    private BoardNamService boardService;

    // create board rest api
    @PostMapping("/boards_nam")
    public BoardNam createBoard(@RequestBody BoardNam board) {
        return boardService.createBoard(board);
    }

    // list all boards
    @GetMapping("/boards_nam")
    public List<BoardNam> listAllBoards() {
        return boardService.listAllBoards();
    }

    // get board by id
    @GetMapping("/boards_nam/{id}")
    public ResponseEntity<BoardNam> getBoardById(@PathVariable Integer id) {
        return boardService.getBoardById(id);
    }

    // update board
    @PutMapping("/boards_nam/{id}")
    public ResponseEntity<BoardNam> updateBoard(@PathVariable Integer id, @RequestBody BoardNam boardDetails) {
        return boardService.updateBoard(id, boardDetails);
    }

    // delete board
    @DeleteMapping("/boards_nam/{id}")
    public ResponseEntity<BoardNam> deleteBoard(@PathVariable Integer id) {
        return boardService.deleteBoard(id);
    }
}
