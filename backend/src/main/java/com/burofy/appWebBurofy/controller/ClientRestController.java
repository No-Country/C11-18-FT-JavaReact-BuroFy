package com.burofy.appWebBurofy.controller;

<<<<<<< HEAD


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client")
public class ClientRestController {


import com.burofy.appWebBurofy.Constants;
import com.burofy.appWebBurofy.dto.client.ClientRequestDto;
import com.burofy.appWebBurofy.dto.client.ClientResponseDto;
=======
>>>>>>> edac517b9f74ba97203f36dfd1bc94eae2461221
import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.service.IClientService;
import com.burofy.appWebBurofy.utility.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@Slf4j
public class ClientRestController{

    private final IClientService clientService;

    @PostMapping(path = "/create/client")
    public ResponseEntity<Response> createClient(@RequestBody Client client) {
        clientService.createClient(client)  ;
        return new  ResponseEntity<>(HttpStatus.CREATED);
    }


}
