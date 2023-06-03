package com.burofy.appWebBurofy.service;


import com.burofy.appWebBurofy.entity.Client;

public interface IClientService {
    Client createClient(Client client);
    Client getClient(String id);
    Client updateClient(String id, Client updatedClient);
    Client deleteClient(String id);
}
