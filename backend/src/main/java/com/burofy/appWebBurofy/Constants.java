package com.burofy.appWebBurofy;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Constans Utility
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

public class Constants {

    private Constants() {
        throw new IllegalStateException("Utility class");
    }

    public static final String RESPONSE_MESSAGE_KEY = "message";
    public static final String USER_CREATED_MESSAGE = "User created successfully";
    public static final String MAIL_ALREADY_EXISTS_MESSAGE = "A user with that mail already exists";
}
