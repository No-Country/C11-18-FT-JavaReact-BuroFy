package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.dto.ConsultationDTO;
import com.burofy.appWebBurofy.entity.Consultation;

import java.util.List;

public interface IConsultationService {

    Consultation createConsultation(Consultation consultation);

    Consultation getConsultation(Long id);

    Consultation updateConsultation(Long id, Consultation updatedConsultation);

    Consultation deleteConsultation(Long id);

    List<ConsultationDTO> getConsultationsByClientId(String id);

    List<ConsultationDTO> getConsultationsByProfessionalId(String id);

}
