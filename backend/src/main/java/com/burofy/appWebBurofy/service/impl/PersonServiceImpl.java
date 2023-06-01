package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.entity.Person;
import com.burofy.appWebBurofy.repository.IPersonRepository;
import com.burofy.appWebBurofy.service.IPersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PersonServiceImpl implements IPersonService {

    private final IPersonRepository personRepository;
    private static final String NOTFOUND = "Could not find person";

    @Override
    public Person createPerson(Person person) {
        return personRepository.save(person);
    }

    @Override
    public Person getPerson(String id) {
        Optional<Person> person = personRepository.findById(id);

        if (!person.isPresent()) {
            throw new RuntimeException(NOTFOUND);
        }
        return person.get();
    }
}
