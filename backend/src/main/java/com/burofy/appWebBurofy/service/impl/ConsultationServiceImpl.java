package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.entity.Consultation;
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

}
