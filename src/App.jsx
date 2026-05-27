import React, { useState } from 'react'

// Estilos integrados directamente para asegurar un diseño espectacular en Vercel sin dependencias externas
const estilosDashboard = `
:root {
  --bg-principal: #0b0f19;
  --bg-tarjetas: #131a2c;
  --bg-intermedio: #0e1321;
  --cyber-blue: #0ea5e9;
  --cyber-blue-glow: rgba(14, 165, 233, 0.15);
  --cyber-green: #10b981;
  --cyber-green-glow: rgba(16, 185, 129, 0.2);
  --cyber-red: #ef4444;
  --cyber-red-glow: rgba(239, 68, 68, 0.2);
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #475569;
  --border-color: #1e293b;
  --border-hover: #334155;
  --fuente-sistema: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.panel-ciberseguridad {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-principal);
  color: var(--text-primary);
  font-family: var(--fuente-sistema);
  box-sizing: border-box;
}

.panel-header {
  background-color: var(--bg-tarjetas);
  border-bottom: 1px solid var(--border-color);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.header-marca {
  display: flex;
  align-items: center;
  gap: 12px;
}

.indicador-seguridad {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--cyber-green);
  box-shadow: 0 0 10px var(--cyber-green);
  animation: pulso-led 1.8s infinite alternate;
}

@keyframes pulso-led {
  from { opacity: 0.5; box-shadow: 0 0 4px var(--cyber-green); }
  to { opacity: 1; box-shadow: 0 0 12px var(--cyber-green); }
}

.header-marca h1 {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.3px;
  color: var(--text-primary);
}

.header-marca .institucion {
  font-size: 11px;
  color: var(--cyber-blue);
  text-transform: uppercase;
  font-weight: 600;
  margin: 2px 0 0 0;
  letter-spacing: 0.5px;
}

.panel-metadatos {
  display: flex;
  gap: 8px;
}

.badge-tecnologia {
  background-color: var(--bg-intermedio);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 6px;
  text-transform: uppercase;
}

.panel-body {
  display: grid;
  grid-template-columns: 320px 1fr 340px;
  flex: 1;
}

@media (max-width: 1200px) {
  .panel-body {
    grid-template-columns: 280px 1fr;
  }
  .panel-widgets {
    grid-column: span 2;
    border-top: 1px solid var(--border-color);
  }
}

@media (max-width: 868px) {
  .panel-body {
    grid-template-columns: 1fr;
  }
  .panel-sidebar, .panel-visor, .panel-widgets {
    grid-column: span 1;
  }
  .panel-sidebar {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
}

.panel-sidebar {
  background-color: var(--bg-intermedio);
  border-right: 1px solid var(--border-color);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar-titulo h3 {
  font-size: 13px;
  color: var(--text-secondary);
  text-transform: uppercase;
  margin: 0 0 6px 0;
  letter-spacing: 0.5px;
}

.documentos-ruta {
  font-size: 12px;
  color: var(--cyber-blue);
  background-color: var(--cyber-blue-glow);
  padding: 5px 10px;
  border-radius: 6px;
  font-family: monospace;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(14, 165, 233, 0.3);
}

.sidebar-nav {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;
}

.nav-item-btn {
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.nav-item-btn:hover {
  background-color: rgba(30, 41, 59, 0.4);
  border-color: var(--border-color);
}

.nav-item-btn.activo {
  background-color: var(--bg-tarjetas);
  border-color: var(--cyber-blue);
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.08);
}

.nav-icono {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-textos {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.nav-categoria {
  font-size: 8px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-titulo {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 1px;
}

.circulo-estado {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--text-muted);
}

.circulo-estado.activo {
  background-color: var(--cyber-green);
}

.circulo-estado.brillando {
  background-color: var(--cyber-blue);
  box-shadow: 0 0 8px var(--cyber-blue);
}

.tarjeta-alumno {
  background-color: rgba(30, 41, 59, 0.3);
  border: 1px solid var(--border-color);
  padding: 10px 12px;
  border-radius: 10px;
  margin-top: 15px;
}

.alumno-titulo {
  font-size: 9px;
  color: var(--cyber-blue);
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
}

.alumno-nombre {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 2px 0 1px 0;
}

.alumno-carrera {
  font-size: 10px;
  color: var(--text-secondary);
  margin: 0;
}

.panel-visor {
  padding: 30px;
  border-right: 1px solid var(--border-color);
  overflow-y: auto;
  box-sizing: border-box;
}

.visor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 15px;
  margin-bottom: 25px;
}

.visor-modulo-index {
  font-family: monospace;
  font-size: 12px;
  color: var(--cyber-blue);
  font-weight: 700;
  letter-spacing: 1px;
}

.visor-estado-vivo {
  font-size: 11px;
  color: var(--cyber-green);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.visor-estado-vivo::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--cyber-green);
  display: inline-block;
  animation: pulso-led 1s infinite alternate;
}

.detalle-modulo-content h2 {
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 10px 0;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, var(--text-primary), var(--cyber-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.detalle-modulo-content .lead {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0 0 20px 0;
}

.detalle-modulo-content h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 25px 0 12px 0;
  border-left: 3px solid var(--cyber-blue);
  padding-left: 10px;
}

.detalle-modulo-content p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 15px;
}

.detalle-modulo-content ul {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
  padding-left: 20px;
  margin-bottom: 15px;
}

.detalle-modulo-content li {
  margin-bottom: 6px;
}

.resumen-grid-tarjetas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  margin-bottom: 25px;
}

.tarjeta-metrica {
  background-color: var(--bg-tarjetas);
  border: 1px solid var(--border-color);
  padding: 15px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tarjeta-metrica .metrica-numero {
  font-size: 20px;
  font-weight: 800;
  color: var(--cyber-blue);
}

.tarjeta-metrica .metrica-etiqueta {
  font-size: 10px;
  color: var(--text-secondary);
  margin-top: 5px;
  font-weight: 600;
}

.tarjeta-metrica.peligro .metrica-numero {
  color: var(--cyber-red);
}

.tarjeta-metrica.info .metrica-numero {
  color: var(--cyber-green);
}

.caja-destacada {
  background-color: var(--bg-tarjetas);
  border-left: 4px solid var(--cyber-blue);
  padding: 15px 20px;
  border-radius: 0 10px 10px 0;
  margin: 20px 0;
}

.caja-destacada h4 {
  margin: 0 0 6px 0;
  font-size: 14px;
  color: var(--text-primary);
}

.caja-destacada.advertencia {
  border-left-color: var(--cyber-red);
  background-color: rgba(239, 68, 68, 0.05);
}

.leyes-flex-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.tarjeta-ley {
  background-color: var(--bg-tarjetas);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
}

.ley-header {
  background-color: var(--cyber-blue-glow);
  color: var(--cyber-blue);
  font-weight: 700;
  font-family: monospace;
  padding: 8px 12px;
  border-bottom: 1px solid var(--border-color);
  font-size: 13px;
}

.ley-header.especial {
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--cyber-green);
}

.ley-body {
  padding: 15px;
}

.ley-body p {
  margin: 0 0 8px 0;
  font-size: 12px;
}

.cronologia-delitos {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.delito-item {
  display: flex;
  gap: 15px;
  background-color: var(--bg-tarjetas);
  border: 1px solid var(--border-color);
  padding: 15px;
  border-radius: 10px;
  align-items: flex-start;
}

.delito-numero {
  background-color: var(--cyber-red-glow);
  color: var(--cyber-red);
  font-family: monospace;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
}

.delito-detalle h4 {
  margin: 0;
  font-size: 14px;
  color: var(--text-primary);
}

.delito-detalle p {
  margin: 6px 0 0 0;
  font-size: 12px;
  line-height: 1.5;
}

.tabla-responsiva {
  overflow-x: auto;
  border: 1px solid var(--border-color);
  border-radius: 10px;
}

.tabla-comparativa {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 13px;
}

.tabla-comparativa th {
  background-color: var(--bg-tarjetas);
  color: var(--text-primary);
  padding: 12px 15px;
  font-weight: 700;
  border-bottom: 1px solid var(--border-color);
}

.tabla-comparativa td {
  padding: 12px 15px;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.alerta-caja {
  background-color: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.alerta-caja h4 {
  color: var(--cyber-red);
  margin: 0 0 5px 0;
  font-size: 14px;
}

.alerta-caja p {
  margin: 0;
  font-size: 13px;
}

.grid-lecciones {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.tarjeta-leccion {
  background-color: var(--bg-tarjetas);
  border: 1px solid var(--border-color);
  padding: 15px;
  border-radius: 8px;
}

.tarjeta-leccion h4 {
  margin: 0 0 8px 0;
  color: var(--cyber-blue);
  font-size: 14px;
}

.tarjeta-leccion p {
  margin: 0;
  font-size: 12px;
}

.caja-prompt {
  background-color: var(--bg-intermedio);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.prompt-meta {
  font-size: 10px;
  color: var(--cyber-blue);
  text-transform: uppercase;
  font-weight: 700;
  display: block;
  margin-bottom: 5px;
}

.prompt-texto {
  margin: 0 !important;
  font-family: monospace;
  font-size: 12px !important;
  color: var(--text-primary) !important;
  background-color: var(--bg-principal);
  padding: 10px;
  border-radius: 5px;
  line-height: 1.4 !important;
}

.animate-fade-in {
  animation: fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.panel-widgets {
  background-color: var(--bg-intermedio);
  border-left: 1px solid var(--border-color);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
}

.widget-tarjeta {
  background-color: var(--bg-tarjetas);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 15px;
}

.widget-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
}

.widget-header h3 {
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  color: var(--text-primary);
}

.widget-intro {
  font-size: 12px;
  color: var(--text-secondary);
  margin: 0 0 15px 0;
}

.timeline-wrapper {
  position: relative;
  padding-left: 15px;
}

.timeline-line {
  position: absolute;
  left: 0;
  top: 5px;
  bottom: 5px;
  width: 2px;
  background-color: var(--border-color);
}

.timeline-event {
  position: relative;
  margin-bottom: 18px;
}

.timeline-event::before {
  content: "";
  position: absolute;
  left: -19px;
  top: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--cyber-blue);
  border: 2px solid var(--bg-tarjetas);
  box-shadow: 0 0 5px var(--cyber-blue);
}

.timeline-fecha {
  font-size: 10px;
  font-weight: 700;
  color: var(--cyber-blue);
  display: block;
}

.timeline-texto {
  font-size: 11px;
  margin: 2px 0 0 0;
  color: var(--text-secondary);
  line-height: 1.4;
}

.info-list-item {
  border-bottom: 1px solid var(--border-color);
  padding: 10px 0;
}

.info-list-item:last-of-type {
  border-bottom: none;
}

.info-list-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--cyber-blue);
  margin: 0 0 4px 0;
}

.info-list-desc {
  font-size: 11px;
  color: var(--text-secondary);
  line-height: 1.4;
  margin: 0;
}

.info-badge-urgente {
  font-size: 9px;
  background-color: var(--cyber-red-glow);
  color: var(--cyber-red);
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 5px;
}

.info-badge-preventivo {
  font-size: 9px;
  background-color: var(--cyber-green-glow);
  color: var(--cyber-green);
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 5px;
}

.panel-footer-estrat {
  background-color: var(--bg-tarjetas);
  border-top: 1px solid var(--border-color);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.panel-footer-estrat p {
  margin: 0;
  font-size: 12px;
}

.footer-texto {
  color: var(--cyber-blue);
  font-weight: 500;
}

.footer-copyright {
  color: var(--text-muted);
}
`;

