package com.savehearts.saveheartsapi.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ApprovedBloodCampNotFoundAdvice {
        @ResponseBody
        @ExceptionHandler(ApprovedBloodCampNotFoundException.class)
        @ResponseStatus(HttpStatus.NOT_FOUND)
        public Map<String,String> exceptionHandler(ApprovedBloodCampNotFoundException exception){
                Map<String,String> error = new HashMap<>();
                error.put("errorMessage",exception.getMessage());
                return error;
        }
}
