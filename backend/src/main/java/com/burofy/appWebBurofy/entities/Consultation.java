package com.burofy.appWebBurofy.entities;

@Entity
@Table(name = "consultation")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Client client;
    private Professional professional;
    private Payment payment;
    private String  type;
    private LocalDate date;
    private String comments;

}
