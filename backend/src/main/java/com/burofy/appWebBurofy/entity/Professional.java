package com.burofy.appWebBurofy.entity;

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
    private String license;
    private String experience;
    private String training;
    private String diploma;
    private Boolean isRemoteWork;
    private Boolean isFaceToFaceWork;

}
