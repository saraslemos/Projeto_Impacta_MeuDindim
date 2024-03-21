package com.controle.gastos.controller;

import com.controle.gastos.model.PresidenteTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/presidente")
public class PresidentesTesteController {

    @GetMapping
    public List<PresidenteTO> get(){
        PresidenteTO to = PresidenteTO.builder().nome("Lula").anoRegime(2014).build();
        PresidenteTO to2 = PresidenteTO.builder().nome("Bolsonaro").anoRegime(2018).build();
        PresidenteTO to3= PresidenteTO.builder().nome("Lula").anoRegime(2022).build();

        List<PresidenteTO> lista = List.of(to,to2,to3);

        return lista;
    }

    @PostMapping
    public void post(@RequestBody PresidenteTO to){
        log.info("Chamou serviço cadastro");
        log.info(to.toString());
    }
}
