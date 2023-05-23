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

    @Override
    public Client updateClient(Long id, Client updatedClient) {
        Optional<Client> clientOptional = clientRepository.findById(id);

        if (!clientOptional.isPresent()) {
            throw new RuntimeException("Could not find client");
        }
        Client client = clientOptional.get();
        client.setName(updatedClient.getName());
        client.setLastName(updatedClient.getLastName());
        client.setDocumentNumber(updatedClient.getDocumentNumber());
        client.setPhone(updatedClient.getPhone());
        client.setLocation(updatedClient.getLocation());
        client.setEmail(updatedClient.getEmail());
        client.setPassword(updatedClient.getPassword());
        client.setOccupation(updatedClient.getOccupation());

        return clientRepository.save(client);
    }

}
