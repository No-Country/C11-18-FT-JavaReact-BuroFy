package com.burofy.appWebBurofy.repository;

import com.burofy.appWebBurofy.entity.Professional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  I Professional Repository
 *  Abstracción de la lógica de Negocio Professional, para crear el objeto CRUD
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

public interface IProfessionalRepository extends JpaRepository<Professional, String> {

    Optional<Professional> findById(String id);
    List<Professional> findByLocation(String location);

}

