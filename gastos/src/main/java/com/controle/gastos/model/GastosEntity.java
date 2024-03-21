package com.controle.gastos.model;


import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
@Table(name = "gastos")
public class GastosEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String descricao;

    @Column(name = "data_inicio")
    private LocalDate dataInicio;

    @Column(name = "data_fim")
    private LocalDate dataFim;

    private Double valor;
}
