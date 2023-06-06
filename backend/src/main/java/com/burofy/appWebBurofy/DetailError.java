package com.burofy.appWebBurofy;

import lombok.Getter;
import lombok.Setter;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Detail Error - Utility
 *
 *  Organiza class  funciones y métodos útiles y genéricos
 *
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

@Getter
@Setter
public class DetailError {
    private String name;
    private String message;

    public DetailError(Exception e){
        this.name = e.getClass().getName();
        this.message = e.getMessage();
    }
}
