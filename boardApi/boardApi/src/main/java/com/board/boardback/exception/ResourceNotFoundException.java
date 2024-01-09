package com.board.boardback.exception;

public class ResourceNotFoundException extends RuntimeException{

    private static final Integer serialVersionUID = 1;

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
