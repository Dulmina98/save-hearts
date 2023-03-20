package com.savehearts.saveheartsapi.controller;

import com.savehearts.saveheartsapi.exceptions.CampOrganizeRequestNotFoundException;
import com.savehearts.saveheartsapi.model.CampOrganizingRequest;
import com.savehearts.saveheartsapi.repository.CampOrganizingRequestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class CampOrganizingRequestController {
    @Autowired
    private CampOrganizingRequestRepo campOrganizingRequestRepo;

    @PostMapping("/request-blood-camp")
    CampOrganizingRequest saveCampOrganizingRequest(@RequestBody CampOrganizingRequest campOrganizingRequest){
        return campOrganizingRequestRepo.save(campOrganizingRequest);
    }
    @GetMapping("/request-blood-camps")
    List<CampOrganizingRequest> getAllCampOrganizingRequests(){
        return campOrganizingRequestRepo.findAll();
    }
    @GetMapping("/request-blood-camp/{id}")
    CampOrganizingRequest getCampOrganizingRequestById(@PathVariable Long id){
        return campOrganizingRequestRepo.findById(id)
                .orElseThrow(()->
                        new CampOrganizeRequestNotFoundException(id)
                );
    }

    @PutMapping("/request-blood-camp/{id}")
    CampOrganizingRequest updateCampOrganizingRequest(@RequestBody CampOrganizingRequest newCampOrganizingRequest,@PathVariable long id){
        Optional<CampOrganizingRequest> campOrganizingRequest = campOrganizingRequestRepo.findById(id);
        if(campOrganizingRequest.isPresent()){
            campOrganizingRequest.get().setLeaderName(newCampOrganizingRequest.getLeaderName());
            campOrganizingRequest.get().setContactNumber(newCampOrganizingRequest.getContactNumber());
            campOrganizingRequest.get().setEmail(newCampOrganizingRequest.getEmail());
            campOrganizingRequest.get().setExpectUnits(newCampOrganizingRequest.getExpectUnits());
            campOrganizingRequest.get().setExpectDonors(newCampOrganizingRequest.getExpectDonors());
            campOrganizingRequest.get().setDistrict(newCampOrganizingRequest.getDistrict());
            campOrganizingRequest.get().setMonth(newCampOrganizingRequest.getMonth());
            campOrganizingRequest.get().setLocation(newCampOrganizingRequest.getLocation());
            campOrganizingRequest.get().setMessage(newCampOrganizingRequest.getMessage());
            return campOrganizingRequestRepo.save(campOrganizingRequest.get());
        }
        throw new CampOrganizeRequestNotFoundException(id);


    }
    @DeleteMapping("/request-blood-camp/{id}")
    String deleteCampOrganizingRequest(@PathVariable Long id){
        if(!campOrganizingRequestRepo.existsById(id)){
            throw new CampOrganizeRequestNotFoundException(id);
        }
        campOrganizingRequestRepo.deleteById(id);
        return id +" Deleted!";
    }
}
