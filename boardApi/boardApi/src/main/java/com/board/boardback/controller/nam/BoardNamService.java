package com.board.boardback.controller.nam;

import com.board.boardback.exception.ResourceNotFoundException;
import com.board.boardback.model.nam.BoardNam;
import com.board.boardback.model.nam.MemberNam;
import com.board.boardback.repository.nam.BoardNamRepository;
import com.board.boardback.repository.nam.MemberRepositoryNam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;

@Service
public class BoardNamService {

    @Autowired
    private BoardNamRepository boardNamRepository;

    @Autowired
    private final MemberRepositoryNam memberRepository;

    public BoardNamService(MemberRepositoryNam memberRepository) {
        this.memberRepository = memberRepository;
    }

    public MemberNam findBy(final MemberNam params) {
        MemberNam entity = memberRepository.findByLoginIdAndUserPw(params.getLoginId(), params.getUserPw());

        return entity;
    }


    // list all with paging
    public Page<BoardNam> listAllBoards(Pageable pageable) {
        return boardNamRepository.findAllByOrderByUidDesc(pageable);
    }

    // create board rest api
    public BoardNam createBoard(@RequestBody BoardNam board) {
        LocalDateTime localDate = LocalDateTime.now();
        board.setInsertTime(localDate.toString());
        return boardNamRepository.save(board);
    }

    // get board by id
    public ResponseEntity<BoardNam> getBoardById(@PathVariable Integer id) {
        BoardNam board = boardNamRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id :" + id));

        return ResponseEntity.ok(board);
    }

    // update board
    public ResponseEntity<BoardNam> updateBoard(@PathVariable Integer id, @RequestBody BoardNam boardDetails) {

        BoardNam board = boardNamRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        board.setTitle(boardDetails.getTitle());
        board.setContent(boardDetails.getContent());

        BoardNam updateBoard = boardNamRepository.save(board);

        return ResponseEntity.ok(updateBoard);
    }

    // delete board
    public ResponseEntity<BoardNam> deleteBoard(@PathVariable Integer id) {
        BoardNam board = boardNamRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Board not exist with id : " + id));

        board.setDeleteYn("Y");
        BoardNam updateBoard = boardNamRepository.save(board);
        return ResponseEntity.ok(updateBoard);
    }
}
