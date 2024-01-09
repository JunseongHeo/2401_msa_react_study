package com.board.boardback.controller;

import com.board.boardback.model.JunBoard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class JunBoardController {

    @Autowired
    private JunBoardService junBoardService;

    // create board rest api
    @PostMapping("/junboards")
    public JunBoard createBoard(@RequestBody JunBoard junBoard) {
        return junBoardService.createBoard(junBoard);
    }

    // list all boards
    @GetMapping("/junboards")
    public List<JunBoard> listAllBoards() {
        return junBoardService.listAllBoards();
    }

    // get board by id
    @GetMapping("/junboards/{id}")
    public ResponseEntity<JunBoard> getBoardById(@PathVariable Integer id) {
        return junBoardService.getBoardById(id);
    }

    // update board
    @PutMapping("/junboards/{id}")
    public ResponseEntity<JunBoard> updateBoard(@PathVariable Integer id, @RequestBody JunBoard boardDetails) {
        return junBoardService.updateBoard(id, boardDetails);
    }

    // delete board
    @DeleteMapping("/junboards/{id}")
    public ResponseEntity<JunBoard> deleteBoard(@PathVariable Integer id) {
        return junBoardService.deleteBoard(id);
    }
}
