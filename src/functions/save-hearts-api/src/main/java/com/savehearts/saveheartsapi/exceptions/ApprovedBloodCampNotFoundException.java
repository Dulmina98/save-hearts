package com.savehearts.saveheartsapi.exceptions;

public class ApprovedBloodCampNotFoundException extends RuntimeException{
    public ApprovedBloodCampNotFoundException(Long id){
        super("Could Not found the blood-camp with id "+id);
    }

}
