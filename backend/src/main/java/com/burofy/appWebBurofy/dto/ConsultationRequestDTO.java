package com.burofy.appWebBurofy.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ConsultationRequestDTO {

    private String idClient;
    private String idProfessional;
    private String type;
    private String comments;
}
