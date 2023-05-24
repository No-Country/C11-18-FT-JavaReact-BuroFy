package com.burofy.appWebBurofy.service;



import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.entity.Professional;

public interface IProfessionalService {

    Professional createProfessional(Professional professional);

    Professional getProfessional(Long id);

    Professional updateProfessional(Long id, Professional updatedProfessional);

    Professional deleteProfessional(Long id);

}
