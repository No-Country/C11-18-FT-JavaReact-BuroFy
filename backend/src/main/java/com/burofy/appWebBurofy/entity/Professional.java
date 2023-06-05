package com.burofy.appWebBurofy.entity;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

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
    @NotEmpty(message = "Id may not be empty")
    private String id;
    @NotEmpty(message = "Email may not be empty")
    private String email;
    private String avatar;

    @NotEmpty(message = "fullName may not be empty")
    private String fullName;
    private LocalDate birthDate;
    private String documentNumber;
    private String phone;
    private String location;
    private String license;
    private String experience;
    private String training;
    private String diploma;
    private String price;
    private String aboutMe;
    private Boolean isRemoteWork;
    private Boolean isFaceToFaceWork;
    private Boolean state;

}