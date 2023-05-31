package com.burofy.appWebBurofy.controller;

import com.burofy.appWebBurofy.entity.Professional;
import com.burofy.appWebBurofy.service.IProfessionalService;
import com.burofy.appWebBurofy.utility.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ProfessionalRestController  {

    private final IProfessionalService professionalService;

    @PostMapping(path = "/create/professional")
    public ResponseEntity<Response> createProfessional(@RequestBody Professional professional) {
        professionalService.createProfessional(professional)  ;
        return new  ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(path = "/getProfessional/{id}")
    public ResponseEntity<Professional> getProfessional(@PathVariable Long id) {
        Professional professional = professionalService.getProfessional(id);
        if (professional != null) {
            return ResponseEntity.ok(professional);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping(path = "/update/professional/{id}")
    public ResponseEntity<Professional> updateProfessional(@PathVariable Long id, @RequestBody Professional updatedProfessional) {
        professionalService.updateProfessional(id,updatedProfessional);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping(path = "/delete/professional/{id}")
    public ResponseEntity<Professional> deleteProfessional(@PathVariable Long id) {
        professionalService.deleteProfessional(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "/allProfessionals/{page}/{size}")
    public ResponseEntity<List<Professional>> allProfessionals(@PathVariable int page, @PathVariable int size) {
        List<Professional> professionals = professionalService.allProfessionals(page,size);
        if (!professionals.isEmpty()) {
            return ResponseEntity.ok(professionals);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
