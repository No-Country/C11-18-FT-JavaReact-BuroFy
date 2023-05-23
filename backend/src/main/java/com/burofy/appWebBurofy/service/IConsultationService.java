package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.entity.Consultation;
import com.burofy.appWebBurofy.entity.Professional;

public interface IConsultationService {

    Consultation createConsultation(Consultation consultation);

    Consultation getConsultation(Long id);

    Consultation updateConsultation(Long id, Consultation updatedConsultation);

}
