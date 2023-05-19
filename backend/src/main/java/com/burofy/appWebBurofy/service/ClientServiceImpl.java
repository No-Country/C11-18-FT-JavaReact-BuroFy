package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.repository.IClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ClientServiceImpl implements IClientService {

    private final IClientRepository clientRepository;
    @Override
    public Client createClient(Client client) {
        return clientRepository.save(client);
    }
}
