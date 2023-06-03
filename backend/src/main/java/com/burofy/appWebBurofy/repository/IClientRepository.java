package com.burofy.appWebBurofy.repository;

import com.burofy.appWebBurofy.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IClientRepository extends JpaRepository<Client, Long> {

    Optional<Client> findById(String id);

}
