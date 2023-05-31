package com.burofy.appWebBurofy.service;

import com.burofy.appWebBurofy.entity.Person;

public interface IPersonService {
    Person createPerson(Person person);

    Person getPerson(String id);
}
