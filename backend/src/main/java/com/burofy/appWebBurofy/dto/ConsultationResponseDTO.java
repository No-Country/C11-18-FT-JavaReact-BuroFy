package com.burofy.appWebBurofy.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ConsultationResponseDTO {
    //private long status;
    private List<ConsultationDTO> consultations;
    //private String message;
}
