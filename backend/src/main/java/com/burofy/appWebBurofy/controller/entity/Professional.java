package com.burofy.appWebBurofy.controller.entity;

import javax.persistence.*;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "professional")
public class Professional extends Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String license;

    @Column(unique = true, nullable = false)
    private String experience;

    private String training;

    @Column(name = "confirmed_diploma", nullable = false)
    private String diploma;

    @Column(name = "confirmed_remoteWork")
    private Boolean isRemoteWork;

    @Column(name = "confirmed_faceWork")
    private Boolean isFaceToFaceWork;


    //BORRAR ESTA LÍNEA
    /*public Professional(Long id, String license, String experience, String training, String diploma, Boolean isRemoteWork, Boolean isFaceToFaceWork) {
        this.id = id;
        this.license = license;
        this.experience = experience;
        this.training = training;
        this.diploma = diploma;
        this.isRemoteWork = isRemoteWork;
        this.isFaceToFaceWork = isFaceToFaceWork;

    }*/


    @PrePersist
    public void prePersist() {
        if (license == null || license.isEmpty()) {
                throw new IllegalArgumentException("La licencia del Profesional es obligatoria");
        }
        if (experience == null || experience.isEmpty()) {
            throw new IllegalArgumentException("La experiencia del Profesional es obligatoria");
        }

        if (diploma == null || diploma.isEmpty()) {
            throw new IllegalArgumentException("El diploma del Profesional es obligatoria");
        }


}
}
