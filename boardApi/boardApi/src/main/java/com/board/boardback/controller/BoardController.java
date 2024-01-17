package com.board.boardback.controller;

import com.board.boardback.model.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardController {

    @Autowired
    private BoardService boardService;

    // create board rest api
    @PostMapping("/boards")
    public Board createBoard(@RequestBody Board board) {
        return boardService.createBoard(board);
    }

    // list all boards
    @GetMapping("/boards")
    public Map<String, Object> listAllBoards(Pageable pageable) {
        Page<Board> boardPage = boardService.listAllBoards(pageable);   // Page 객체를 통해 전체 데이터 수 count 쿼리 생성

        Map<String, Object> response = new HashMap<>();
        response.put("boards", boardPage.getContent());                 // 페이지 내용 리스트
        response.put("totalPages", boardPage.getTotalPages());          // 전체 페이지 수
        response.put("totalElements", boardPage.getTotalElements());    // 모든 페이지에 존재하는 총 원소 수
        response.put("hasNext", boardPage.hasNext());                   // 다음 페이지 존재 확인
        response.put("hasPrevios", boardPage.hasPrevious());            // 이전 페이지 존재 확인
        response.put("isFirst", boardPage.isFirst());                   // 첫 번째 페이지인지 확인
        response.put("isLast", boardPage.isLast());                     // 마지막 페이지인지 확인
        response.put("pageable", boardPage.getPageable());              // 현재 Pageable 반환
        response.put("nextPageable", boardPage.nextPageable());         // 다음 Pageable 반환
        response.put("previousPageable", boardPage.previousPageable()); // 이전 Pageable 반환
        return response;
    }

    // get board by id
    @GetMapping("/boards/{id}")
    public ResponseEntity<Board> getBoardById(@PathVariable Integer id) {
        return boardService.getBoardById(id);
    }

    // update board
    @PutMapping("/boards/{id}")
    public ResponseEntity<Board> updateBoard(@PathVariable Integer id, @RequestBody Board boardDetails) {
        return boardService.updateBoard(id, boardDetails);
    }

    // delete board
    @DeleteMapping("/boards/{id}")
    public ResponseEntity<Board> deleteBoard(@PathVariable Integer id) {
        return boardService.deleteBoard(id);
    }
}
