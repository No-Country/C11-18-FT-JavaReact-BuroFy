package com.burofy.appWebBurofy.dto;

import lombok.*;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Professional DTO
 *  Class crea los datos  DTO para Professional DTO - resentación y persistencia
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
public class ProfessionalDTO  {

    private String id;
    private String avatar;
    private String fullName;
    private String location;
   // private String experience;
    private String price;
    private String rating;



}
