package com.burofy.appWebBurofy.Entidades;

import com.burofy.appWebBurofy.Entidades.Person;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Payment  {

    private Long id;
    private String type;
    private Boolean paid;
    private Float price;


}