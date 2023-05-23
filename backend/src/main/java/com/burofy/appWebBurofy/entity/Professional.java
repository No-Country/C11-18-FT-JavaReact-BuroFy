package com.burofy.appWebBurofy.entity;

import javax.persistence.*;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "professional")
public class Professional {

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

    private String license;
    private String experience;
    private String training;
    private String diploma;
    private Boolean isRemoteWork;
    private Boolean isFaceToFaceWork;

    @OneToMany(mappedBy = "professional", fetch = FetchType.EAGER)
    private List<Consultation> consultations;

    @Override
    public String toString() {
        return "Professional{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastName='" + lastName + '\'' +
                ", documentNumber='" + documentNumber + '\'' +
                ", phone='" + phone + '\'' +
                ", location='" + location + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", license='" + license + '\'' +
                ", experience='" + experience + '\'' +
                ", training='" + training + '\'' +
                ", diploma='" + diploma + '\'' +
                ", isRemoteWork=" + isRemoteWork +
                ", isFaceToFaceWork=" + isFaceToFaceWork +
                ", consultations=" + consultations +
                '}';
    }
}
