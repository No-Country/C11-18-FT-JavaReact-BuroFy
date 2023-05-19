package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.dto.client.ClientRequestDto;
import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.exception.MailAlreadyExistsException;
import com.burofy.appWebBurofy.mapper.IClientRequestMapper;
import com.burofy.appWebBurofy.repository.IClientRepository;
import com.burofy.appWebBurofy.service.IClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements IClientService {


    private final  IClientRepository clientRepository;

    private  final IClientRequestMapper iClientRequestMapper;


    @Override
    public void saveUserClient(ClientRequestDto clientRequestDto) {

       clientRepository.save(iClientRequestMapper.toClient(clientRequestDto));

    }

    @Override
    public Optional<Client> findByEmail(String email) {
        return Optional.ofNullable(clientRepository.findByEmail(email)
                .orElseThrow(() -> new MailAlreadyExistsException("A user with that mail already exists")));
    }

    @Override
    public boolean existsByEmail(String email) {
        return clientRepository.existsByEmail(email);
    }

    @Override
    public boolean existsByDocumentNumber(String documentNumber) {
        return clientRepository.existsByDocumentNumber(documentNumber);
    }
}
