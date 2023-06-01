package com.burofy.appWebBurofy.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "person")
public class Person { // para registrar un cliente / un profesional
    @Id
    private String id;
    private String email;
    private String avatar;
    private String firstName;
    private String secondName;
    //private String documentNumber;
    //private String license;
    private String providerId;
    private String rol;
    /*@OneToOne
    @JoinColumn(name = "client_id")
    private Client client;
    @OneToOne
    @JoinColumn(name = "profesional_id")
    private Professional profesional;*/

}