function App() {
  const [moduloActivo, setModuloActivo] = useState(0)

  const modulos = [
    {
      id: 1,
      titulo: "Resumen Ejecutivo (Sony 2014)",
      icono: "📁",
      categoria: "Análisis de Incidente",
      contenido: (
        <div className="detalle-modulo-content animate-fade-in">
          <h2>Módulo 1: Resumen Ejecutivo - Caso Sony Pictures (2014)</h2>
          <p className="lead">Análisis exhaustivo de la intrusión de la APT Guardians of Peace, la exfiltración masiva de datos corporativos y el sabotaje lógico total de sus activos.</p>
          
          <div className="resumen-grid-tarjetas">
            <div className="tarjeta-metrica">
              <span className="metrica-numero">100 TB</span>
              <span className="metrica-etiqueta">Información Exfiltrada</span>
            </div>
            <div className="tarjeta-metrica peligro">
              <span className="metrica-numero">Wiper</span>
              <span className="metrica-etiqueta">Destrucción MBR</span>
            </div>
            <div className="tarjeta-metrica info">
              <span className="metrica-numero">+4.000</span>
              <span className="metrica-etiqueta">Empleados Afectados</span>
            </div>
          </div>

          <h3>1. Descripción y Vector del Ataque</h3>
          <p>El 24 de noviembre de 2014, la red corporativa de <strong>Sony Pictures Entertainment (SPE)</strong> fue completamente comprometida por el grupo de persistencia avanzada (APT) autodenominado <em>"Guardians of Peace" (GOP)</em>. El acceso inicial se facilitó a través de ingeniería social focalizada (spear-phishing) dirigida a administradores de TI, permitiendo mapear la topología interna durante meses de forma silenciosa antes de proceder con el ataque masivo.</p>

          <h3>2. El Malware Destructivo: Destover (Wiper)</h3>
          <p>El ataque se ejecutó en dos fases principales. Tras exfiltrar más de <strong>100 Terabytes</strong> de información privada, los atacantes desplegaron el malware <strong>Destover</strong>. Este software tipo "wiper" sobrescribió sistemáticamente el registro maestro de arranque (MBR) de más de 3.000 estaciones de trabajo y servidores, provocando la pérdida definitiva de datos operativos.</p>
          
          <div className="caja-destacada">
            <h4>Pérdidas de Información y Daño Reputacional</h4>
            <p>La filtración incluyó correos electrónicos con conversaciones corporativas sensibles de la junta directiva, números de Seguro Social de empleados, historiales médicos completos, contratos de actores y películas de alto presupuesto sin estrenar en cines (como <em>Fury</em> y <em>Annie</em>), lo que generó pérdidas financieras inmediatas estimadas en más de 35 millones de dólares.</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      titulo: "Marco Normativo Aplicable",
      icono: "⚖️",
      categoria: "Análisis Jurídico",
      contenido: (
        <div className="detalle-modulo-content animate-fade-in">
          <h2>Módulo 2: Marco Normativo Aplicable (Enfoque Chileno)</h2>
          <p className="lead">Estudio de la legislación y tratados internacionales vigentes en Chile aplicables ante incidentes complejos de ciberdelincuencia transfronteriza.</p>
          
          <div className="leyes-flex-container">
            <div className="tarjeta-ley">
              <div className="ley-header">Ley N° 21.459</div>
              <div className="ley-body">
                <p><strong>Nueva Ley de Delitos Informáticos</strong></p>
                <p>Promulgada en 2022. Esta ley derogó la obsoleta Ley 19.223 de 1993, adecuando el Código Penal chileno a la ciberdelincuencia moderna.</p>
              </div>
            </div>

            <div className="tarjeta-ley">
              <div className="ley-header especial">Ley N° 19.628</div>
              <div className="ley-body">
                <p><strong>Protección de la Vida Privada</strong></p>
                <p>Regula el tratamiento de datos de carácter personal y sensible en Chile, estableciendo las obligaciones de seguridad en su custodia.</p>
              </div>
            </div>
          </div>

          <h3>1. El Convenio de Budapest y la Cooperación Internacional</h3>
          <p>Dado que el ataque provino de infraestructura y actores situados fuera de las fronteras físicas del afectado, la persecución penal dependería críticamente del <strong>Convenio de Budapest</strong>. Este tratado, del cual Chile es parte pleno desde 2017, provee canales acelerados de asistencia mutua para la preservación de tráfico de datos y obtención de evidencia transfronteriza de forma acelerada.</p>
        </div>
      )
    },
    {
      id: 3,
      titulo: "Tipificación de Delitos",
      icono: "🚨",
      categoria: "Análisis Penal",
      contenido: (
        <div className="detalle-modulo-content animate-fade-in">
          <h2>Módulo 3: Tipificación de Delitos bajo la Ley N° 21.459 (Chile)</h2>
          <p className="lead">Artículos específicos aplicables de la legislación penal chilena sobre ciberdelincuencia ante las acciones de GOP.</p>

          <div className="cronologia-delitos">
            <div className="delito-item">
              <div className="delito-numero">Art. 1</div>
              <div className="delito-detalle">
                <h4>Acceso Ilícito</h4>
                <p>Se configura en el momento exacto en que los atacantes superaron las medidas de seguridad perimetrales (firewalls e identidades administrativas robadas) para ingresar a los repositorios de SPE sin autorización expresa.</p>
              </div>
            </div>

            <div className="delito-item">
              <div className="delito-numero">Art. 2</div>
              <div className="delito-detalle">
                <h4>Interrupción de Sistemas Informáticos</h4>
                <p>Por obstaculizar gravemente el funcionamiento normal del sistema mediante la inyección del wiper, forzando la desconexión total de la infraestructura de Sony a nivel mundial por varias semanas.</p>
              </div>
            </div>

            <div className="delito-item">
              <div className="delito-numero">Art. 3</div>
              <div className="delito-detalle">
                <h4>Ataque a la Integridad de los Datos (Sabotaje)</h4>
                <p>Sanciona penalmente la destrucción, alteración o borrado de datos lógicos. Aplica de forma directa por el despliegue del malware wiper <em>Destover</em> que destruyó bases de datos completas y respaldos.</p>
              </div>
            </div>

            <div className="delito-item">
              <div className="delito-numero">Art. 5</div>
              <div className="delito-detalle">
                <h4>Intercepción Ilícita</h4>
                <p>Sanciona la captura de transmisiones no públicas de datos en tiempo real. Aplica a la obtención pasiva de correos electrónicos de la directiva de Sony y archivos de tráfico de red antes de su publicación masiva.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      titulo: "Comparación de Marcos",
      icono: "🔄",
      categoria: "Estudio Comparativo",
      contenido: (
        <div className="detalle-modulo-content animate-fade-in">
          <h2>Módulo 4: Comparación de Marcos Legales (EE.UU. vs Chile)</h2>
          <p className="lead">Contraste de las diferencias de enfoque sobre cómo abordan las brechas de seguridad.</p>

          <div className="tabla-responsiva">
            <table className="tabla-comparativa">
              <thead>
                <tr>
                  <th>Eje de Análisis</th>
                  <th>Sistema Angloamericano (EE.UU.)</th>
                  <th>Sistema Chileno (Leyes 21.459 / 19.628)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Base Penal Informática</strong></td>
                  <td>Regulado por la <em>Computer Fraud and Abuse Act (CFAA)</em>, enfocada fuertemente en daños económicos tasables corporativos.</td>
                  <td>Regulado por la <em>Ley 21.459</em>, enfocada en proteger la integridad y disponibilidad de los sistemas como bien jurídico abstracto.</td>
                </tr>
                <tr>
                  <td><strong>Estructura Regulatoria</strong></td>
                  <td>Fragmentación por industrias y estados (HIPAA para salud, GLBA para servicios financieros, CCPA en California).</td>
                  <td>Estructura unificada con regulaciones de ciberdelincuencia penal idénticas y centralizadas para todo el país.</td>
                </tr>
                <tr>
                  <td><strong>Notificación de Brechas</strong></td>
                  <td>Obligatoriedad federal e inmediata de reportar incidentes que involucren datos personales.</td>
                  <td>En transición legislativa a través del CSIRT nacional y futuras normativas unificadas de protección de datos.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 5,
      titulo: "Responsabilidades Legales",
      icono: "💼",
      categoria: "Área Técnica",
      contenido: (
        <div className="detalle-modulo-content animate-fade-in">
          <h2>Módulo 5: Responsabilidades del Administrador de Seguridad</h2>
          <p className="lead">Riesgos laborales, contractuales y civiles que asume el equipo encargado de salvaguardar la infraestructura informática.</p>

          <div className="alerta-caja">
            <h4>Implicancias Laborales y Contractuales (Código del Trabajo)</h4>
            <p>Bajo la legislación laboral chilena, el administrador de seguridad o jefe de TI que incurra en omisiones graves de sus deberes técnicos esenciales (por ejemplo, omitir la instalación de parches críticos conocidos o mantener credenciales compartidas en texto plano) arriesga el despido inmediato amparado en el <strong>Artículo 160 N°7 del Código del Trabajo</strong> ("Incumplimiento grave de las obligaciones que impone el contrato"), perdiendo el derecho a indemnizaciones.</p>
          </div>

          <h3>Eximentes y Buenas Prácticas de Defensa Jurídica</h3>
          <p>Para eximirse de responsabilidad civil ante demandas de la empresa por pérdidas de datos, el administrador debe documentar un estándar de debida diligencia comprobable:</p>
          <ul>
            <li><strong>Bitácora de Riesgos:</strong> Reportes formales periódicos a la alta gerencia sobre el estado de la seguridad de la información y la urgencia de aplicar parches, especialmente si se dejasen de lado por falta de presupuesto.</li>
            <li><strong>Cumplimiento de Estándares:</strong> Acreditar que todos los controles de la red se gestionaban activamente bajo marcos normativos internacionales, como la norma ISO/IEC 27001 o controles CIS.</li>
          </ul>
        </div>
      )
    },
    {
      id: 6,
      titulo: "Tratamiento de Datos Sensibles",
      icono: "🔒",
      categoria: "Protección de Datos",
      contenido: (
        <div className="detalle-modulo-content animate-fade-in">
          <h2>Módulo 6: Tratamiento de Datos Sensibles (Ley N° 19.628)</h2>
          <p className="lead">Estudio de los deberes y debilidades del resguardo de información personal íntima expuesta durante la brecha.</p>

          <p>La Ley N° 19.628 en Chile define explícitamente como <strong>"Datos Sensibles"</strong> aquellos antecedentes que se refieren a las características físicas o morales de las personas, estados de salud física o psíquica, e información de la vida privada íntima (como registros médicos y nóminas de salarios filtrados en el caso de Sony).</p>

          <h3>Obligaciones de Custodia y Sanciones</h3>
          <p>El almacenamiento de estos datos de salud o financieros sin cifrado criptográfico robusto en servidores perimetrales constituye un incumplimiento directo a la obligación de secreto de custodia de datos.</p>

          <div className="caja-destacada advertencia">
            <h4>Brechas en el Régimen Sancionatorio Chileno</h4>
            <p>La Ley 19.628 vigente contempla penalizaciones financieras sumamente limitadas (techos máximos de 50 UTM). No obstante, los actuales proyectos de reforma buscan alinear la normativa chilena con el estándar europeo GDPR, incorporando multas millonarias y exigiendo de forma obligatoria el cifrado en tránsito y reposo para resguardar estos activos.</p>
          </div>
        </div>
      )
    },
    {
      id: 7,
      titulo: "Conclusiones del Caso",
      icono: "💡",
      categoria: "Lecciones Técnicas",
      contenido: (
        <div className="detalle-modulo-content animate-fade-in">
          <h2>Módulo 7: Conclusiones y Lecciones de Ciberseguridad</h2>
          <p className="lead">Directrices indispensables de ingeniería informática y mejores prácticas preventivas basadas en el caso de Sony.</p>

          <div className="grid-lecciones">
            <div className="tarjeta-leccion">
              <h4>1. Segmentación de Red Estricta</h4>
              <p>Evitar redes internas planas. Se debe segmentar la red interna de producción y aplicar políticas de confianza cero (Zero Trust) para impedir el movimiento lateral de un malware de nodo a nodo.</p>
            </div>
            <div className="tarjeta-leccion">
              <h4>2. Respaldos Offline (Regla 3-2-1)</h4>
              <p>La regla de oro exige que al menos una copia de seguridad crítica de la empresa se mantenga aislada físicamente de la red (Air-gapped), evitando que un malware destructivo wiper o un ransomware las borre con privilegios de administrador de dominio.</p>
            </div>
            <div className="tarjeta-leccion">
              <h4>3. Autenticación Multifactor (MFA)</h4>
              <p>La implementación mandatoria de MFA en todas las interfaces de acceso VPN e identidades corporativas bloquea de raíz el compromiso perimetral de credenciales administrativas por fuerza bruta o phishing.</p>
            </div>
            <div className="tarjeta-leccion">
              <h4>4. Monitoreo de Salida (SIEM)</h4>
              <p>Los atacantes exfiltraron 100 TB de información legible durante meses. Es clave implementar auditorías de correlación de eventos orientadas no solo a bloquear entradas, sino a detectar anomalías de tráfico saliente masivo.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      titulo: "Registro de Prompts de IA",
      icono: "🤖",
      categoria: "Metodología",
      contenido: (
        <div className="detalle-modulo-content animate-fade-in">
          <h2>Módulo 8: Declaración de Co-Creación y Prompts de IA</h2>
          <p className="lead">Documentación metodológica transparente sobre el diseño del sistema y la interacción con Inteligencia Artificial.</p>

          <div className="caja-prompt">
            <span className="prompt-meta">Prompt de Configuración Local:</span>
            <p className="prompt-texto">"Deseo inicializar y configurar mi proyecto React de forma limpia y plana directamente en la raíz C:\\informe_munmar para eludir problemas de permisos de administrador en Windows. Dame los comandos Git exactos para realizar el despliegue del repositorio de forma limpia."</p>
          </div>

          <div className="caja-prompt">
            <span className="prompt-meta">Prompt de Ingeniería Legal:</span>
            <p className="prompt-texto">"Redacta detalladamente el análisis técnico de ciberseguridad sobre el caso de Sony Pictures Entertainment (2014) estructurado en 8 módulos independientes, tipificando los hechos bajo los artículos específicos de la Ley chilena 21.459 e incluyendo las obligaciones de la Ley 19.628 de protección de datos sensibles."</p>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="panel-ciberseguridad">
      <style dangerouslySetInnerHTML={{ __html: estilosDashboard }} />

      {/* Cabecera Principal */}
      <header className="panel-header">
        <div className="header-marca">
          <div className="indicador-seguridad activo"></div>
          <div>
            <h1>Centro de Análisis de Ciberseguridad</h1>
            <p className="institucion">INACAP • Evaluación Sumativa N°2</p>
          </div>
        </div>
        <div className="panel-metadatos">
          <span className="badge-tecnologia">React JS</span>
          <span className="badge-tecnologia">Vite</span>
          <span className="badge-tecnologia">Auditoría Legal</span>
        </div>
      </header>

      {/* Cuerpo del Dashboard */}
      <div className="panel-body">
        
        {/* Barra Lateral Izquierda - Navegación */}
        <aside className="panel-sidebar">
          <div>
            <div className="sidebar-titulo">
              <h3>Módulos del Informe (.md)</h3>
              <span className="documentos-ruta">📂 /docs_munmar/</span>
            </div>
            
            <nav className="sidebar-nav">
              {modulos.map((m, index) => (
                <button
                  key={m.id}
                  className={`nav-item-btn ${moduloActivo === index ? 'activo' : ''}`}
                  onClick={() => setModuloActivo(index)}
                >
                  <span className="nav-icono">{m.icono}</span>
                  <div className="nav-textos">
                    <span className="nav-categoria">{m.categoria}</span>
                    <span className="nav-titulo">{m.titulo}</span>
                  </div>
                  <div className={`circulo-estado ${moduloActivo === index ? 'brillando' : 'activo'}`}></div>
                </button>
              ))}
            </nav>
          </div>

          <div className="tarjeta-alumno">
            <p className="alumno-titulo">Autor del Informe</p>
            <p className="alumno-nombre">M. Muñoz & M. Martínez</p>
            <p className="alumno-carrera">Analista Programador / Inacap</p>
          </div>
        </aside>

        {/* Sección Central - Visor */}
        <section className="panel-visor">
          <div className="visor-header">
            <span className="visor-modulo-index">Módulo 0{moduloActivo + 1} / 08</span>
            <span className="visor-estado-vivo">Sincronizado</span>
          </div>
          
          <div className="visor-contenido">
            {modulos[moduloActivo].contenido}
          </div>
        </section>

        {/* Barra Lateral Derecha - Widgets de Información Fija */}
        <aside className="panel-widgets">
          
          {/* Widget 1: Controles Faltantes ISO 27001 */}
          <div className="widget-tarjeta">
            <div className="widget-header">
              <span className="widget-icono">🛡️</span>
              <h3>Controles ISO 27001 Faltantes</h3>
            </div>
            <div className="widget-body">
              <p className="widget-intro">Análisis de omisiones críticas de control identificadas en la infraestructura atacada de Sony:</p>
              
              <div className="info-list">
                <div className="info-list-item">
                  <span className="info-badge-urgente">Fallo Crítico</span>
                  <h4 className="info-list-title">A.12.6.1 Gestión de Vulnerabilidades</h4>
                  <p className="info-list-desc">Sony carecía de escaneos y parches automatizados, permitiendo la persistencia a largo plazo de fallas críticas aprovechadas por la APT.</p>
                </div>
                
                <div className="info-list-item">
                  <span className="info-badge-urgente">Fallo Crítico</span>
                  <h4 className="info-list-title">A.13.1.1 Segregación de Redes</h4>
                  <p className="info-list-desc">Inexistencia de firewalls internos; una vez comprometido el perímetro, los atacantes gozaron de visibilidad horizontal completa.</p>
                </div>

                <div className="info-list-item">
                  <span className="info-badge-preventivo">Mitigación</span>
                  <h4 className="info-list-title">A.14.1.1 Cifrado Criptográfico</h4>
                  <p className="info-list-desc">Los datos médicos y nóminas ejecutivas residían en texto claro. La debida diligencia exige cifrado fuerte de datos sensibles en reposo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Widget 2: Glosario de Conceptos Clave */}
          <div className="widget-tarjeta">
            <div className="widget-header">
              <span className="widget-icono">📚</span>
              <h3>Glosario de Ciberseguridad</h3>
            </div>
            <div className="widget-body">
              <div className="info-list">
                <div className="info-list-item">
                  <h4 className="info-list-title">Wiper (Destover)</h4>
                  <p className="info-list-desc">Malware diseñado con la función de sobreescribir y corromper físicamente el sector de arranque MBR.</p>
                </div>
                <div className="info-list-item">
                  <h4 className="info-list-title">APT (Advanced Persistent Threat)</h4>
                  <p className="info-list-desc">Grupos delictivos con altos recursos dedicados a penetrar redes corporativas específicas y mantenerse persistentes de forma encubierta.</p>
                </div>
                <div className="info-list-item">
                  <h4 className="info-list-title">Convenio de Budapest</h4>
                  <p className="info-list-desc">Tratado internacional ratificado por Chile para el intercambio rápido de pruebas penales digitales transfronterizas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Widget 3: Línea de Tiempo del Ataque */}
          <div className="widget-tarjeta">
            <div className="widget-header">
              <span className="widget-icono">⏳</span>
              <h3>Línea de Tiempo (2014)</h3>
            </div>
            <div className="widget-body timeline-wrapper">
              <div className="timeline-line"></div>
              
              <div className="timeline-event">
                <span className="timeline-fecha">Nov 24</span>
                <p className="timeline-texto">Aparición pública de advertencia de GOP bloqueando terminales de red de Sony.</p>
              </div>

              <div className="timeline-event">
                <span className="timeline-fecha">Nov 27</span>
                <p className="timeline-texto">Publicación y filtración masiva en redes P2P de producciones cinematográficas no estrenadas.</p>
              </div>

              <div className="timeline-event">
                <span className="timeline-fecha">Dic 02</span>
                <p className="timeline-texto">Despliegue y ejecución masiva del malware Wiper destruyendo terminales.</p>
              </div>

              <div className="timeline-event">
                <span className="timeline-fecha">Dic 16</span>
                <p className="timeline-texto">Exfiltración y filtración masiva de correos confidenciales e historiales médicos.</p>
              </div>
            </div>
          </div>

        </aside>

      </div>

      {/* Footer del Centro de Ciberseguridad */}
      <footer className="panel-footer-estrat">
        <p className="footer-texto">Entorno Académico INACAP - Fundamentos de Seguridad de la Información</p>
        <p className="footer-copyright">© 2026 - Informe Técnico de Ciberseguridad • Analistas Programadores</p>
      </footer>
    </div>
  )
}

export default App