package com.burofy.appWebBurofy.exception;

public class MailAlreadyExistsException extends RuntimeException {
    public MailAlreadyExistsException(String message) {
        super(message);
    }
}
