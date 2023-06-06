package com.burofy.appWebBurofy.entity;

import javax.persistence.*;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Entity Consultation
 *  Class principal Consultation se crea los atributos
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

@Entity
@Table(name = "consultation")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Consultation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;
    @ManyToOne
    @JoinColumn(name = "professional_id")
    private Professional professional;
    @OneToOne
    @JoinColumn(name = "payment_id")
    private Payment payment;
    private String type;
    private Date date;
    private String comments;
    private Boolean state;



}
