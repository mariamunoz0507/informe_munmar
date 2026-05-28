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
              <div className="delito-numero">Art. 1°</div>
              <div className="delito-detalle">
                <h4>Acceso Ilícito</h4>
                <p>Se configura cuando los atacantes superaron las medidas de seguridad perimetrales mediante credenciales administrativas robadas por spear-phishing, ingresando sin autorización a los repositorios internos de SPE durante meses de forma encubierta.</p>
              </div>
            </div>

            <div className="delito-item">
              <div className="delito-numero">Art. 2° inc. 1</div>
              <div className="delito-detalle">
                <h4>Interrupción o Entorpecimiento de Sistema Informático</h4>
                <p>Aplica por la inyección del wiper Destover que sobrescribió el MBR de más de 3.000 equipos, forzando la desconexión total de la infraestructura de Sony a nivel mundial durante varias semanas.</p>
              </div>
            </div>

            <div className="delito-item">
              <div className="delito-numero">Art. 3° inc. 1</div>
              <div className="delito-detalle">
                <h4>Ataque a la Integridad de los Datos</h4>
                <p>Sanciona la destrucción, alteración o borrado doloso de datos. Aplica directamente por el despliegue del malware Destover que destruyó bases de datos completas, respaldos y archivos operativos de forma irreversible.</p>
              </div>
            </div>

            <div className="delito-item">
              <div className="delito-numero">Art. 5° inc. 1</div>
              <div className="delito-detalle">
                <h4>Interceptación Ilícita</h4>
                <p>Sanciona la captura de transmisiones no públicas de datos. Aplica a la obtención de correos electrónicos privados de ejecutivos y archivos de tráfico de red interno antes de su publicación masiva en plataformas P2P.</p>
              </div>
            </div>

            <div className="delito-item">
              <div className="delito-numero">Art. 6° inc. 1</div>
              <div className="delito-detalle">
                <h4>Uso de Herramientas Maliciosas</h4>
                <p>Sanciona la posesión, distribución y uso de programas diseñados para cometer delitos informáticos. Aplica específicamente al malware Destover, herramienta creada con el único fin de destruir sistemas y datos de forma masiva e irreversible.</p>
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
          <h2>Módulo 4: Comparación de Marcos Regulatorios por Industria</h2>
          <p className="lead">Tabla comparativa de tres marcos legales aplicables al sector entretenimiento/medios, con análisis de aplicabilidad directa al caso Sony Pictures 2014.</p>

          <div className="tabla-responsiva">
            <table className="tabla-comparativa">
              <thead>
                <tr>
                  <th>Eje de Análisis</th>
                  <th>Ley 21.459 (Chile)</th>
                  <th>GDPR (Unión Europea)</th>
                  <th>CCPA (California, EE.UU.)</th>
                  <th>Aplicabilidad al Caso Sony</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Alcance Territorial</strong></td>
                  <td>Nacional — aplica a delitos cometidos en Chile o con efectos en Chile.</td>
                  <td>Extraterritorial — aplica a toda entidad que trate datos de ciudadanos europeos.</td>
                  <td>Estatal — aplica a empresas que recopilan datos de residentes de California con ingresos superiores a 25 MM USD.</td>
                  <td>Sony tiene filiales en Chile y Europa, y opera en California. Los tres marcos son concurrentemente aplicables.</td>
                </tr>
                <tr>
                  <td><strong>Tipo de Sanción</strong></td>
                  <td>Penal: presidio menor en sus grados medio a máximo (Art. 1°–6°). Multa hasta 50 UTM por Ley 19.628.</td>
                  <td>Administrativa: multas de hasta 20 millones de euros o el 4% de la facturación global anual.</td>
                  <td>Civil: multas de hasta USD 7.500 por infracción intencional por consumidor afectado.</td>
                  <td>Sony fue sancionada civilmente en EE.UU. Una brecha así hoy activaría multas GDPR millonarias por datos de empleados europeos filtrados.</td>
                </tr>
                <tr>
                  <td><strong>Sujeto Regulado</strong></td>
                  <td>Personas naturales que cometan delitos informáticos. Empresas responden civilmente.</td>
                  <td>Toda organización pública o privada que actúe como responsable del tratamiento de datos personales.</td>
                  <td>Empresas con fines de lucro que recopilen datos de consumidores residentes en California.</td>
                  <td>Sony como empresa es sujeto regulado bajo GDPR y CCPA. Los atacantes (GOP) son sujetos bajo Ley 21.459.</td>
                </tr>
                <tr>
                  <td><strong>Notificación de Brecha</strong></td>
                  <td>No existe obligación expresa en Ley 19.628 vigente. En tramitación legislativa.</td>
                  <td>Obligatoria en 72 horas desde que se detecta la brecha (Art. 33 GDPR).</td>
                  <td>Obligatoria sin demora razonable a los consumidores afectados (Cal. Civ. Code § 1798.82).</td>
                  <td>Sony tardó días en notificar. Bajo GDPR esto habría generado sanción adicional por incumplimiento del plazo de 72 horas.</td>
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
          <p className="lead">Documentación metodológica transparente sobre el proceso de investigación asistido por IA para el análisis del Caso Sony Pictures Entertainment (2014).</p>

          <div className="caja-prompt">
            <span className="prompt-meta">Sección 2.1.1 — Marco Normativo:</span>
            <p className="prompt-texto">"En el caso Sony Pictures 2014, donde atacantes exfiltraron 100 TB de datos confidenciales, destruyeron sistemas y filtraron información personal de empleados, ¿qué normas nacionales chilenas e internacionales son aplicables? Necesito al menos 4 normas con justificación específica referida a hechos concretos del caso."</p>
          </div>
          <p style={{fontSize:'12px', color:'var(--cyber-green)', marginBottom:'4px'}}>✔ Corrección: La IA justificó el GDPR de forma genérica. Lo corregí especificando que su aplicabilidad es como marco comparativo, ya que filiales europeas de Sony fueron afectadas.</p>

          <div className="caja-prompt">
            <span className="prompt-meta">Sección 2.1.2 — Tipificación Ley 21.459:</span>
            <p className="prompt-texto">"Analiza las siguientes acciones del ataque a Sony Pictures 2014: (1) instalación del malware Destover para destruir discos duros, (2) exfiltración de 100 TB de datos, (3) acceso no autorizado a la red corporativa. Tipifica cada acción según artículos específicos de la Ley 21.459 chilena, indicando número de artículo e inciso cuando corresponda."</p>
          </div>
          <p style={{fontSize:'12px', color:'var(--cyber-green)', marginBottom:'4px'}}>✔ Corrección: La IA omitió el Art. 6° sobre herramientas maliciosas. Lo agregué porque el malware Destover encuadra directamente en ese artículo.</p>

        <div className="caja-prompt">
          <span className="prompt-meta">Sección 2.1.3 — Comparación de Marcos:</span>
          <p className="prompt-texto">"Crea una tabla comparativa de marcos regulatorios aplicables al sector entretenimiento como Sony Pictures. Incluye al menos 3 marcos (Ley 21.459, GDPR, CCPA) comparados en 3 ejes: alcance territorial, tipo de sanción y sujeto regulado. Agrega una columna de aplicabilidad al caso Sony Pictures 2014."</p>
        </div>
        <p style={{fontSize:'12px', color:'var(--cyber-green)', marginBottom:'4px'}}>✔ Corrección: La primera respuesta tenía solo 2 ejes y sin columna de aplicabilidad. Solicité segunda iteración para completar la tabla según la rúbrica.</p>

      <div className="caja-prompt">
        <span className="prompt-meta">Sección 2.1.4 — Responsabilidades Legales:</span>
        <p className="prompt-texto">"En el caso Sony Pictures 2014, identifica al menos 3 actores (atacantes, empresa Sony, ejecutivos, terceros) y para cada uno analiza qué tipo de responsabilidad legal les corresponde: penal, civil o administrativa. Cita la norma o artículo específico que fundamenta cada atribución."</p>
      </div>
      <p style={{fontSize:'12px', color:'var(--cyber-green)', marginBottom:'4px'}}>✔ Corrección: La IA fusionó Sony y sus ejecutivos como un solo actor. Los separé porque tienen responsabilidades distintas: Sony responde administrativamente y los ejecutivos por negligencia civil.</p>

      <div className="caja-prompt">
        <span className="prompt-meta">Sección 2.1.5 — Datos Personales Ley 19.628:</span>
        <p className="prompt-texto">"En el ataque a Sony Pictures 2014 se filtraron datos de empleados (RUT, salarios), correos privados y películas no estrenadas. Clasifica estos datos según la Ley 19.628 distinguiendo personales de sensibles. Analiza qué derechos ARCO (Acceso, Rectificación, Cancelación, Oposición) fueron afectados, citando el artículo correspondiente."</p>
      </div>
      <p style={{fontSize:'12px', color:'var(--cyber-green)', marginBottom:'4px'}}>✔ Corrección: La IA solo desarrolló Acceso y Cancelación. Agregué Rectificación (Art. 12) y Oposición para cumplir el mínimo de 3 derechos ARCO exigidos.</p>

      <div className="caja-destacada">
        <h4>Reflexión Final: Uso de IA como Agente vs. Chatbot</h4>
        <p>Usé la IA principalmente como <strong>chatbot</strong>: formulaba preguntas específicas por sección y evaluaba críticamente cada respuesta antes de incorporarla. La diferencia con un <strong>agente</strong> es que este actúa autónomamente sin supervisión. En mi proceso, cada prompt fue diseñado con un objetivo concreto y cada respuesta fue corregida con mi propio criterio, como evidencian las correcciones documentadas.</p>
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
            <p className="alumno-nombre">Maria Jose Muñoz Matta</p>
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
