package com.burofy.appWebBurofy;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Response Builder - Utility
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

public class ResponseBuilder {

    public static ResponseEntity<?> responseBuilder(HttpStatus httpStatus, String path, Object object){
        Map<String, Object> response = new HashMap<>();
        response.put("status", httpStatus);
        response.put("path", path);
        response.put((object instanceof DetailError) ? "error" : "response", object);

        return ResponseEntity.status(httpStatus).body(response);
    };

    public static ResponseEntity<?> responseBuilder(HttpStatus httpStatus, Object object){
        Map<String, Object> response = new HashMap<>();
        response.put("status", httpStatus);
        response.put((object instanceof DetailError) ? "error" : "response", object);

        return ResponseEntity.status(httpStatus).body(response);
    };
}
