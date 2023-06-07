package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.entity.Person;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *
 *  I Person Service
 *
 *  Implementa el objeto CRUD del Person Service IMPL
 *  manipular el objeto del dominio
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

public interface IPersonService {
    Person createPerson(Person person);

    Person getPerson(String id);
}
