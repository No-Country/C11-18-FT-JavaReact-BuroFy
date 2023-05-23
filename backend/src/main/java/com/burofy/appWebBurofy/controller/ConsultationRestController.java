package com.burofy.appWebBurofy.controller;

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
}
