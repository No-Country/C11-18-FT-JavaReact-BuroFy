package com.burofy.appWebBurofy.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;


@Entity
@Table (name = "client")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Client  {

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
    private String occupation;
//    @OneToMany(mappedBy = "client", fetch = FetchType.EAGER)
//    @JsonIgnore
//    @JsonBackReference
//    private List<Consultation> consultations;

}