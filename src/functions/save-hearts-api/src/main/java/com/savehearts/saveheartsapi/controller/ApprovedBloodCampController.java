package com.savehearts.saveheartsapi.controller;

import com.savehearts.saveheartsapi.exceptions.ApprovedBloodCampNotFoundException;
import com.savehearts.saveheartsapi.model.ApprovedBloodCamp;

import com.savehearts.saveheartsapi.repository.ApprovedBloodCampRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class ApprovedBloodCampController {
    @Autowired
    private ApprovedBloodCampRepo approvedBloodCampRequestRepo;

    @PostMapping("/approved-blood-donation-camp")
    ApprovedBloodCamp saveApprovedBloodCamp(@RequestBody ApprovedBloodCamp approvedBloodCamp){
        return approvedBloodCampRequestRepo.save(approvedBloodCamp);
    }
    @GetMapping("/approved-blood-donation-camps")
    List<ApprovedBloodCamp> getAllApprovedBloodCamps(){
        return approvedBloodCampRequestRepo.findAll();
    }
    @GetMapping("/approved-blood-donation-camp/{id}")
    ApprovedBloodCamp getApprovedBloodCampById(@PathVariable Long id){
        return approvedBloodCampRequestRepo.findById(id)
                .orElseThrow(()->
                        new ApprovedBloodCampNotFoundException(id)
                );
    }

    @PutMapping("/approved-blood-donation-camp/{id}")
    ApprovedBloodCamp updateApprovedBloodCamp(@RequestBody ApprovedBloodCamp newApprovedBloodCamp,@PathVariable long id){
        Optional<ApprovedBloodCamp> approvedBloodCamp = approvedBloodCampRequestRepo.findById(id);
        if(approvedBloodCamp.isPresent()){
            approvedBloodCamp.get().setDate(newApprovedBloodCamp.getDate());
            approvedBloodCamp.get().setApprovedAmount(newApprovedBloodCamp.getApprovedAmount());
            approvedBloodCamp.get().setNumberOfStaff(newApprovedBloodCamp.getNumberOfStaff());
            approvedBloodCamp.get().setHeadOfStaffName(newApprovedBloodCamp.getHeadOfStaffName());

            return approvedBloodCampRequestRepo.save(approvedBloodCamp.get());
        }
        throw new ApprovedBloodCampNotFoundException(id);


    }
    @DeleteMapping("/approved-blood-donation-camp/{id}")
    String deleteApprovedBloodCamp(@PathVariable Long id){
        if(!approvedBloodCampRequestRepo.existsById(id)){
            throw new ApprovedBloodCampNotFoundException(id);
        }
        approvedBloodCampRequestRepo.deleteById(id);
        return id +" Deleted!";
    }
}
