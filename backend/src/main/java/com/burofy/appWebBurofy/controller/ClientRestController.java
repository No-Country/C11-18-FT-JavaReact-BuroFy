package com.burofy.appWebBurofy.controller;

import com.burofy.appWebBurofy.dto.ClientDTO;
import com.burofy.appWebBurofy.dto.ProfessionalDTO;
import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.service.IClientService;
import com.burofy.appWebBurofy.utility.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Client Rest Controller
 *  Crea y Recibe las interacciones del Cliente -usuario-
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */


@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin
public class ClientRestController{

    private final IClientService clientService;

    @ApiIgnore // no se usa, para crear a un cliente/un professional usamos /create/person
    @PostMapping(path = "/create/client")
    public ResponseEntity<Response> createClient(@RequestBody Client client) {
        clientService.createClient(client);
        return new  ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(path = "/getClient/{id}")
    public ResponseEntity<ClientDTO> getClient(@PathVariable String id) {
        ClientDTO client = clientService.getClient(id);
        if (client != null) {
            return ResponseEntity.ok(client);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping(path = "/update/client/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable String id,@RequestBody Client updatedClient) {
        clientService.updateClient(id,updatedClient);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping(path = "/delete/client/{id}")
    public ResponseEntity<Client> deleteClient(@PathVariable String id) {
        clientService.deleteClient(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "/allClients/{page}/{size}")
    public ResponseEntity<List<ClientDTO>> allClients(@PathVariable int page, @PathVariable int size) {
        List<ClientDTO> clientDTOS = clientService.allClients(page,size);
        if (!clientDTOS.isEmpty()) {
            return ResponseEntity.ok(clientDTOS);
        } else {
            return ResponseEntity.ok(null);
        }
    }

}
