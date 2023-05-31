package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.entity.Professional;

import java.util.List;

public interface IProfessionalService {

    Professional createProfessional(Professional professional);

    Professional getProfessional(Long id);
    List<Professional> allProfessionals(int page, int pageSize);

    Professional updateProfessional(Long id, Professional updatedProfessional);

    Professional deleteProfessional(Long id);

}
