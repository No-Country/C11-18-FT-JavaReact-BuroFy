package com.burofy.appWebBurofy.repository;

import com.burofy.appWebBurofy.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IPersonRepository extends JpaRepository<Person, String> {

    Optional<Person> findById(String id);

}
