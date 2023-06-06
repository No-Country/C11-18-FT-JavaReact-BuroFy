package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.dto.ConsultationResponseDTO;
import com.burofy.appWebBurofy.entity.Consultation;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *
 *  I Consultation Service
 *
 *  Implementa el objeto CRUD del  Consultation Service IMPL
 *  manipular el objeto del dominio
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

public interface IConsultationService {

    Consultation createConsultation(Consultation consultation);

    Consultation getConsultation(Long id);

    Consultation updateConsultation(Long id, Consultation updatedConsultation);

    Consultation deleteConsultation(Long id);

    ConsultationResponseDTO getConsultationsByClientId(String id);

    ConsultationResponseDTO getConsultationsByProfessionalId(String id);

}
