package com.burofy.appWebBurofy.dto;

import lombok.*;


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
    private String experience;
    private String price;
    private String rating;



}
