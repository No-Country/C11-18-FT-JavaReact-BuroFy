package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.entity.Client;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *
 *  I Client Service
 *
 *  Implementa el objeto CRUD del  Client Service IMPL
 *  manipular el objeto del dominio
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

public interface IClientService {
    Client createClient(Client client);
    Client getClient(String id);
    Client updateClient(String id, Client updatedClient);
    Client deleteClient(String id);
}
