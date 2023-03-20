package com.savehearts.saveheartsapi.model;

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
public class ApprovedBloodCamp {
    @Id
    @GeneratedValue
    private long approvedId;
    private String date;
    private int approvedAmount;
    private int numberOfStaff;
    private String headOfStaffName;

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
