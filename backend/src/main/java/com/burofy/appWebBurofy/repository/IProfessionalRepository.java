package com.burofy.appWebBurofy.repository;


import com.burofy.appWebBurofy.entity.Professional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IProfessionalRepository extends JpaRepository<Professional, Long> {
}

