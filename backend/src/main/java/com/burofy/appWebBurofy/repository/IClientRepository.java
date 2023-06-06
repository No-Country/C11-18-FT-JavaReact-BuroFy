package com.burofy.appWebBurofy.repository;

import com.burofy.appWebBurofy.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  I Client Repository
 *  Abstracción de la lógica de Negocio Client, para crear el objeto CRUD
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

public interface IClientRepository extends JpaRepository<Client, String> {

    Optional<Client> findById(String id);

}
