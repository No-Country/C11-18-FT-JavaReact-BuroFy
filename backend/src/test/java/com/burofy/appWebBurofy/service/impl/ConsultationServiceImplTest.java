package com.burofy.appWebBurofy.service.impl;

import com.burofy.appWebBurofy.dto.ConsultationClientDTO;
import com.burofy.appWebBurofy.dto.ConsultationDTO;
import com.burofy.appWebBurofy.dto.ConsultationProfessionalDTO;
import com.burofy.appWebBurofy.entity.Client;
import com.burofy.appWebBurofy.entity.Consultation;
import com.burofy.appWebBurofy.entity.Payment;
import com.burofy.appWebBurofy.entity.Professional;
import com.burofy.appWebBurofy.repository.IConsultationRepository;
import com.burofy.appWebBurofy.service.IConsultationService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ConsultationServiceImplTest {

    private IConsultationService consultationService;

    @Mock
    private IConsultationRepository consultationRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        consultationService = new ConsultationServiceImpl(consultationRepository);
    }

    @Test
    void testCreateConsultation() {

        // Arrange
        Client client = new Client("1L","lili@gmail.com","urlAvatar","Lili Gallego"
                , LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","Ing de Alimentos",true);
        Professional professional = new Professional("1L","lili@gmail.com","urlAvatar","Jacinto Perez",
                LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","1223","Derecho penal","png", "50000",
                "Tengo experiencia en ..", "Abogado especialista en derecho penal", true,
                true,true,"50");
        Payment payment = new Payment(1L, "Efectivo",true, 50000f );

       Date localDate = new Date();
        Consultation consultation = new Consultation(1L,client,professional, payment, "remoto", "true",
                localDate , "Muy buena consulta" );
        // Set the necessary properties of the client
        //LocalDate.of(year,month,day)
        when(consultationRepository.save(consultation)).thenReturn(consultation);

        // Act
        Consultation consultation1 = consultationService.createConsultation(consultation);

        // Assert
        Assertions.assertEquals(consultation, consultation1);
    }

    @Test
    void testGetConsultation() {
        // Arrange
        Long consultaionId = 1L;
        // Arrange
        Client client = new Client("1L","lili@gmail.com","urlAvatar","Lili Gallego"
                , LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","Ing de Alimentos",true);
        Professional professional = new Professional("1L","lili@gmail.com","urlAvatar","Jacinto Perez",
                LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","1223","Derecho penal","png", "50000",
                "Tengo experiencia en ..", "Abogado especialista en derecho penal", true,
                true,true,"50");
        Payment payment = new Payment(1L, "Efectivo",true, 50000f );

        Date localDate = new Date();
        Consultation consultation = new Consultation(1L,client,professional, payment, "remoto", "true",
                localDate , "Muy buena consulta" );

        when(consultationRepository.findById(consultaionId)).thenReturn(Optional.of(consultation));

        // Act
        Consultation searchConsultation = consultationService.getConsultation(consultaionId);

        // Assert
        Assertions.assertEquals(consultation, searchConsultation);
    }

    @Test
    void testUpdateConsultation() {
        // Arrange
        Long consultaionId = 1L;
        // Arrange
        Client client = new Client("1L","lili@gmail.com","urlAvatar","Lili Gallego"
                , LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","Ing de Alimentos",true);
        Professional professional = new Professional("1L","lili@gmail.com","urlAvatar","Jacinto Perez",
                LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","1223","Derecho penal","png", "50000",
                "Tengo experiencia en ..", "Abogado especialista en derecho penal", true,
                true,true,"50");
        Payment payment = new Payment(1L, "Efectivo",true, 50000f );

        Date localDate = new Date();
        Consultation consultation = new Consultation(1L,client,professional, payment, "remoto", "true",
                localDate , "Muy buena consulta" );
        // Set the necessary properties of the updated client

        when(consultationRepository.findById(consultaionId)).thenReturn(Optional.of(consultation));
        when(consultationRepository.save(consultation)).thenReturn(consultation);

        // Act
        Consultation updated = consultationService.updateConsultation(consultaionId, consultation);

        // Assert
        Assertions.assertEquals(consultation, updated);
        Assertions.assertEquals(consultation.getClient(), consultation.getClient());
        // Add more assertions as needed
    }

    @Test
    void testDeleteConsultation() {
        // Arrange
        Long consultaionId = 1L;
        Consultation consultation = new Consultation();


        when(consultationRepository.findById(consultaionId)).thenReturn(Optional.of(consultation));
        when(consultationRepository.save(consultation)).thenReturn(consultation);

        // Act
        Consultation deletedConsultation = consultationService.deleteConsultation(consultaionId);

        // Assert
        Assertions.assertEquals(consultation, deletedConsultation);

    }

    @Test
    void testGetConsultationsByClientId() {
        // Arrange
        String clientId = "123";
        Client client = new Client("1L","lili@gmail.com","urlAvatar","Lili Gallego"
                , LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","Ing de Alimentos",true);
        Professional professional = new Professional("1L","lili@gmail.com","urlAvatar","Jacinto Perez",
                LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","1223","Derecho penal","png", "50000",
                "Tengo experiencia en ..", "Abogado especialista en derecho penal", true,
                true,true,"50");
        Payment payment = new Payment(1L, "Efectivo",true, 50000f );
        List<Consultation> consultations = new ArrayList<>();
        // Create sample consultations and add them to the list
        Consultation consultation1 = new Consultation();
        consultation1.setId(1L);
        consultation1.setClient(client);
        consultation1.setProfessional(professional);
        // Set other necessary fields in consultation1
        consultations.add(consultation1);

        Consultation consultation2 = new Consultation();
        consultation2.setId(2L);
        consultation2.setClient(client);
        consultation2.setProfessional(professional);
        // Set other necessary fields in consultation2
        consultations.add(consultation2);

        when(consultationRepository.getConsultationsByClientId(clientId)).thenReturn(consultations);

        // Act
        List<ConsultationClientDTO> result = consultationService.getConsultationsByClientId(clientId);

        // Assert
        verify(consultationRepository, times(1)).getConsultationsByClientId(clientId);
    }


    @Test
    void testGetConsultationsByProfessionalId() {
        // Arrange
        String clientId = "123";
        Client client = new Client("1L","lili@gmail.com","urlAvatar","Lili Gallego"
                , LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","Ing de Alimentos",true);
        Professional professional = new Professional("1L","lili@gmail.com","urlAvatar","Jacinto Perez",
                LocalDate.of(1995, 5,6), "1049940",
                "382884990","Ibague","1223","Derecho penal","png", "50000",
                "Tengo experiencia en ..", "Abogado especialista en derecho penal", true,
                true,true,"50");
        Payment payment = new Payment(1L, "Efectivo",true, 50000f );
        List<Consultation> consultations = new ArrayList<>();
        // Create sample consultations and add them to the list
        Consultation consultation1 = new Consultation();
        consultation1.setId(1L);
        consultation1.setClient(client);
        consultation1.setProfessional(professional);
        // Set other necessary fields in consultation1
        consultations.add(consultation1);

        Consultation consultation2 = new Consultation();
        consultation2.setId(2L);
        consultation2.setClient(client);
        consultation2.setProfessional(professional);
        // Set other necessary fields in consultation2
        consultations.add(consultation2);

        when(consultationRepository.getConsultationsByProfessionalId(professional.getId())).thenReturn(consultations);

        // Act
        List<ConsultationProfessionalDTO> result = consultationService.getConsultationsByProfessionalId(professional.getId());

        // Assert
        verify(consultationRepository, times(1)).getConsultationsByProfessionalId(professional.getId());
    }
}