package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.dto.ProfessionalDTO;
import com.burofy.appWebBurofy.entity.Professional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProfessionalService {

    Professional createProfessional(Professional professional);

    Professional getProfessional(String id);
    List<ProfessionalDTO> allProfessionals(int page, int pageSize);

    Professional updateProfessional(String id, Professional updatedProfessional);

    Professional deleteProfessional(String id);
    List<Professional> professionalsByLocation(int page, int pageSize, String location);

    Page<Professional> findProfessionals(Pageable paging);
    Page<Professional> findProfessionalsByFilters(String experience, String location, Boolean isRemoteWork, Boolean isFaceToFaceWork, Pageable paging);
}
