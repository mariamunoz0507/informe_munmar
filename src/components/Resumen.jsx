import React from 'react';
import { FileText } from 'lucide-react';

const Resumen = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-2xl border border-slate-200 overflow-hidden">
        {/* Cabecera de la tarjeta */}
        <div className="bg-slate-800 p-5 flex items-center gap-3">
          <FileText className="text-blue-400" size={24} />
          <h2 className="text-xl font-semibold text-white">01. Resumen del Caso</h2>
        </div>

        {/* Contenido */}
        <div className="p-8 text-slate-700 leading-relaxed space-y-4">
          {/* Reemplaza estos párrafos con tu investigación real */}
          <p>
            El incidente de ciberseguridad de Sony Pictures ocurrió en noviembre de 2014, cuando un grupo autodenominado "Guardians of Peace" (GoP) logró infiltrarse en los servidores de la compañía. El ataque no solo paralizó la red interna de la empresa, sino que resultó en la exfiltración de aproximadamente 100 terabytes de datos confidenciales.

            La filtración incluyó películas aún no estrenadas, guiones, certificados financieros y, lo más grave, datos personales de más de 4.000 empleados y ex empleados. Entre la información expuesta se encontraban números de seguridad social, registros médicos y correos electrónicos privados con conversaciones críticas entre ejecutivos de la industria.

            El impacto fue devastador para la reputación de la empresa y generó un debate global sobre la responsabilidad de las organizaciones en la custodia de datos sensibles. A pesar de ser un caso internacional, su análisis permite entender cómo se aplicaría la legislación chilena actual frente a brechas de datos de gran magnitud.
          </p>
          <p>
            El incidente se originó a través de [Método de ataque, ej: Phishing/Ransomware], 
            lo que resultó en la filtración de datos sensibles de miles de usuarios.
          </p>
          <p>
            Este caso es relevante para la asignatura ya que permite analizar la aplicación 
            de las leyes de delitos informáticos y protección de datos en Chile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resumen;