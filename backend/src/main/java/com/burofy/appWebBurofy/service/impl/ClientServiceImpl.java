package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.dto.ClientDTO;
import com.burofy.appWebBurofy.dto.ProfessionalDTO;
import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.entity.Professional;
import com.burofy.appWebBurofy.repository.IClientRepository;
import com.burofy.appWebBurofy.service.IClientService;
import com.burofy.appWebBurofy.utility.Pagination;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
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
    public ClientDTO getClient(String id) {
        Optional<Client> client = clientRepository.findById(id);
        ClientDTO clientDTO = new ClientDTO();
        clientDTO.setId(id);
        clientDTO.setFullName(client.get().getFullName());
        clientDTO.setAvatar(client.get().getAvatar());
        clientDTO.setLocation(client.get().getLocation());

        if (!client.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        return clientDTO;
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


    @Override
    public List<ClientDTO> allClients(int page, int pageSize) {

        List<Client> clients = clientRepository.findAll();
        List<ClientDTO> clientDTOS = new ArrayList<>();
        for (Client c : clients) {
            ClientDTO cDto = ClientDTO.builder()
                    .id(c.getId())
                    .avatar(c.getAvatar())
                    .fullName(c.getFullName())
                    .location(c.getLocation())
                    .build();
            clientDTOS.add(cDto);
        }
        return clientDTOS;

    }
}
