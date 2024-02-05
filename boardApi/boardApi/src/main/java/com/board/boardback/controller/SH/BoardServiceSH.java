package com.board.boardback.controller.SH;

import com.board.boardback.exception.ResourceNotFoundException;
import com.board.boardback.model.SH.BoardSH;
import com.board.boardback.repository.SH.BoardRepositorySH;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BoardServiceSH {

    @Autowired
    private BoardRepositorySH boardRepository;

    // create board rest api
    public BoardSH createBoard(@RequestBody BoardSH board) {
        LocalDateTime localDate = LocalDateTime.now();
        board.setInsertTime(localDate.toString());
        return boardRepository.save(board);
    }

    // list all boards
    public List<BoardSH> listAllBoards() {
        return boardRepository.findAll();
    }

    // get board by id
    public ResponseEntity<BoardSH> getBoardById(@PathVariable Integer id) {
        BoardSH board = boardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id :" + id));

        return ResponseEntity.ok(board);
    }

    // update board
    public ResponseEntity<BoardSH> updateBoard(@PathVariable Integer id, @RequestBody BoardSH boardDetails) {

        BoardSH board = boardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        board.setTitle(boardDetails.getTitle());
        board.setContent(boardDetails.getContent());

        BoardSH updateBoard = boardRepository.save(board);

        return ResponseEntity.ok(updateBoard);
    }

    // delete board
    public ResponseEntity<BoardSH> deleteBoard(@PathVariable Integer id) {
        BoardSH board = boardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        board.setDeleteYn("Y");
        BoardSH updateBoard = boardRepository.save(board);
        return ResponseEntity.ok(updateBoard);
    }
}
