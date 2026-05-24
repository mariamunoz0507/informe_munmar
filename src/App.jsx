import React from 'react'
import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between p-6 md:p-12">
      {/* Contenedor Principal / Tarjeta de Portada */}
      <div className="max-w-3xl mx-auto my-auto bg-slate-800/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl text-center space-y-6">
        
        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
          Evaluación Sumativa N°2
        </span>
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Análisis Legal de Ciberseguridad
        </h1>
        
        <p className="text-lg text-slate-400 font-medium max-w-xl mx-auto">
          Estudio de caso de incidentes globales bajo el prisma de la legislación informática chilena.
        </p>
        
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full my-4"></div>
        
        {/* Detalles de Entrega Académica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left bg-slate-900/60 p-6 rounded-xl border border-slate-700/50 text-sm text-slate-300">
          <div>
            <p className="text-slate-500 font-semibold uppercase text-xs">Asignatura</p>
            <p className="font-medium">Fundamentos de Seguridad de la Información</p>
          </div>
          <div>
            <p className="text-slate-500 font-semibold uppercase text-xs">Institución</p>
            <p className="font-medium">INACAP</p>
          </div>
          <div className="sm:col-span-2 pt-2 border-t border-slate-700/50">
            <p className="text-slate-500 font-semibold uppercase text-xs">Documentación Adjunta</p>
            <p className="text-blue-400 font-medium">8 Módulos de análisis disponibles en carpeta 'docs_munmar/'</p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center text-slate-500 text-xs tracking-wide border-t border-slate-800 pt-4 max-w-3xl mx-auto w-full">
        <p>© 2026 - Informe Técnico de Ciberseguridad · Analista Programador</p>
      </footer>
    </main>
  )
}

export default App