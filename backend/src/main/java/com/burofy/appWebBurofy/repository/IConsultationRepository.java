package com.burofy.appWebBurofy.repository;

import com.burofy.appWebBurofy.entity.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

/**
 *
 *  BuroFy Proyecto
 *  para No Country
 *
 *  I Consultation Repository
 *  Abstracción de la lógica de Negocio Consultation, para crear el objeto CRUD
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */

public interface IConsultationRepository extends JpaRepository<Consultation, Long> {
    Collection<Consultation> getConsultationsByClientId(String clientId);
    Collection<Consultation> getConsultationsByProfessionalId(String professionalId);



}
