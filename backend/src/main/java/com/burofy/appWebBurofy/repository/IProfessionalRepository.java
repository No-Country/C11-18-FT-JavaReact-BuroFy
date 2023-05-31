package com.burofy.appWebBurofy.repository;


import com.burofy.appWebBurofy.entity.Professional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IProfessionalRepository extends JpaRepository<Professional, Long> {
    List<Professional> allProfessionals(int page, int pageSize);
}

