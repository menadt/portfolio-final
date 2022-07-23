package com.portfolio.backend.Service;

import java.util.List;

import com.portfolio.backend.Model.Experiencia;

public interface IExperienciaService {
    public void crearExperiencia(Experiencia experiencia);

    public void borrarExperiencia(Long idExperiencia);

    public List<Experiencia> listarExperiencias();
}
