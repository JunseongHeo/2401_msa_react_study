package com.board.boardback.controller;

import com.board.boardback.model.BoardNam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
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
    public Map<String, Object> listAllBoards(@PageableDefault(page=0,size=5,sort="uid",direction = Sort.Direction.ASC)Pageable pageable) {
        System.out.println("pageable:: "+pageable);

        Page<BoardNam> boardNam = boardService.listAllBoards(pageable);
        Map<String,Object> response = new HashMap<>();
        response.put("data", boardNam.getContent());                        //전체 데이터 수
        response.put("totalElements", boardNam.getTotalElements());         //전체 데이터 수
        response.put("totalPages", boardNam.getTotalPages());               //전페 페이지 수
        response.put("numberOfElements", boardNam.getNumberOfElements());   //현재 페이지에 나올 데이터 수
        response.put("isFirstPage", boardNam.isFirst());                    //현재 페이지가 첫 페이지인지 여부
        response.put("hasNextPage", boardNam.hasNext());                    //다음 페이지 여부
        response.put("isLastPage", boardNam.isLast());                      //현재 페이지가 마지막 페이지인지 여부

        return response;
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
