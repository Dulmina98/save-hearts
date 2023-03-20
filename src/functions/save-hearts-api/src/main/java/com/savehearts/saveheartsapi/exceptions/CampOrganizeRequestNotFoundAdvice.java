package com.savehearts.saveheartsapi.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class CampOrganizeRequestNotFoundAdvice {
        @ResponseBody
        @ExceptionHandler(CampOrganizeRequestNotFoundException.class)
        @ResponseStatus(HttpStatus.NOT_FOUND)
        public Map<String,String> exceptionHandler(CampOrganizeRequestNotFoundException exception){
                Map<String,String> error = new HashMap<>();
                error.put("errorMessage",exception.getMessage());
                return error;
        }
}
