package com.burofy.appWebBurofy.controller;

import com.burofy.appWebBurofy.dto.ConsultationClientDTO;
import com.burofy.appWebBurofy.dto.ConsultationProfessionalDTO;
import com.burofy.appWebBurofy.entity.Consultation;
import com.burofy.appWebBurofy.service.IConsultationService;
import com.burofy.appWebBurofy.utility.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.ArrayList;
import java.util.List;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Consultation Rest Controller
 *  Crea las consultas del Cliente hacia el profesional
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin
public class ConsultationRestController {

    private final IConsultationService consultationService;

    @PostMapping(path = "/create/consultation")
    public ResponseEntity<Response> createConsultation(@RequestBody Consultation consultation) {
        consultationService.createConsultation(consultation);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @ApiIgnore
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

    @ApiIgnore
    @PatchMapping(path = "/delete/consultation/{id}")
    public ResponseEntity<Consultation> deleteConsultation(@PathVariable Long id) {
        consultationService.deleteConsultation(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "/getConsultationsByClientId")
    public ResponseEntity<List<ConsultationClientDTO>> findConsultationsByClientId(@RequestHeader("id") String id) {
        List <ConsultationClientDTO> consultationDTOS = consultationService.getConsultationsByClientId(id);
        if (consultationDTOS.isEmpty()) {
            //List<ConsultationClientDTO> emptyList = new ArrayList<>();
            //return ResponseEntity.ok(emptyList);
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(consultationDTOS);
    }
    @GetMapping(path = "/getConsultationsByProfessionalId")
    public ResponseEntity<List<ConsultationProfessionalDTO>> getConsultationsByProfessionalId(@RequestHeader("id") String id) {
        List<ConsultationProfessionalDTO> consultationDTOS = consultationService.getConsultationsByProfessionalId(id);
        if (consultationDTOS.isEmpty()) {
            //List<ConsultationProfessionalDTO> emptyList = new ArrayList<>();
            //return ResponseEntity.ok(emptyList);
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(consultationDTOS);
    }

}
