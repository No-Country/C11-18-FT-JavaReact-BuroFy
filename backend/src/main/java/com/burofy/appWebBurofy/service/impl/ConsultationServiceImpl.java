package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.dto.*;
import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.entity.Consultation;
import com.burofy.appWebBurofy.entity.Professional;
import com.burofy.appWebBurofy.repository.IConsultationRepository;
import com.burofy.appWebBurofy.service.IConsultationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Implementation - IMPL
 *  Consultation Service IMPL
 *
 *  Implementa el objeto CRUD del Repository Consultation
 *  manipular el objeto del dominio
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

@Service
@RequiredArgsConstructor
public class ConsultationServiceImpl implements IConsultationService {

    private final IConsultationRepository consultationRepository;
    private static final String NOTFOUND = "Could not find consultation";

    @Override
    public Consultation createConsultation(Consultation consultation) {
        consultation.setStatus("progreso");
        Date date = new Date();
        consultation.setDate(date);
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
    public List<ConsultationClientDTO> getConsultationsByClientId(String clientId) {

        List<Consultation> consultations = (List<Consultation>) consultationRepository.getConsultationsByClientId(clientId);
        List<ConsultationClientDTO> consultationDTOS = new ArrayList<>();
        for (Consultation c: consultations) {
            Professional professional = c.getProfessional();
/*            ProfessionalDTO professionalDTO = ProfessionalDTO.builder()
                    .id(professional.getId())
                    .avatar(professional.getAvatar())
                    .fullName(professional.getFullName())
                    .location(professional.getLocation())

                    .price(professional.getPrice())
                    .rating(professional.getRating())
                    .build();*/
            ConsultationClientDTO cDto = ConsultationClientDTO.builder()
                    .id(c.getId())
                    .idProfessional(professional.getId())
                    .avatar(professional.getAvatar())
                    .fullName(professional.getFullName())
                    .location(professional.getLocation())
                    .experience(professional.getExperience())
                    .price(professional.getPrice())
                    .rating(professional.getRating())
                    .payment(c.getPayment())
                    .type(c.getType())
                    .date(c.getDate())
                    .comments(c.getComments())
                    .status(c.getStatus())
                    .build();
            consultationDTOS.add(cDto);

        }
        return consultationDTOS;
    }

    @Override
    public List<ConsultationProfessionalDTO> getConsultationsByProfessionalId(String professionalId) {

        List<Consultation> consultations = (List<Consultation>) consultationRepository.getConsultationsByProfessionalId(professionalId);
        List<ConsultationProfessionalDTO> consultationDTOS = new ArrayList<>();
        for (Consultation c: consultations) {

            Client client = c.getClient();
            ClientDTO clientDTO = ClientDTO.builder()
                    .id(client.getId())
                    .avatar(client.getAvatar())
                    .fullName(client.getFullName())
                    .location(client.getLocation())
                    .build();
            ConsultationProfessionalDTO cDto = ConsultationProfessionalDTO.builder()
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
        return consultationDTOS;
    }

}
