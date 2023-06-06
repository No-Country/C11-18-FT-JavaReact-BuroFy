package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.dto.ClientDTO;
import com.burofy.appWebBurofy.dto.ConsultationDTO;
import com.burofy.appWebBurofy.dto.ProfessionalDTO;
import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.entity.Consultation;
import com.burofy.appWebBurofy.entity.Professional;
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
        consultation.setStatus("progreso");
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
        consultation.setStatus(updatedConsultation.getStatus());

        return consultationRepository.save(consultation);
    }

    @Override
    public Consultation deleteConsultation(Long id) {
        Optional<Consultation> consultationOptional = consultationRepository.findById(id);

        if (!consultationOptional.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        Consultation consultation = consultationOptional.get();
        consultation.setStatus("");
        return consultationRepository.save(consultation);
    }
    @Override
    public List<ConsultationDTO> getConsultationsByClientId(String clientId) {
        //ConsultationDTO consultationDTO = new ConsultationDTO();
        //consultationResponseDTO.setStatus(200);
        List<Consultation> consultations = (List<Consultation>) consultationRepository.getConsultationsByClientId(clientId);
        List<ConsultationDTO> consultationDTOS = new ArrayList<>();
        for (Consultation c: consultations) {
            Professional professional = c.getProfessional();
            ProfessionalDTO professionalDTO = ProfessionalDTO.builder()
                    .id(professional.getId())
                    .avatar(professional.getAvatar())
                    .fullName(professional.getFullName())
                    .location(professional.getLocation())
                    .experience(professional.getExperience())
                    .price(professional.getPrice())
                    .rating(professional.getRating())
                    .build();
            ConsultationDTO cDto = ConsultationDTO.builder()
                    .id(c.getId())
                    .professional(professionalDTO)
                    .payment(c.getPayment())
                    .type(c.getType())
                    .date(c.getDate())
                    .comments(c.getComments())
                    .status(c.getStatus())
                    .build();
            consultationDTOS.add(cDto);
        }
        //consultationResponseDTO.setConsultations(consultationDTOS);
        return consultationDTOS;
    }

    @Override
    public List<ConsultationDTO> getConsultationsByProfessionalId(String professionalId) {
        //ConsultationResponseDTO consultationResponseDTO = new ConsultationResponseDTO();
        //consultationResponseDTO.setStatus(200);
        List<Consultation> consultations = (List<Consultation>) consultationRepository.getConsultationsByProfessionalId(professionalId);
        List<ConsultationDTO> consultationDTOS = new ArrayList<>();
        for (Consultation c: consultations) {
            Client client = c.getClient();
            ClientDTO clientDTO = ClientDTO.builder()
                    .id(client.getId())
                    .avatar(client.getAvatar())
                    .fullName(client.getFullName())
                    .location(client.getLocation())
                    .build();
            ConsultationDTO cDto = ConsultationDTO.builder()
                    .id(c.getId())
                    .client(clientDTO)
                    .payment(c.getPayment())
                    .type(c.getType())
                    .date(c.getDate())
                    .comments(c.getComments())
                    .status(c.getStatus())
                    .build();
            consultationDTOS.add(cDto);
        }
        //consultationResponseDTO.setConsultations(consultationDTOS);
        return consultationDTOS;
    }

}
