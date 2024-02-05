package com.board.boardback.controller.SH;

import com.board.boardback.model.SH.BoardSH;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardControllerSH {

    @Autowired
    private BoardServiceSH boardServiceSH;

    // create board rest api
    @PostMapping("/boards_sh")
    public BoardSH createBoard(@RequestBody BoardSH board) {
        return boardServiceSH.createBoard(board);
    }

    // list all boards
    @GetMapping("/boards_sh")
    public List<BoardSH> listAllBoards() {
        return boardServiceSH.listAllBoards();
    }

    // get board by id
    @GetMapping("/boards_sh/{id}")
    public ResponseEntity<BoardSH> getBoardById(@PathVariable Integer id) {
        return boardServiceSH.getBoardById(id);
    }

    // update board
    @PutMapping("/boards_sh/{id}")
    public ResponseEntity<BoardSH> updateBoard(@PathVariable Integer id, @RequestBody BoardSH boardDetails) {
        return boardServiceSH.updateBoard(id, boardDetails);
    }

    // delete board
    @DeleteMapping("/boards_sh/{id}")
    public ResponseEntity<BoardSH> deleteBoard(@PathVariable Integer id) {
        return boardServiceSH.deleteBoard(id);
    }
}
