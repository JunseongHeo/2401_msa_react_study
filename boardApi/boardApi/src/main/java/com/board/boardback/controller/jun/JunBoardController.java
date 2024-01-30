package com.board.boardback.controller.jun;

import com.board.boardback.model.jun.JunBoard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    // list paging boards
    @GetMapping("/junboards")
    public Page<JunBoard> listAllBoards(@PageableDefault(page=0, size=5) Pageable pageable) {
        return junBoardService.findPagingByUidDesc(pageable);
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
