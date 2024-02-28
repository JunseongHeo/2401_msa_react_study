package com.board.boardback.controller.scm;

import com.board.boardback.exception.ResourceNotFoundException;
import com.board.boardback.model.scm.BoardScm;
import com.board.boardback.repository.scm.BoardScmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;

@Service
public class BoardScmService {

    @Autowired
    private BoardScmRepository boardScmRepository;

    // create board rest api
    public BoardScm createBoard(@RequestBody BoardScm board) {
        LocalDateTime localDate = LocalDateTime.now();
        board.setInsertTime(localDate.toString());
        return boardScmRepository.save(board);
    }

    // list all boards
    public Page<BoardScm> listBoards(Pageable pageable, String searchParam, String searchText) {
        if (searchParam.equals("title")) {
            return boardScmRepository.findByTitleContainingOrderByUidDesc(searchText,pageable);
        } else if (searchParam.equals("writer")) {
            return boardScmRepository.findByWriterContainingOrderByUidDesc(searchText,pageable);
        } else {
            return boardScmRepository.findAllByOrderByUidDesc(pageable);
        }
    }

    // get board by id
    public ResponseEntity<BoardScm> getBoardById(@PathVariable Integer id) {
        BoardScm board = boardScmRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id :" + id));

        return ResponseEntity.ok(board);
    }

    // update board
    public ResponseEntity<BoardScm> updateBoard(@PathVariable Integer id, @RequestBody BoardScm boardDetails) {

        BoardScm board = boardScmRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        LocalDateTime localDate = LocalDateTime.now();
        board.setTitle(boardDetails.getTitle());
        board.setContent(boardDetails.getContent());
        board.setUpdateTime(localDate.toString());

        BoardScm updateBoard = boardScmRepository.save(board);
        return ResponseEntity.ok(updateBoard);
    }

    // delete board
    public ResponseEntity<BoardScm> deleteBoard(@PathVariable Integer id) {
        BoardScm board = boardScmRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        LocalDateTime localDate = LocalDateTime.now();
        board.setDeleteYn("Y");
        board.setDeleteTime(localDate.toString());

        BoardScm updateBoard = boardScmRepository.save(board);
        return ResponseEntity.ok(updateBoard);
    }
}
