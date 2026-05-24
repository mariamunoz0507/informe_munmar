import React from 'react'
import './App.css'

function App() {
  return (
    <main className="contenedor-principal">
      {/* Tarjeta de Portada */}
      <div className="tarjeta-portada">
        
        <span className="subtitulo-evaluacion">
          Evaluación Sumativa N°2
        </span>
        
        <h1 className="titulo-principal">
          Análisis Legal de Ciberseguridad
        </h1>
        
        <p className="descripcion">
          Estudio de caso de incidentes globales bajo el prisma de la legislación informática chilena.
        </p>
        
        <div className="linea-decorativa"></div>
        
        {/* Detalles de Entrega Académica */}
        <div className="cuadrante-informacion">
          <div className="bloque-info">
            <p className="etiqueta">Asignatura</p>
            <p className="valor">Fundamentos de Seguridad de la Información</p>
          </div>
          
          <div className="bloque-info">
            <p className="etiqueta">Institución</p>
            <p className="valor">INACAP</p>
          </div>
          
          <div className="bloque-info completo">
            <p className="etiqueta">Documentación Adjunta</p>
            <p className="valor destacado">
              8 Módulos de análisis disponibles en carpeta 'docs_munmar/'
            </p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="pie-pagina">
        <p>© 2026 - Informe Técnico de Ciberseguridad · Analista Programador</p>
      </footer>
    </main>
  )
}

export default App