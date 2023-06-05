package com.burofy.appWebBurofy.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "person")
public class Person { // para registrar un cliente / un profesional
    @Id
    @NotEmpty(message = "Id may not be empty")
    private String id;
    @NotEmpty(message = "Email may not be empty")
    private String email;
    private String avatar;

    @NotEmpty(message = "fullName may not be empty")
    private String fullName;
    private String documentNumber;
    private String license;
    private String providerId;

    @NotEmpty(message = "Rol may not be empty")
    private String rol;
    /*@OneToOne
    @JoinColumn(name = "client_id")
    private Client client;
    @OneToOne
    @JoinColumn(name = "profesional_id")
    private Professional profesional;*/

}
