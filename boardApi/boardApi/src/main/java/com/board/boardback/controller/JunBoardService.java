package com.board.boardback.controller;

import com.board.boardback.exception.ResourceNotFoundException;
import com.board.boardback.model.JunBoard;
import com.board.boardback.repository.JunBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class JunBoardService {

    @Autowired
    private JunBoardRepository junBoardRepository;

    // create board rest api
    public JunBoard createBoard(@RequestBody JunBoard junBoard) {
        LocalDateTime localDate = LocalDateTime.now();
        junBoard.setInsertTime(localDate.toString());
        return junBoardRepository.save(junBoard);
    }

    // list all boards
    public List<JunBoard> listAllBoards() {
        return junBoardRepository.findAll();
    }

    // list paging boards
    public List<JunBoard> findPagingByUidDesc(@PageableDefault(size=5, page=0) Pageable pageable) {
        return junBoardRepository.findAllByOrderByUidDesc(pageable).getContent();
    }

    // get board by id
    public ResponseEntity<JunBoard> getBoardById(@PathVariable Integer id) {
        JunBoard junBoard = junBoardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id :" + id));

        return ResponseEntity.ok(junBoard);
    }

    // update board
    public ResponseEntity<JunBoard> updateBoard(@PathVariable Integer id, @RequestBody JunBoard boardDetails) {

        JunBoard board = junBoardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        board.setTitle(boardDetails.getTitle());
        board.setContent(boardDetails.getContent());

        JunBoard updateBoard = junBoardRepository.save(board);

        return ResponseEntity.ok(updateBoard);
    }

    // delete board
    public ResponseEntity<JunBoard> deleteBoard(@PathVariable Integer id) {
        JunBoard board = junBoardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        board.setDeleteYn("Y");
        JunBoard updateBoard = junBoardRepository.save(board);
        return ResponseEntity.ok(updateBoard);
    }
}
