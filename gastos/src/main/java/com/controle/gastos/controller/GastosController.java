package com.controle.gastos.controller;

import com.controle.gastos.model.GastosEntity;
import com.controle.gastos.model.RelatorioDTO;
import com.controle.gastos.repository.GastoRepository;
import com.controle.gastos.service.RelatorioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.List;


@RestController
@RequestMapping("/gastos")
public class GastosController {

    @Autowired
    private GastoRepository gastoRepository;

    @Autowired
    private RelatorioService relatorioService;

    @GetMapping
    public List<GastosEntity> buscarGastos(){
        List<GastosEntity> lista = gastoRepository.findAll();
        return lista;
    }

    @GetMapping("/{id}")
    public ResponseEntity <GastosEntity> buscarPorId(@PathVariable int id){
        return gastoRepository.findById(id)
                .map(registro -> ResponseEntity.ok().body(registro))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public GastosEntity adicionar(@RequestBody GastosEntity gastos) {
        return gastoRepository.save(gastos);
    }

    @PutMapping("/{id}")
    public ResponseEntity <GastosEntity> atualizar(@PathVariable int id, @RequestBody GastosEntity gastos){
        return gastoRepository.findById(id)
                .map(registroEncontrado -> {
                    registroEncontrado.setDescricao(gastos.getDescricao());
                    registroEncontrado.setDataInicio(gastos.getDataInicio());
                    registroEncontrado.setDataFim(gastos.getDataFim());
                    registroEncontrado.setValor(gastos.getValor());
                    GastosEntity atualizado = gastoRepository.save(registroEncontrado);
                    return ResponseEntity.ok().body(registroEncontrado);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id){
        return gastoRepository.findById(id)
                .map(registroEncontrado -> {
                    gastoRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/gerar-relatorio")
    public RelatorioDTO gerarRelatorio(){
        return relatorioService.gerarRelatorio();
    }


}

