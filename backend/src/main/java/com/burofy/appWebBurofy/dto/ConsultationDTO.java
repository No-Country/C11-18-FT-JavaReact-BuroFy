package com.burofy.appWebBurofy.dto;

import com.burofy.appWebBurofy.entity.Payment;
import lombok.*;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class ConsultationDTO {
    private Long id;
    private ClientDTO client;
    private ProfessionalDTO professional;
    private Payment payment;
    private String type;
    private Date date;
    private String comments;
    private String status;
}
