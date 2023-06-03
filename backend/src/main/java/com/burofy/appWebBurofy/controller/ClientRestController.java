package com.burofy.appWebBurofy.controller;

import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.service.IClientService;
import com.burofy.appWebBurofy.utility.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ClientRestController{

    private final IClientService clientService;

    @ApiIgnore // no se usa, para crear a un cliente/un professional usamos create/person
    @PostMapping(path = "/create/client")
    public ResponseEntity<Response> createClient(@RequestBody Client client) {
        clientService.createClient(client);
        return new  ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(path = "/getClient/{id}")
    public ResponseEntity<Client> getClient(@PathVariable String id) {
        Client client = clientService.getClient(id);
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


}
