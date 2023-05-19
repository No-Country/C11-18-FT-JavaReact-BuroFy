package com.burofy.appWebBurofy.dto.client;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientResponseDto {
    private Long id;

    private String name;
    private String lastName;
    private String documentNumber;
    private String phone;
    private String location;
    private String email;
    private String password;
    private String occupation ;
}
