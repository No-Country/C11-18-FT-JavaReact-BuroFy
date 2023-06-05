package com.burofy.appWebBurofy.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
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
    @NotEmpty(message = "ID may not be empty")
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
    private String occupation;
    private Boolean state;

}