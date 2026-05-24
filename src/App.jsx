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
        
        {/* Estado de la Documentación en docs_munmar/ */}
        <div className="estado-documentos">
          <h3>Progreso del Informe (.md)</h3>
         <ul className="lista-progreso">
            <li className="completado">🟢 Módulo 1: Resumen Ejecutivo (Sony 2014)</li>
            <li className="completado">🟢 Módulo 2: Marco Normativo Aplicable</li>
            <li className="completado">🟢 Módulo 3: Tipificación de Delitos (Ley 21.459)</li>
            <li className="completado">🟢 Módulo 4: Comparación de Marcos (EE.UU. vs Chile)</li>
            <li className="completado">🟢 Módulo 5: Responsabilidades Legales del Administrador</li>
            <li className="completado">🟢 Módulo 6: Tratamiento de Datos Sensibles (Ley 19.628)</li>
            <li className="pendiente">⚪ Módulo 7: Conclusiones del Caso</li>
            <li className="pendiente">⚪ Módulo 8: Registro de Prompts de IA</li>
          </ul>
        </div>
        
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