package com.burofy.appWebBurofy.mapper;

import com.burofy.appWebBurofy.dto.client.ClientRequestDto;
import com.burofy.appWebBurofy.entity.Client;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface IClientRequestMapper {
    Client toClient(ClientRequestDto clientRequestDto);

}
