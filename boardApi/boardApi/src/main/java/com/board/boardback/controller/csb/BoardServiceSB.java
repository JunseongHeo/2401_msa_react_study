package com.board.boardback.controller.csb;

import com.board.boardback.exception.ResourceNotFoundException;
import com.board.boardback.model.csb.BoardSB;
import com.board.boardback.repository.csb.BoardRepositorySB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BoardServiceSB {

    @Autowired
    private BoardRepositorySB boardRepositorySB;

    // create board rest api
    public BoardSB createBoard(@RequestBody BoardSB boardSB) {
        LocalDateTime localDate = LocalDateTime.now();
        boardSB.setInsertTime(localDate.toString());
        return boardRepositorySB.save(boardSB);
    }

    // list all boards
    public List<BoardSB> listAllBoards() {
        return boardRepositorySB.findAll();
    }

    // get board by id
    public ResponseEntity<BoardSB> getBoardById(@PathVariable Integer id) {
        BoardSB boardSB = boardRepositorySB.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id :" + id));

        return ResponseEntity.ok(boardSB);
    }

    // update board
    public ResponseEntity<BoardSB> updateBoard(@PathVariable Integer id, @RequestBody BoardSB boardDetails) {

        BoardSB boardSB = boardRepositorySB.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        boardSB.setTitle(boardDetails.getTitle());
        boardSB.setContent(boardDetails.getContent());

        BoardSB updateBoard = boardRepositorySB.save(boardSB);

        return ResponseEntity.ok(updateBoard);
    }

    // delete board
    public ResponseEntity<BoardSB> deleteBoard(@PathVariable Integer id) {
        BoardSB boardSB = boardRepositorySB.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        boardSB.setDeleteYn("Y");
        BoardSB updateBoard = boardRepositorySB.save(boardSB);
        return ResponseEntity.ok(updateBoard);
    }
}
