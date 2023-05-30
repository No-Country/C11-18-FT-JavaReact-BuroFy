package com.burofy.appWebBurofy.controller;

import com.burofy.appWebBurofy.dto.ConsultationResponseDTO;
import com.burofy.appWebBurofy.entity.Consultation;
import com.burofy.appWebBurofy.service.IConsultationService;
import com.burofy.appWebBurofy.utility.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ConsultationRestController {

    private final IConsultationService consultationService;

    @PostMapping(path = "/create/consultation")
    public ResponseEntity<Response> createConsultation(@RequestBody Consultation consultation) {
        consultationService.createConsultation(consultation);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(path = "/getConsultation/{id}")
    public ResponseEntity<Consultation> getConsultation(@PathVariable Long id) {
        Consultation consultation = consultationService.getConsultation(id);
        if (consultation != null) {
            return ResponseEntity.ok(consultation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping(path = "/update/consultation/{id}")
    public ResponseEntity<Consultation> updateConsultation(@PathVariable Long id, @RequestBody Consultation updatedConsultation) {
        consultationService.updateConsultation(id,updatedConsultation);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping(path = "/delete/consultation/{id}")
    public ResponseEntity<Consultation> deleteConsultation(@PathVariable Long id) {
        consultationService.deleteConsultation(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "/getConsultationsByClientId")
    public ResponseEntity<ConsultationResponseDTO> findConsultationsByClientId(@RequestHeader("clientId") Long clientId) {
        ConsultationResponseDTO consultationResponseDTO = consultationService.getConsultationsByClientId(clientId);
        if (consultationResponseDTO.getConsultations().isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(consultationResponseDTO);
        }
        //return ResponseEntity.status(HttpStatus.valueOf((int)consultationResponseDTO.getStatus())).body(consultationResponseDTO);
    }
    @GetMapping(path = "/getConsultationsByProfessionalId")
    public ResponseEntity<ConsultationResponseDTO> getConsultationsByProfessionalId(@RequestHeader("professionalId") Long professionalId) {
        ConsultationResponseDTO consultationResponseDTO = consultationService.getConsultationsByProfessionalId(professionalId);
        if (consultationResponseDTO.getConsultations().isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(consultationResponseDTO);
        }
        //return ResponseEntity.status(HttpStatus.valueOf((int)consultationResponseDTO.getStatus())).body(consultationResponseDTO);
    }


}
