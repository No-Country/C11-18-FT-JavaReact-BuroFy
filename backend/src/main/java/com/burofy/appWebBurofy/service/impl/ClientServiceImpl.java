package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.repository.IClientRepository;
import com.burofy.appWebBurofy.service.IClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ClientServiceImpl implements IClientService {

    private final IClientRepository clientRepository;
    @Override
    public Client createClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Client getClient(Long id) {
        Optional<Client> client = clientRepository.findById(id);

        if (!client.isPresent()) {
            throw new RuntimeException("Could not find client");
        }
        return client.get();
    }

}
