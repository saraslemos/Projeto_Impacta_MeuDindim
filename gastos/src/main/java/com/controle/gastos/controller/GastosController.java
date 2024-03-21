package com.controle.gastos.controller;

import com.controle.gastos.model.GastosEntity;
import com.controle.gastos.repository.GastoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/gastos")
public class GastosController {

    @Autowired
    private GastoRepository gastoRepository;

    @GetMapping
    public List<GastosEntity> buscarGastos(){
        List<GastosEntity> lista = gastoRepository.findAll();
        return lista;
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public GastosEntity adicionar(@RequestBody GastosEntity gastos) {
        return gastoRepository.save(gastos);
    }

}
