package com.burofy.appWebBurofy.service;


import com.burofy.appWebBurofy.entity.Client;

public interface IClientService {
    Client createClient(Client client);
    Client getClient(Long id);
    Client updateClient(Long id, Client updatedClient);
}
