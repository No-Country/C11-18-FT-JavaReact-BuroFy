package com.burofy.appWebBurofy.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Table (name = "client")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Client  {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String email;
    private String avatar;
    private String fullName;
    private LocalDate birthDate;
    private String documentNumber;
    private String phone;
    private String location;
    private String occupation;
    private Boolean state;

}