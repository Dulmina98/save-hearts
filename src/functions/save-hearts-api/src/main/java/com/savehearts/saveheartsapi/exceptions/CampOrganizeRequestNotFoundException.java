package com.savehearts.saveheartsapi.exceptions;

public class CampOrganizeRequestNotFoundException extends RuntimeException{
    public CampOrganizeRequestNotFoundException(Long id){
        super("Could Not found the blood-camp-request with id "+id);
    }

}
