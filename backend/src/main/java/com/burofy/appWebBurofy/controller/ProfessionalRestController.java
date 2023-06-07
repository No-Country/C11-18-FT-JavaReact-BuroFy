package com.burofy.appWebBurofy.controller;

import com.burofy.appWebBurofy.dto.ProfessionalDTO;
import com.burofy.appWebBurofy.entity.Professional;
import com.burofy.appWebBurofy.service.IProfessionalService;
import com.burofy.appWebBurofy.utility.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Professional Rest Controller
 *  Crea y recibe la nueva instancia del Professional y sus interacciones
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
public class ProfessionalRestController  {

    private final IProfessionalService professionalService;

    @ApiIgnore // no se usa, para crear a un cliente/un professional usamos /create/person
    @PostMapping(path = "/create/professional")
    public ResponseEntity<Response> createProfessional(@RequestBody Professional professional) {
        professionalService.createProfessional(professional)  ;
        return new  ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(path = "/getProfessional/{id}")
    public ResponseEntity<Professional> getProfessional(@PathVariable String id) {
        Professional professional = professionalService.getProfessional(id);
        if (professional != null) {
            return ResponseEntity.ok(professional);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping(path = "/update/professional/{id}")
    public ResponseEntity<Professional> updateProfessional(@PathVariable String id, @RequestBody Professional updatedProfessional) {
        professionalService.updateProfessional(id,updatedProfessional);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping(path = "/delete/professional/{id}")
    public ResponseEntity<Professional> deleteProfessional(@PathVariable String id) {
        professionalService.deleteProfessional(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "/allProfessionals/{page}/{size}")
    public ResponseEntity<List<ProfessionalDTO>> allProfessionals(@PathVariable int page, @PathVariable int size) {
        List<ProfessionalDTO> professionalDTOS = professionalService.allProfessionals(page,size);
        if (!professionalDTOS.isEmpty()) {
            return ResponseEntity.ok(professionalDTOS);
        } else {
            return ResponseEntity.ok(null);
        }
    }

    @GetMapping(path = "/professionalsByLocation/{page}/{size}/{location}")
    public ResponseEntity<List<Professional>> professionalsByLocation(@PathVariable int page, @PathVariable int size, @PathVariable String location) {
        List<Professional> professionals = professionalService.professionalsByLocation(page,size,location);
        if (!professionals.isEmpty()) {
            return ResponseEntity.ok(professionals);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/professionals")
    public ResponseEntity<Map<String, Object>> getAllTutorials(
            @RequestParam(required = false) String experience,
            @RequestParam(required = false) String location,
            @RequestParam(required = false) Boolean isRemoteWork,
            @RequestParam(required = false) Boolean isFaceToFaceWork,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        try {
            List<Professional> professionals;
            Pageable paging = PageRequest.of(page, size);

            Page<Professional> pagePros;
            if (experience == null && location == null && isRemoteWork == null && isFaceToFaceWork == null)
                pagePros = professionalService.findProfessionals(paging);
            else
                pagePros = professionalService.findProfessionalsByFilters(experience, location, isRemoteWork, isFaceToFaceWork, paging);

            professionals = pagePros.getContent();

            Map<String, Object> response = new HashMap<>();
            response.put("professionals", professionals);
            response.put("totalItems", pagePros.getTotalElements());
            response.put("currentPage", pagePros.getNumber()+1);
            response.put("totalPages", pagePros.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
