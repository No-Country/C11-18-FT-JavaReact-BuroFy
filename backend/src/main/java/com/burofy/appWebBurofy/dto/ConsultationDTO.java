package com.burofy.appWebBurofy.dto;

import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.entity.Payment;
import com.burofy.appWebBurofy.entity.Professional;
import lombok.*;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class ConsultationDTO {
    private Long id;
    private Client client;
    private Professional professional;
    private Payment payment;
    private String type;
    private Date date;
    private String comments;
    private Boolean state;
}
