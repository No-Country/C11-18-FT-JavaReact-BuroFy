package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.dto.ConsultationDTO;
import com.burofy.appWebBurofy.dto.ConsultationResponseDTO;
import com.burofy.appWebBurofy.dto.ProfessionalDTO;
import com.burofy.appWebBurofy.entity.Consultation;
import com.burofy.appWebBurofy.entity.Professional;
import com.burofy.appWebBurofy.repository.IProfessionalRepository;
import com.burofy.appWebBurofy.service.IProfessionalService;
import com.burofy.appWebBurofy.utility.Pagination;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
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
    public Professional getProfessional(String id) {
        Optional<Professional> professional = professionalRepository.findById(id);

        if (!professional.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        return professional.get();
    }

    @Override
    public List<ProfessionalDTO> allProfessionals(int page, int pageSize) {

        ProfessionalDTO professionalDTO = new ProfessionalDTO();

        List<Professional> professionals = professionalRepository.findAll();
        List<ProfessionalDTO> professionalDTOS = new ArrayList<>();
        for (Professional c: professionals) {
            ProfessionalDTO cDto = ProfessionalDTO.builder()
                    .id(c.getId())
                    .avatar(c.getAvatar())
                    .fullName(c.getFullName())
                    .location(c.getLocation())
                    .experience(c.getExperience())
                    .price(c.getPrice())
                    .rating(c.getRating()).build();
            professionalDTOS.add(cDto);
        }

        professionalDTOS.sort(Comparator.comparing(ProfessionalDTO::getFullName));
        return  Pagination.paginate(professionalDTOS, pageSize, page);

    }

    @Override
    public Professional updateProfessional(String id, Professional updatedProfessional) {
        Optional<Professional> professionalOptional = professionalRepository.findById(id);

        if (!professionalOptional.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        Professional professional = professionalOptional.get();
        professional.setFullName(updatedProfessional.getFullName());
        professional.setDocumentNumber(updatedProfessional.getDocumentNumber());
        professional.setPhone(updatedProfessional.getPhone());
        professional.setLocation(updatedProfessional.getLocation());
        professional.setEmail(updatedProfessional.getEmail());
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
    public Professional deleteProfessional(String id) {
        Optional<Professional> professionalOptional = professionalRepository.findById(id);

        if (!professionalOptional.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        Professional professional = professionalOptional.get();
        professional.setState(false);
        return professionalRepository.save(professional);
    }

    @Override
    public List<Professional> professionalsByLocation(int page, int pageSize, String location) {
        List<Professional> professionals = professionalRepository.findByLocation(location);
        professionals.sort(Comparator.comparing(Professional::getFullName));
        return  Pagination.paginate(professionals, pageSize, page);
    }

}
