package com.board.boardback.controller.scm;

import com.board.boardback.model.scm.BoardScm;
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
    @PostMapping("/create")
    public BoardScm createBoard(@RequestBody BoardScm board) {
        return boardScmService.createBoard(board);
    }

    // list all boards
    @GetMapping("/read")
    public Page<BoardScm> getBoardList(Pageable pageable, @RequestParam String searchParam, @RequestParam String searchText) {
        return boardScmService.listBoards(pageable,searchParam,searchText);
    }

    // get board by id
    @GetMapping("/read/{id}")
    public ResponseEntity<BoardScm> getBoardById(@PathVariable Integer id) {
        return boardScmService.getBoardById(id);
    }

    // update board
    @PutMapping("/update/{id}")
    public ResponseEntity<BoardScm> updateBoard(@PathVariable Integer id, @RequestBody BoardScm boardDetails) {
        return boardScmService.updateBoard(id, boardDetails);
    }

    // delete board
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<BoardScm> deleteBoard(@PathVariable Integer id) {
        return boardScmService.deleteBoard(id);
    }
}
