package com.burofy.appWebBurofy.entity;

import javax.persistence.*;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "professional")
public class Professional {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String email;
    private String avatar;
    private String firstName;
    private String lastName;
    private LocalDate birthDate;
    private String documentNumber;
    private String phone;
    private String location;
    private String license;
    private String experience;
    private String training;
    private String diploma;
    //private String price;
    //private String aboutMe;
    private Boolean isRemoteWork;
    private Boolean isFaceToFaceWork;
    private Boolean state;

}
