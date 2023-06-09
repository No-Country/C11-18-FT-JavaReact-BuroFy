package com.burofy.appWebBurofy.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Entity Client
 *  Class principal Client se crea los atributos
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

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
    //@NotEmpty(message = "Email may not be empty")
    private String email;
    @Column(length = 1024)
    private String avatar;
    //@NotEmpty(message = "fullName may not be empty")
    private String fullName;
    private LocalDate birthDate;
    private String documentNumber;
    private String phone;
    private String location;
    private String occupation;
    private Boolean state;

}