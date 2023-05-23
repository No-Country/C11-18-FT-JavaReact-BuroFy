package com.burofy.appWebBurofy.entity;

import javax.persistence.*;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "professional")
public class Professional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String lastName;
    private String documentNumber;
    private String phone;
    private String location;
    private String email;
    private String password;

    private String license;
    private String experience;
    private String training;
    private String diploma;
    private Boolean isRemoteWork;
    private Boolean isFaceToFaceWork;





}
