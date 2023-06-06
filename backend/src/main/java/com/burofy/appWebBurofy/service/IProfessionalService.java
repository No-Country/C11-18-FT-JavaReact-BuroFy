package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.dto.ProfessionalDTO;
import com.burofy.appWebBurofy.entity.Professional;

import java.util.List;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *
 *  I Professional Service
 *
 *  Implementa el objeto CRUD del Professional Service IMPL
 *  manipular el objeto del dominio
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

public interface IProfessionalService {

    Professional createProfessional(Professional professional);

    Professional getProfessional(String id);
    List<ProfessionalDTO> allProfessionals(int page, int pageSize);

    Professional updateProfessional(String id, Professional updatedProfessional);

    Professional deleteProfessional(String id);
    List<Professional> professionalsByLocation(int page, int pageSize, String location);


}
