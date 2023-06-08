package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.entity.Consultation;
import com.burofy.appWebBurofy.entity.Payment;
import com.burofy.appWebBurofy.entity.Professional;
import com.burofy.appWebBurofy.repository.IConsultationRepository;
import com.burofy.appWebBurofy.repository.IProfessionalRepository;
import com.burofy.appWebBurofy.service.IConsultationService;
import com.burofy.appWebBurofy.service.IProfessionalService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.*;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProfessionalServiceImplTest {
    private IProfessionalService professionalService;

    @Mock
    private IProfessionalRepository professionalRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        professionalService = new ProfessionalServiceImpl(professionalRepository);
    }

    @Test
    void testCreateProfessional() {

        // Arrange

        Professional professional = new Professional("1L","lili@gmail.com","urlAvatar","Jacinto Perez",
                LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","1223","Derecho penal","png", "50000",
                "Tengo experiencia en ..", "Abogado especialista en derecho penal", true,
                true,true,"50");

        when(professionalRepository.save(professional)).thenReturn(professional);

        // Act
        Professional professional1 = professionalService.createProfessional(professional);

        // Assert
        Assertions.assertEquals(professional, professional1);
    }

    @Test
    void testGetProfessional() {
        // Arrange
        String professionalId = "1L";

        Professional professional = new Professional("1L","lili@gmail.com","urlAvatar","Jacinto Perez",
                LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","1223","Derecho penal","png", "50000",
                "Tengo experiencia en ..", "Abogado especialista en derecho penal", true,
                true,true,"50");

        when(professionalRepository.findById(professionalId)).thenReturn(Optional.of(professional));

        // Act
        Professional professional1 = professionalService.getProfessional(professionalId);

        // Assert
        Assertions.assertEquals(professional, professional1);
    }

    @Test
    void testUpdateProfessional() {
        // Arrange
        String professionalId = "id";
        Professional professional = new Professional("1L","lili@gmail.com","urlAvatar","Jacinto Perez",
                LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","1223","Derecho penal","png", "50000",
                "Tengo experiencia en ..", "Abogado especialista en derecho penal", true,
                true,true,"50");


        when(professionalRepository.findById(professionalId)).thenReturn(Optional.of(professional));
        when(professionalRepository.save(professional)).thenReturn(professional);

        // Act
        Professional updated = professionalService.updateProfessional(professionalId, professional);

        // Assert
        Assertions.assertEquals(professional, updated);
        Assertions.assertEquals(professional.getExperience(), professional.getExperience());
        // Add more assertions as needed
    }

    @Test
    void testDeleteConsultation() {
        // Arrange
        String professionalId = "id";
        Professional professional = new Professional();


        when(professionalRepository.findById(professionalId)).thenReturn(Optional.of(professional));
        when(professionalRepository.save(professional)).thenReturn(professional);

        // Act
        Professional deletedProfessional = professionalService.deleteProfessional(professionalId);

        // Assert
        Assertions.assertEquals(professional, deletedProfessional);

    }

}