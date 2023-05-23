package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.entity.Professional;
import com.burofy.appWebBurofy.repository.IProfessionalRepository;
import com.burofy.appWebBurofy.service.IProfessionalService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProfessionalServiceImpl implements IProfessionalService {

    private final IProfessionalRepository professionalRepository;

    @Override
    public Professional createProfessional(Professional professional) {
        return professionalRepository.save(professional);
    }

    @Override
    public Professional getProfessional(Long id) {
        Optional<Professional> professional = professionalRepository.findById(1L);

        if (!professional.isPresent()) {
            throw new RuntimeException("Could not find professional");
        }
        return professional.get();
    }

}
