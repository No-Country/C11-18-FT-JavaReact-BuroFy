package com.burofy.appWebBurofy.controller;

import com.burofy.appWebBurofy.Constants;
import com.burofy.appWebBurofy.dto.client.ClientRequestDto;
import com.burofy.appWebBurofy.dto.client.ClientResponseDto;
import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.handler.ResponseBuilder;
import com.burofy.appWebBurofy.service.IClientService;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

import static com.burofy.appWebBurofy.handler.ResponseBuilder.responseBuilder;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class ClientRestController{

    private IClientService iClientService;
    private ResponseBuilder responseBuilder;
    @Operation(summary = "Add a new client",
            responses = {
                    @ApiResponse(responseCode = "201", description = "Owner created",
                            content = @Content(mediaType = "application/json", schema = @Schema(ref = "#/components/schemas/Map"))),
                    @ApiResponse(responseCode = "409", description = "Client already exists",
                            content = @Content(mediaType = "application/json", schema = @Schema(ref = "#/components/schemas/Error"))),
                    @ApiResponse(responseCode = "403", description = "Role not allowed for user creation",
                            content = @Content(mediaType = "application/json", schema = @Schema(ref = "#/components/schemas/Error")))})
    @PostMapping("/create/client")
    public ResponseEntity<Map<String, String>> register(@RequestBody ClientRequestDto dto){
        iClientService.saveUserClient(dto);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Collections.singletonMap(Constants.RESPONSE_MESSAGE_KEY, Constants.USER_CREATED_MESSAGE));
    }


}
