package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.dto.ConsultationResponseDTO;
import com.burofy.appWebBurofy.entity.Consultation;

public interface IConsultationService {

    Consultation createConsultation(Consultation consultation);

    Consultation getConsultation(Long id);

    Consultation updateConsultation(Long id, Consultation updatedConsultation);

    Consultation deleteConsultation(Long id);

    ConsultationResponseDTO getConsultationsByClientId(Long id);

    ConsultationResponseDTO getConsultationsByProfessionalId(Long id);

}
