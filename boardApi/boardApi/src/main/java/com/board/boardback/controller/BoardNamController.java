package com.board.boardback.controller;

import com.board.boardback.model.BoardNam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/nam")
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
    public ResponseEntity<Page<BoardNam>> listAllBoards(Pageable pageable) {
        System.out.println("pageable:: "+pageable);

        Page<BoardNam> list = boardService.listAllBoards(pageable);

        return ResponseEntity.ok(list);
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
