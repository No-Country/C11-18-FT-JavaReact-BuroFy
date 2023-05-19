package com.burofy.appWebBurofy.repository;

import com.burofy.appWebBurofy.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClientRepository extends JpaRepository<Client, Long> {

}
