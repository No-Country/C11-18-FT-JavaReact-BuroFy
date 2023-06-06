package com.burofy.appWebBurofy.repository;

import com.burofy.appWebBurofy.entity.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface IConsultationRepository extends JpaRepository<Consultation, Long> {
    Collection<Consultation> getConsultationsByClientId(String clientId);
    Collection<Consultation> getConsultationsByProfessionalId(String professionalId);



}
