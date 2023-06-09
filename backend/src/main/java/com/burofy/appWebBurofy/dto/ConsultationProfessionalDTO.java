package com.burofy.appWebBurofy.dto;

import com.burofy.appWebBurofy.entity.Payment;
import lombok.*;

import java.util.Date;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Consultation DTO
 *  Class crea los datos  DTO para Consulation Response DTO - resentación y persistencia
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class ConsultationProfessionalDTO {
    private Long id;
    private ClientDTO client;
    private Payment payment;
    private String type;
    private Date date;
    private String comments;
    private String status;
}
