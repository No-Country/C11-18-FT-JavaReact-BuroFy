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
    private static final String NOTFOUND = "Could not find professional";
    @Override
    public Professional createProfessional(Professional professional) {
        professional.setState(true);
        return professionalRepository.save(professional);
    }

    @Override
    public Professional getProfessional(Long id) {
        Optional<Professional> professional = professionalRepository.findById(id);

        if (!professional.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        return professional.get();
    }

    @Override
    public Professional updateProfessional(Long id, Professional updatedProfessional) {
        Optional<Professional> professionalOptional = professionalRepository.findById(id);

        if (!professionalOptional.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        Professional professional = professionalOptional.get();
        professional.setName(updatedProfessional.getName());
        professional.setLastName(updatedProfessional.getLastName());
        professional.setDocumentNumber(updatedProfessional.getDocumentNumber());
        professional.setPhone(updatedProfessional.getPhone());
        professional.setLocation(updatedProfessional.getLocation());
        professional.setEmail(updatedProfessional.getEmail());
        professional.setPassword(updatedProfessional.getPassword());
        professional.setLicense(updatedProfessional.getLicense());
        professional.setExperience(updatedProfessional.getExperience());
        professional.setTraining(updatedProfessional.getTraining());
        professional.setDiploma(updatedProfessional.getDiploma());
        professional.setIsRemoteWork(updatedProfessional.getIsRemoteWork());
        professional.setIsFaceToFaceWork(updatedProfessional.getIsFaceToFaceWork());
        professional.setState(updatedProfessional.getState());

        return professionalRepository.save(professional);
    }
    @Override
    public Professional deleteProfessional(Long id) {
        Optional<Professional> professionalOptional = professionalRepository.findById(id);

        if (!professionalOptional.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        Professional professional = professionalOptional.get();
        professional.setState(false);
        return professionalRepository.save(professional);
    }

}
