package com.burofy.appWebBurofy.mapper;

import com.burofy.appWebBurofy.dto.client.ClientResponseDto;
import com.burofy.appWebBurofy.entity.Client;

import java.util.List;

public interface IClientResponseMapper {

    List<ClientResponseDto> toResponseList(List<Client> clientList);

}
