package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.dto.ClientDTO;
import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.repository.IClientRepository;
import com.burofy.appWebBurofy.service.IClientService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
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
        Client client = new Client("1L","lili@gmail.com","urlAvatar","Lili Gallego"
                , LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","Ing de Alimentos",true);
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
        String clientId = "1L";
        Client client = new Client("1L","lili@gmail.com","urlAvatar","Lili Gallego"
                , LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","Ing de Alimentos",true);

        ClientDTO client2 = new ClientDTO("1L","urlAvatar","Lili Gallego","Ibague");
        // Set the necessary properties of the client

        Mockito.when(clientRepository.findById(clientId)).thenReturn(Optional.of(client));

        // Act
        ClientDTO retrievedClient = clientService.getClient(client2.getId());

        // Assert
        Assertions.assertEquals(client2.getId(), retrievedClient.getId());
        // Add more assertions as needed
    }

    @Test
    void testUpdateClient() {
        // Arrange
        String clientId = "1L";
        Client client = new Client("1L","lili@gmail.com","urlAvatar","Lili Gallego"
                , LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","Ing de Alimentos",true);

        // Set the necessary properties of the existing client

        Client updatedClient = new Client("1L","lili@gmail.com","urlAvatar","Lili Gallego"
                , LocalDate.of(1995, 5,16), "10499409",
                "382884990","Ibague","Ing de Alimentos",true);
        // Set the necessary properties of the updated client

        Mockito.when(clientRepository.findById(clientId)).thenReturn(Optional.of(client));
        Mockito.when(clientRepository.save(client)).thenReturn(client);

        // Act
        Client updated = clientService.updateClient(clientId, updatedClient);

        // Assert
        Assertions.assertEquals(client, updated);
        Assertions.assertEquals(updatedClient.getFullName(), client.getFullName());
        // Add more assertions as needed
    }

    @Test
    void testDeleteClient() {
        // Arrange
        String clientId = "1L";
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

