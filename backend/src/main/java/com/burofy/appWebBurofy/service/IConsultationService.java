package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.entity.Consultation;

public interface IConsultationService {

    Consultation createConsultation(Consultation consultation);

    Consultation getConsultation(Long id);

}
