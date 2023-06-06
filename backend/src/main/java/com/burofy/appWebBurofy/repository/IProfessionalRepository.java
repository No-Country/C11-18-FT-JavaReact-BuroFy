package com.burofy.appWebBurofy.repository;

import com.burofy.appWebBurofy.entity.Professional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;


public interface IProfessionalRepository extends JpaRepository<Professional, String> {

    Optional<Professional> findById(String id);
    List<Professional> findByLocation(String location);

    @Query("SELECT p FROM Professional p WHERE (:experience is null or p.experience = :experience) and (:location is null or p.location = :location) and (:isRemoteWork is null or p.isRemoteWork = :isRemoteWork) and (:isFaceToFaceWork is null or p.isFaceToFaceWork = :isFaceToFaceWork)")
    Page<Professional> findByExperienceAndLocationAndIsRemoteWorkAndIsFaceToFaceWork(@Param("experience") String experience,
                                                                                     @Param("location") String location,
                                                                                     @Param("isRemoteWork") Boolean isRemoteWork,
                                                                                     @Param("isFaceToFaceWork") Boolean isFaceToFaceWork,
                                                                                     Pageable pageable);

}

