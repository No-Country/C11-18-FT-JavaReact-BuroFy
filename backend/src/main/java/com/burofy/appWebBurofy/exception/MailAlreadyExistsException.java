package com.burofy.appWebBurofy.exception;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  Mail Already Exist Exception
 *
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

public class MailAlreadyExistsException extends RuntimeException {
    public MailAlreadyExistsException(String message) {
        super(message);
    }
}
