package com.burofy.appWebBurofy.dto;

import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class ClientDTO {

    private String id;
    private String avatar;
    private String fullName;
    private String location;

}
