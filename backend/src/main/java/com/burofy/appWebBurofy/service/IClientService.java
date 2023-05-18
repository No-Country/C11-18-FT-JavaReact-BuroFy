package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.dto.client.ClientRequestDto;
import com.burofy.appWebBurofy.dto.client.ClientResponseDto;
import com.burofy.appWebBurofy.entity.Client;

import java.util.Optional;

public interface IClientService {
    void saveUserClient(ClientRequestDto clientRequestDto);

    Optional<Client> findByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByDocumentNumber(String documentNumber);

}
