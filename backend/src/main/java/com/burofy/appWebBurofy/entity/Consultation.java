package com.burofy.appWebBurofy.entity;

import javax.persistence.*;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

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
/*    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "client_id")
    @JsonBackReference
    private Client client;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "professional_id")
    @JsonBackReference
    private Professional professional;*/
 /*   @ManyToOne
    @JoinColumn(name = "id_payment")
    private Payment payment;*/
    private String type;
    private Date date;
    private String comments;

}
