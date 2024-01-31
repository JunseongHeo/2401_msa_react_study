package com.board.boardback.controller.jun;

import com.board.boardback.model.jun.BoardJun;
import com.board.boardback.service.BoardServiceJun;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class BoardControllerJun {

    @Autowired
    private BoardServiceJun boardServiceJun;

    // create board rest api
    @PostMapping("/junboards")
    public BoardJun createBoard(@RequestBody BoardJun boardJun) {
        return boardServiceJun.createBoard(boardJun);
    }

    // list paging boards
    @GetMapping("/junboards")
    public Page<BoardJun> listAllBoards(@PageableDefault(page=0, size=5) Pageable pageable) {
        return boardServiceJun.findPagingByUidDesc(pageable);
    }

    // get board by id
    @GetMapping("/junboards/{id}")
    public ResponseEntity<BoardJun> getBoardById(@PathVariable Integer id) {
        return boardServiceJun.getBoardById(id);
    }

    // update board
    @PutMapping("/junboards/{id}")
    public ResponseEntity<BoardJun> updateBoard(@PathVariable Integer id, @RequestBody BoardJun boardDetails) {
        return boardServiceJun.updateBoard(id, boardDetails);
    }

    // delete board
    @DeleteMapping("/junboards/{id}")
    public ResponseEntity<BoardJun> deleteBoard(@PathVariable Integer id) {
        return boardServiceJun.deleteBoard(id);
    }
}
