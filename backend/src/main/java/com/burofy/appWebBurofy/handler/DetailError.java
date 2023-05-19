package com.burofy.appWebBurofy.handler;

public class DetailError {

    private String name;
    private String message;

    public DetailError(Exception e){
        this.name = e.getClass().getName();
        this.message = e.getMessage();
    }
}
