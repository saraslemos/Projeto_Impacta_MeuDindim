package com.controle.gastos.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PresidenteTO {
    String nome;
    int anoRegime;
}
