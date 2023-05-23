package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.entity.Consultation;
import com.burofy.appWebBurofy.entity.Professional;
import com.burofy.appWebBurofy.repository.IConsultationRepository;
import com.burofy.appWebBurofy.service.IConsultationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ConsultationServiceImpl implements IConsultationService {

    private final IConsultationRepository consultationRepository;

    @Override
    public Consultation createConsultation(Consultation consultation) {
        return consultationRepository.save(consultation);
    }

    @Override
    public Consultation getConsultation(Long id) {
        Optional<Consultation> consultation = consultationRepository.findById(id);

        if (!consultation.isPresent()) {
            throw new RuntimeException("Could not find consultation");
        }
        return consultation.get();
    }

    @Override
    public Consultation updateConsultation(Long id, Consultation updatedConsultation) {
        Optional<Consultation> consultationOptional = consultationRepository.findById(id);

        if (!consultationOptional.isPresent()) {
            throw new RuntimeException("Could not find consultation");
        }
        Consultation consultation = consultationOptional.get();
        consultation.setClient(updatedConsultation.getClient());
        consultation.setProfessional(updatedConsultation.getProfessional());
        consultation.setPayment(updatedConsultation.getPayment());
        consultation.setType(updatedConsultation.getType());
        consultation.setDate(updatedConsultation.getDate());
        consultation.setComments(updatedConsultation.getComments());

        return consultationRepository.save(consultation);
    }


}
