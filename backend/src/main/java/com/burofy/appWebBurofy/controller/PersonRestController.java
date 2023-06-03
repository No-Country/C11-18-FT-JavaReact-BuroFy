package com.burofy.appWebBurofy.controller;

import com.burofy.appWebBurofy.entity.Person;
import com.burofy.appWebBurofy.service.IPersonService;
import com.burofy.appWebBurofy.utility.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

@RestController
@RequiredArgsConstructor
@Slf4j
public class PersonRestController {

    private final IPersonService personService;

    @ApiIgnore // no se usa, para crear a un cliente/un professional usamos create/person
    @PostMapping(path = "/create/person")
    public ResponseEntity<Response> createPerson(@RequestBody Person person) {
        if (person.getRol().equals("client") || person.getRol().equals("professional")) {
            personService.createPerson(person);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(path = "/getPerson/{id}")
    public ResponseEntity<Person> getPerson(@PathVariable String id) {
        Person person = personService.getPerson(id);
        if (person != null) {
            return ResponseEntity.ok(person);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
