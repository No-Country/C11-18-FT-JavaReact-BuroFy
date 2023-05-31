package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.repository.IClientRepository;
import com.burofy.appWebBurofy.service.IClientService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;
import java.util.Optional;

class ClientServiceImplTest {

    private IClientService clientService;

    @Mock
    private IClientRepository clientRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        clientService = new ClientServiceImpl(clientRepository);
    }

    @Test
    void testCreateClient() {
        // Arrange
        Client client = new Client(1L,"firabaseId","providedId","token","Lili",
                "Gallego","1049940", LocalDate.of(1995, 5,6), "3139393039",
                "Ibague","lili@gmail.com","123","Ing de Alimentos",true);
        // Set the necessary properties of the client
        //LocalDate.of(year,month,day)
        Mockito.when(clientRepository.save(client)).thenReturn(client);

        // Act
        Client createdClient = clientService.createClient(client);

        // Assert
        Assertions.assertEquals(client, createdClient);
        // Add more assertions as needed
    }

    @Test
    void testGetClient() {
        // Arrange
        Long clientId = 1L;
        Client client = new Client(1L,"firabaseId","providedId","token","Lili",
                "Gallego","1049940", LocalDate.of(1995, 5,6), "3139393039",
                "Ibague","lili@gmail.com","123","Ing de Alimentos",true);
        // Set the necessary properties of the client

        Mockito.when(clientRepository.findById(clientId)).thenReturn(Optional.of(client));

        // Act
        Client retrievedClient = clientService.getClient(clientId);

        // Assert
        Assertions.assertEquals(client, retrievedClient);
        // Add more assertions as needed
    }

    @Test
    void testUpdateClient() {
        // Arrange
        Long clientId = 1L;
        Client existingClient = new Client(1L,"firabaseId","providedId","token","Lili",
                "Gallego","1049940", LocalDate.of(1995, 5,6), "3139393039",
                "Ibague","lili@gmail.com","123","Ing de Alimentos",true);

        // Set the necessary properties of the existing client

        Client updatedClient = new Client(1L,"firabaseId","providedId","token","Lili",
                "Gallego","1049940", LocalDate.of(1995, 5,6), "3139393039",
                "Ibague","liliana@gmail.com","123","Ing de Alimentos",true);
        // Set the necessary properties of the updated client

        Mockito.when(clientRepository.findById(clientId)).thenReturn(Optional.of(existingClient));
        Mockito.when(clientRepository.save(existingClient)).thenReturn(existingClient);

        // Act
        Client updated = clientService.updateClient(clientId, updatedClient);

        // Assert
        Assertions.assertEquals(existingClient, updated);
        Assertions.assertEquals(updatedClient.getName(), existingClient.getName());
        // Add more assertions as needed
    }

    @Test
    void testDeleteClient() {
        // Arrange
        Long clientId = 1L;
        Client client = new Client();
        // Set the necessary properties of the client

        Mockito.when(clientRepository.findById(clientId)).thenReturn(Optional.of(client));
        Mockito.when(clientRepository.save(client)).thenReturn(client);

        // Act
        Client deletedClient = clientService.deleteClient(clientId);

        // Assert
        Assertions.assertEquals(client, deletedClient);
        Assertions.assertFalse(deletedClient.getState());
        // Add more assertions as needed
    }
}
