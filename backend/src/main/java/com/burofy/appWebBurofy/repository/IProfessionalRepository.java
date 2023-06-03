package com.burofy.appWebBurofy.repository;

import com.burofy.appWebBurofy.entity.Professional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface IProfessionalRepository extends JpaRepository<Professional, Long> {

    Optional<Professional> findById(String id);

}

