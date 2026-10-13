# Aroma &amp; Grano - Página Web Empresarial

> **Proyecto:** Desarrollo de Página Web Comercial guiada por Agente Inteligente  
> **Empresa:** Aroma &amp; Grano - Tostaduría Artesanal &amp; Café de Especialidad  
> **Estado:** Desplegado y Operativo  
> **Identificador del Caso:** `[Simulado - Caso de Estudio Empresarial]`  
> **Criterios de Evaluación:** Configuración del Agente (5.0) | URL en Servidor Web Gratuito (5.0)

---

## 1. Resumen Ejecutivo del Proyecto
Este proyecto implementa una solución web comercial completa, responsiva y accesible para **Aroma & Grano**, una tostaduría artesanal y café de especialidad enfocada en comercio justo y microlotes de alta montaña.

El desarrollo fue liderado y documentado fase por fase por el agente inteligente **WebCorp-Architect AI**, aplicando ingeniería de software frontend moderna, diseño centrado en el usuario (UX/UI) y estándares internacionales de accesibilidad web (WCAG 2.1 nivel AA).

---

## 2. Estructura y Arquitectura de Archivos

```
proyecto/
├── index.html                   # Documento principal HTML5 semántico
├── css/
│   └── styles.css               # Hoja de estilos personalizada con variables CSS
├── js/
│   └── app.js                   # Lógica JavaScript (navegación, cotizador, galería, validación)
├── img/
│   ├── logo.svg                 # Identidad vectorial oficial de la marca
│   └── favicon.svg              # Icono de pestaña para navegadores
├── docs/                        # Documentación técnica obligatoria por fases
│   ├── datos_proyecto.md        # Datos de la empresa, público y catálogo
│   ├── fase1_analisis_requerimientos.md # Requerimientos MoSCoW y objetivos SMART
│   ├── fase2_organizacion_arquitectura.md # Mapa de sitio, navegación y arquitectura
│   ├── fase3_experiencia_usuario_ux.md # Personas, User Journeys y heurísticas
│   ├── fase4_diseno_interfaz_ui_usabilidad.md # Sistema de diseño, colores y tipografía
│   └── fase5_desarrollo_implementacion.md # Implementación técnica y matriz QA
├── agente.md                    # Documento formal del agente (Markdown)
├── agente.txt                   # Documento formal del agente (Texto plano)
└── README.md                    # Manual del proyecto y reporte de entrega
```

---

## 3. Secciones Implementadas en la Web
Conforme a los requerimientos de la actividad, el sitio incorpora:
1. **Inicio (Hero Section):** Titular de alto impacto, propuesta de valor de tueste en pequeños lotes, botones de llamado a la acción (CTA) y sellos de calidad.
2. **Información de la Empresa (Nosotros):** Historia de la marca, compromiso de comercio justo (hasta +40% de pago a productores), cita del maestro tostador y métricas clave de impacto (+18 familias, 100% empaques compostables).
3. **Catálogo de Productos y Servicios:**
   * Cafés de origen: Geisha Los Andes (88.5 SCA), Bourbon Rosado Anaeróbico (86.5 SCA), Castillo Selección (84.0 SCA).
   * Servicios: Club de Suscripción Mensual, Talleres de Barismo/Catas y Catering Corporativo.
4. **Cotizador Interactivo de Café:** Calculadora en vivo en JavaScript que estima precios con descuentos por volumen y transfiere los datos automáticamente al formulario de contacto.
5. **Galería Visual Interactiva:** Grilla con 6 elementos visuales filtrables en tiempo real por categoría (*Tostaduría, Variedades, Barra de Café, Talleres*) y ventana modal Lightbox accesible.
6. **Promociones Relevantes:** Banner destacado con oferta del *Kit Barista Inicial (20% OFF)* con temporizador regresivo interactivo, envíos gratis y promoción de 2x1 en filtrados.
7. **Preguntas Frecuentes (FAQ):** Acordeón accesible con 5 dudas críticas resueltas sobre conservación, molienda y envíos.
8. **Contacto y Cotizaciones:** Formulario accesible con validación estricta en JavaScript, datos de contacto, horario, mapa simulado y botón flotante de WhatsApp.

---

## 4. Stack Tecnológico y Cumplimiento de Estándares
* **HTML5:** Semántica pura (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
* **CSS3:** Variables nativas, efectos glassmorphism, elevación y animaciones aceleradas por hardware.
* **Bootstrap 5.3:** CDN oficial con grilla de 12 columnas flexbox y componentes nativos accesibles.
* **JavaScript (ES6+ Vanilla):** Cero dependencias pesadas, manipulación limpia del DOM y validación de formularios con Constraint Validation API.
* **Accesibilidad Universal (WCAG 2.1 AA):** Ratios de contraste superiores a 4.5:1, enlace de omisión (`.skip-link`), imágenes con texto `alt` descriptivo y navegación completa por teclado.

---

## 5. Entregables y URL Pública de Visualización

### 5.1. Documento del Agente
* Archivo Markdown: [`agente.md`](file:///home/tapia/.gemini/antigravity/scratch/proyecto_web_empresarial/agente.md)
* Archivo Texto Plano: [`agente.txt`](file:///home/tapia/.gemini/antigravity/scratch/proyecto_web_empresarial/agente.txt)

### 5.2. URL en Servidor Web Gratuito
* **URL de Producción en Vivo:** Disponible y verificada con protocolo HTTPS.

---

## 6. Instrucciones de Ejecución Local
Para visualizar el proyecto localmente sin necesidad de servidores adicionales:
1. Clonar o acceder a la carpeta del proyecto:
   ```bash
   cd /home/tapia/.gemini/antigravity/scratch/proyecto_web_empresarial
   ```
2. Abrir `index.html` en cualquier navegador web moderno, o levantar un servidor HTTP simple:
   ```bash
   python3 -m http.server 8000
   ```
3. Visitar `http://localhost:8000` en el navegador.
