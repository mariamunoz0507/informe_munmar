import React from 'react'
import './App.css'
import Resumen from './components/resumen';
import MarcoNormativo from './components/marconormativo';
import Delitos from './components/delitos';
import Comparacion from './components/comparacion';

function App() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      {/* Encabezado del Informe */}
      <header className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          Análisis Legal de Ciberseguridad
        </h1>
        <p className="text-slate-500 text-lg font-medium">
          Fundamentos de Seguridad de la Información
        </p>
        <div className="mt-4 border-b-4 border-blue-600 w-20 mx-auto rounded-full"></div>
      </header>

      {/* Sección de Componentes (Se muestran uno abajo del otro) */}
      <div className="space-y-10">
        <Resumen />
        <MarcoNormativo />
        <Delitos />
        <Comparacion />
      </div>

      <footer className="max-w-4xl mx-auto text-center mt-16 pb-8 text-slate-400 text-sm border-t border-slate-200 pt-4">
        <p>© 2026 - Proyecto de Evaluación Sumativa N°2</p>
      </footer>
    </main>
  )
}

export default App;