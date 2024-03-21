package com.controle.gastos.repository;

import com.controle.gastos.model.GastosEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GastoRepository extends JpaRepository<GastosEntity, Integer> {


}
