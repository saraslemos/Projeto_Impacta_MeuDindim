package com.controle.gastos.repository;

import com.controle.gastos.model.GastosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GastoRepository extends JpaRepository<GastosEntity, Integer> {

    @Query(value = """
        SELECT
            g
        FROM
            GastosEntity g
        WHERE
            current_date BETWEEN g.dataInicio AND g.dataFim
            
            """, nativeQuery = false)
    List<GastosEntity> findGastosByDataVigente();

}
