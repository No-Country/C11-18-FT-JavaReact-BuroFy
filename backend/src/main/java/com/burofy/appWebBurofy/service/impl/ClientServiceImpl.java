package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.repository.IClientRepository;
import com.burofy.appWebBurofy.service.IClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Implementation - IMPL
 *  Client Service IMPL
 *
 *  Implementa el objeto CRUD del Repository Client
 *  manipular el objeto del dominio
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

@RequiredArgsConstructor
@Service
public class ClientServiceImpl implements IClientService {

    private final IClientRepository clientRepository;
    private static final String NOTFOUND = "Could not find client";
    @Override
    public Client createClient(Client client) {

        client.setState(true);
        return clientRepository.save(client);
    }

    @Override
    public Client getClient(String id) {
        Optional<Client> client = clientRepository.findById(id);

        if (!client.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        return client.get();
    }

    @Override
    public Client updateClient(String id, Client updatedClient) {
        Optional<Client> clientOptional = clientRepository.findById(id);

        if (!clientOptional.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        Client client = clientOptional.get();
        client.setFullName(updatedClient.getFullName());
        client.setDocumentNumber(updatedClient.getDocumentNumber());
        client.setPhone(updatedClient.getPhone());
        client.setLocation(updatedClient.getLocation());
        client.setEmail(updatedClient.getEmail());
        client.setOccupation(updatedClient.getOccupation());
        client.setState(updatedClient.getState());

        return clientRepository.save(client);
    }

    @Override
    public Client deleteClient(String id) {
        Optional<Client> clientOptional = clientRepository.findById(id);

        if (!clientOptional.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        Client client = clientOptional.get();
        client.setState(false);
        return clientRepository.save(client);
    }

}
