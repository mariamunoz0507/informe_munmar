# Centro de Análisis de Ciberseguridad - Caso Sony Pictures (2014)

## 📌 Descripción del Proyecto
Este proyecto consiste en un **Dashboard Interactivo de Ciberseguridad** desarrollado en React y Vite como parte de la **Evaluación Sumativa N°2** para la asignatura de *Fundamentos de Seguridad de la Información* en **INACAP**. 

La aplicación web analiza de manera exhaustiva el ciberataque perpetrado por la APT *Guardians of Peace (GOP)* contra Sony Pictures Entertainment en 2014, estructurando la información en 8 módulos interactivos que contrastan los hechos técnicos con el marco normativo y penal vigente en Chile.

---

## 🛠️ Tecnologías Utilizadas
* **Framework Principal:** React.js (Componentes funcionales y estado dinámico con `useState`)
* **Herramienta de Construcción:** Vite (Entorno de desarrollo rápido)
* **Estilizado:** CSS3 con variables globales (`:root`) y diseño responsivo adaptado para múltiples dispositivos
* **Despliegue Continuo (CI/CD):** Vercel integrado con GitHub

---

## 📁 Estructura del Repositorio
El proyecto mantiene una organización limpia y estandarizada:

```text
informe_munmar/
├── docs_munmar/          # Documentación de respaldo del informe (.md)
├── public/               # Archivos públicos y recursos vectoriales (SVG)
├── src/
│   ├── assets/           # Recursos visuales del proyecto
│   ├── App.css           # Estilos base
│   ├── App.jsx           # Código principal y lógica de los 8 módulos del Dashboard
│   ├── index.css         # Estilos globales y reseteo CSS
│   └── main.jsx          # Punto de entrada de React
├── index.html            # Archivo HTML principal
├── package.json          # Gestión de dependencias y scripts de Node
└── vite.config.js        # Configuración del entorno de Vite