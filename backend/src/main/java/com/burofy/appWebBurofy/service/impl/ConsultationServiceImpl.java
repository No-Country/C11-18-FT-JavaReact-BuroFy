package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.dto.ConsultationDTO;
import com.burofy.appWebBurofy.dto.ConsultationResponseDTO;
import com.burofy.appWebBurofy.entity.Consultation;
import com.burofy.appWebBurofy.repository.IConsultationRepository;
import com.burofy.appWebBurofy.service.IConsultationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ConsultationServiceImpl implements IConsultationService {

    private final IConsultationRepository consultationRepository;
    private static final String NOTFOUND = "Could not find consultation";

    @Override
    public Consultation createConsultation(Consultation consultation) {
        consultation.setState(true);
        return consultationRepository.save(consultation);
    }

    @Override
    public Consultation getConsultation(Long id) {
        Optional<Consultation> consultation = consultationRepository.findById(id);

        if (!consultation.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        return consultation.get();
    }

    @Override
    public Consultation updateConsultation(Long id, Consultation updatedConsultation) {
        Optional<Consultation> consultationOptional = consultationRepository.findById(id);

        if (!consultationOptional.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        Consultation consultation = consultationOptional.get();
        consultation.setClient(updatedConsultation.getClient());
        consultation.setProfessional(updatedConsultation.getProfessional());
        consultation.setPayment(updatedConsultation.getPayment());
        consultation.setType(updatedConsultation.getType());
        consultation.setDate(updatedConsultation.getDate());
        consultation.setComments(updatedConsultation.getComments());
        consultation.setState(updatedConsultation.getState());

        return consultationRepository.save(consultation);
    }

    @Override
    public Consultation deleteConsultation(Long id) {
        Optional<Consultation> consultationOptional = consultationRepository.findById(id);

        if (!consultationOptional.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        Consultation consultation = consultationOptional.get();
        consultation.setState(false);
        return consultationRepository.save(consultation);
    }
    @Override
    public ConsultationResponseDTO getConsultationsByClientId(Long clientId) {
        ConsultationResponseDTO consultationResponseDTO = new ConsultationResponseDTO();
        //consultationResponseDTO.setStatus(200);
        List<Consultation> consultations = (List<Consultation>) consultationRepository.getConsultationsByClientId(clientId);
        List<ConsultationDTO> consultationDTOS = new ArrayList<>();
        for (Consultation c: consultations) {
            ConsultationDTO cDto = ConsultationDTO.builder()
                    .id(c.getId())
                    .professional(c.getProfessional())
                    .payment(c.getPayment())
                    .type(c.getType())
                    .date(c.getDate())
                    .comments(c.getComments())
                    .state(c.getState()).build();
            consultationDTOS.add(cDto);
        }
        consultationResponseDTO.setConsultations(consultationDTOS);
        return consultationResponseDTO;
    }

    @Override
    public ConsultationResponseDTO getConsultationsByProfessionalId(Long professionalId) {
        ConsultationResponseDTO consultationResponseDTO = new ConsultationResponseDTO();
        //consultationResponseDTO.setStatus(200);
        List<Consultation> consultations = (List<Consultation>) consultationRepository.getConsultationsByProfessionalId(professionalId);
        List<ConsultationDTO> consultationDTOS = new ArrayList<>();
        for (Consultation c: consultations) {
            ConsultationDTO cDto = ConsultationDTO.builder()
                    .id(c.getId())
                    .client(c.getClient())
                    .payment(c.getPayment())
                    .type(c.getType())
                    .date(c.getDate())
                    .comments(c.getComments())
                    .state(c.getState()).build();
            consultationDTOS.add(cDto);
        }
        consultationResponseDTO.setConsultations(consultationDTOS);
        return consultationResponseDTO;
    }

}
