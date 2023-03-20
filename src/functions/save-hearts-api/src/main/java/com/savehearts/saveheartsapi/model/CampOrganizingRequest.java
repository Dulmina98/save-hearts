package com.savehearts.saveheartsapi.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CampOrganizingRequest {
    @Id
    @GeneratedValue
    private long request_id;
    private String leaderName;
    private String contactNumber;
    private String email;
    private int expectUnits;
    private int expectDonors;
    private String district;
    private String month;
    private String location;
    private String message;
}
