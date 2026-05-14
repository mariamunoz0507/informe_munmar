import React from 'react';
import { Scale, Globe, Landmark } from 'lucide-react';

const MarcoNormativo = () => {
  return (
    <section className="max-w-4xl mx-auto my-10">
      <div className="bg-white shadow-xl rounded-2xl border border-slate-200 overflow-hidden">
        {/* Cabecera del Componente */}
        <div className="bg-slate-800 p-5 flex items-center gap-3">
          <Scale className="text-blue-400" size={28} />
          <h2 className="text-xl font-bold text-white tracking-tight">
            02. Marco Normativo Aplicable
          </h2>
        </div>

        <div className="p-8 space-y-8">
          {/* Normativa Nacional */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-800 border-b border-slate-100 pb-2">
              <Landmark className="text-blue-600" size={20} />
              <h3 className="font-bold text-lg">Legislación Nacional (Chile)</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <span className="font-bold block text-blue-700 mb-1">Ley 21.459</span>
                <p className="text-sm text-slate-600">Norma sobre Delitos Informáticos que tipifica el acceso ilícito y sabotaje.</p>
              </li>
              <li className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <span className="font-bold block text-blue-700 mb-1">Ley 19.628</span>
                <p className="text-sm text-slate-600">Regula la protección de la vida privada y el tratamiento de datos personales.</p>
              </li>
            </ul>
          </div>

          {/* Normativa Internacional */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-800 border-b border-slate-100 pb-2">
              <Globe className="text-blue-600" size={20} />
              <h3 className="font-bold text-lg">Estándares Internacionales</h3>
            </div>
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 text-slate-700">
              <p className="mb-3">
                Dado que el ataque a Sony Pictures tuvo un alcance global, se consideran los principios del 
                <strong> Convenio de Budapest</strong>, del cual Chile es parte, para facilitar la cooperación 
                internacional en la persecución del cibercrimen.
              </p>
              <p className="text-sm italic">
                *Nota: Aunque en EE.UU. aplicaron normativas locales, este análisis utiliza las leyes chilenas 
                según el escenario hipotético solicitado en la rúbrica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarcoNormativo;