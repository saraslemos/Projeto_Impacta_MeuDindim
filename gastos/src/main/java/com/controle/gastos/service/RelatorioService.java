package com.controle.gastos.service;

import com.controle.gastos.model.GastosEntity;
import com.controle.gastos.model.RelatorioDTO;
import com.controle.gastos.repository.GastoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class RelatorioService {

    @Autowired
    private GastoRepository gastoRepository;

    public RelatorioDTO gerarRelatorio(){

        RelatorioDTO relatorio = new RelatorioDTO();
        List<GastosEntity> listaGastos = gastoRepository.findGastosByDataVigente();

        Double soma = Double.valueOf(0);

        for(GastosEntity gasto : listaGastos){
            soma = soma + gasto.getValor();
        }

        relatorio.setSomatorioDeGastos(soma);
        relatorio.setQuantidadeDeGastos(listaGastos.size());

        return relatorio;
    }
}
