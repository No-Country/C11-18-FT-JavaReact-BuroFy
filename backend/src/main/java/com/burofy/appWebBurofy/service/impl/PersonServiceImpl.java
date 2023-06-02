package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.entity.Person;
import com.burofy.appWebBurofy.entity.Professional;
import com.burofy.appWebBurofy.repository.IClientRepository;
import com.burofy.appWebBurofy.repository.IPersonRepository;
import com.burofy.appWebBurofy.repository.IProfessionalRepository;
import com.burofy.appWebBurofy.service.IPersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PersonServiceImpl implements IPersonService {

    private final IPersonRepository personRepository;
    private final IClientRepository clientRepository;
    private final IProfessionalRepository professionalRepository;

    private static final String NOTFOUND = "Could not find person";
    private static final String EXISTE = "This person already exists";

    @Override
    public Person createPerson(Person person) {

        Optional<Person> personalOptional = personRepository.findById(person.getId());
        if (personalOptional.isPresent()) {
            throw new RuntimeException(EXISTE);
        }

        if (person.getRol().equals("client")) {
            Client client = new Client();
            client.setId(person.getId());
            client.setEmail(person.getEmail());
            client.setAvatar(person.getAvatar());
            client.setFullName(person.getFullName());
            ClientServiceImpl save = new ClientServiceImpl(clientRepository);
            save.createClient(client);
        } else if (person.getRol().equals("professional")) {
            Professional professional = new Professional();
            professional.setId(person.getId());
            professional.setEmail(person.getEmail());
            professional.setAvatar(person.getAvatar());
            professional.setFullName(person.getFullName());
            professional.setDocumentNumber(person.getDocumentNumber());
            professional.setLicense(person.getLicense());
            ProfessionalServiceImpl save = new ProfessionalServiceImpl(professionalRepository);
            save.createProfessional(professional);
        }

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
