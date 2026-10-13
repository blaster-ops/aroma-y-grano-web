# Fase 1: Análisis de Requerimientos
**Documento:** `docs/fase1_analisis_requerimientos.md`  
**Proyecto:** Aroma & Grano - Página Web Empresarial  
**Fase Metodológica:** Fase 1 del Ciclo de Vida de Software  
**Estado:** Aprobado  
**Tipo de Información:** `[Simulado - Caso de Estudio Empresarial]`  

---

## 1. Justificación y Necesidades del Negocio

La empresa **Aroma & Grano** experimenta un crecimiento constante en su local físico; sin embargo, enfrenta importantes cuellos de botella operativos y comerciales derivados de la falta de una presencia web moderna:
* **Fuga de Oportunidades Comerciales:** Clientes potenciales fuera del radio físico de la tienda no tienen acceso al catálogo ni a los orígenes disponibles.
* **Sobrecarga en Canales de Mensajería:** Más del 65% del tiempo de atención por WhatsApp se consume respondiendo preguntas repetitivas (horarios, cartas de café, precios de talleres, métodos de pago aceptados).
* **Falta de Vitrina B2B:** Las empresas interesadas en catering corporativo o suministro mayorista no perciben a la empresa con la solidez institucional requerida al no contar con un sitio web corporativo propio.
* **Inexistencia de Promociones Centralizadas:** Las ofertas de temporada y paquetes especiales pierden visibilidad al publicarse únicamente en historias efímeras de redes sociales.

---

## 2. Objetivos del Proyecto (Metodología SMART)

1. **Objetivo de Conversión (S-M-A-R-T):** Incrementar la captación de prospectos (leads) calificados para eventos y talleres en un **35%** durante los primeros 90 días posteriores al lanzamiento de la web.
2. **Objetivo de Eficiencia Operativa:** Reducir en un **50%** las consultas básicas recurrentes sobre orígenes, moliendas y horarios mediante la implementación de fichas descriptivas y una sección de preguntas frecuentes (FAQ) interactiva.
3. **Objetivo de Accesibilidad y Calidad:** Obtener una calificación superior a **95/100** en auditorías de accesibilidad web (WCAG 2.1 AA) y rendimiento en Lighthouse para dispositivos móviles.
4. **Objetivo de Posicionamiento de Marca:** Presentar el 100% de los lotes de café con su trazabilidad de origen (finca, altura, proceso y puntaje SCA), consolidando a Aroma & Grano como una autoridad en café de especialidad.

---

## 3. Matriz de Usuarios y Stakeholders

| Rol / Actor | Descripción y Motivación | Canal de Acceso Habitual | Expectativa Principal |
| :--- | :--- | :--- | :--- |
| **Cliente Minorista (B2C)** | Amante del buen café que desea comprar granos frescos y descubrir nuevos métodos. | Teléfono inteligente (Mobile) | Ver notas de cata claras, elegir tipo de molienda y contactar fácilmente para pedir. |
| **Coordinador Corporativo (B2B)** | Encargado de eventos corporativos o compras de insumos de oficina. | Computador de escritorio / Laptop | Encontrar propuestas de catering, solicitar cotizaciones formales y ver credenciales. |
| **Estudiante de Barismo** | Interesado en aprender técnicas de extracción y calibración de espresso. | Móvil / Tablet | Ver calendario de talleres, contenido temático, costos y reservar su cupo. |
| **Administrador del Negocio** | Propietario / Tostador de Aroma & Grano. | Escritorio | Recibir leads organizados con datos completos (nombre, correo, tipo de interés). |

---

## 4. Requisitos Funcionales (RF) - Priorización MoSCoW

Los requisitos funcionales definen los comportamientos y servicios específicos que el sistema web debe suministrar. Se clasifican según la técnica **MoSCoW** (*Must have, Should have, Could have, Won't have*):

### Must Have (Obligatorios para el Lanzamiento)
* **RF-01 (Navegación Fluida):** El sistema debe ofrecer una barra de navegación fija (sticky navbar) responsiva con enlaces de desplazamiento suave (smooth scroll) a todas las secciones: Inicio, Empresa, Catálogo, Galería, Promociones, Cotizador y Contacto.
* **RF-02 (Sección Nosotros):** El sitio debe exponer la historia de la tostaduría, pilares de comercio justo, perfil del maestro tostador y métricas clave de impacto ambiental/social.
* **RF-03 (Catálogo de Productos y Servicios):** El sistema debe mostrar tarjetas de producto estructuradas para cafés de origen, suscripciones y talleres, incluyendo precio referencial, notas de cata y botón de acción.
* **RF-04 (Galería Filtrable):** El sitio debe contar con una galería de elementos visuales con botones de filtrado interactivo por categorías (Tostaduría, Variedades, Bebidas, Talleres) sin recargar la página.
* **RF-05 (Modal Lightbox de Galería):** Al hacer clic en un elemento visual, el sistema debe abrir una ventana modal accesible mostrando la imagen ampliada, título y descripción contextual.
* **RF-06 (Sección de Promociones):** El sitio debe exhibir las ofertas vigentes y kits de temporada con etiquetas de descuento destacadas.
* **RF-07 (Formulario de Contacto Validado):** Debe permitir el ingreso de nombre, correo electrónico, teléfono, tipo de interés y mensaje, ejecutando validaciones de formato en tiempo real mediante JavaScript antes del envío.
* **RF-08 (Confirmación de Envío):** Al enviar el formulario con datos válidos, el sistema debe mostrar una alerta o notificación Toast de éxito sin recargar la página.

### Should Have (Importantes con Alto Valor)
* **RF-09 (Simulador / Cotizador Interactivo de Café):** Componente interactivo en JavaScript que permita al usuario seleccionar una variedad de café, el tipo de molienda y los kilogramos deseados, calculando automáticamente el subtotal estimado y ofreciendo un botón para enviar dicha solicitud preconfigurada.
* **RF-10 (Sección FAQ Acordeón):** Módulo de preguntas frecuentes implementado con componentes acordeón colapsables y accesibles.
* **RF-11 (Botonera Rápida flotante de WhatsApp):** Botón flotante accesible con enlace directo a la línea de atención al cliente de la empresa.

### Could Have (Deseables si el tiempo lo permite)
* **RF-12 (Selector de Suscripción al Boletín):** Campo en el pie de página para captura de correo electrónico con validación y confirmación.
* **RF-13 (Temporizador Regresivo de Promoción):** Contador visual que simule el tiempo restante de una oferta especial.

### Won't Have (Excluidos de esta versión)
* **RF-14 (Pasarela de Pago Bancaria Real):** No se integrará cobro con tarjeta de crédito directo para evitar requerimientos de servidor backend y PCI-DSS en esta fase estática.
* **RF-15 (Sistema de Inicio de Sesión / Login):** No se implementará gestión de cuentas de usuario autenticadas en el frontend estático.

---

## 5. Requisitos No Funcionales (RNF)

Los requisitos no funcionales delimitan las restricciones de calidad, rendimiento y arquitectura:

* **RNF-01 (Semántica y Estándares Web):** El código debe cumplir con la especificación W3C para HTML5 semántico, empleando etiquetas estructurales adecuadas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
* **RNF-02 (Accesibilidad Universal - WCAG 2.1 Nivel AA):**
  * Ratios de contraste de color mínimo de 4.5:1 para texto normal y 3:1 para texto grande.
  * Todas las imágenes deben portar etiquetas `alt` descriptivas.
  * Los botones deben tener nombres accesibles y etiquetas `aria-label` donde proceda.
  * Enlace accesible de omisión: `<a class="skip-link" href="#main-content">`.
  * Total operatividad con el teclado (Tab, Enter, Espacio, Escape).
* **RNF-03 (Diseño Responsivo Multi-Dispositivo):** El sitio debe adaptarse sin quiebres de diseño ni desbordamientos horizontales en anchos de pantalla desde 360px hasta 2560px (mobile-first), utilizando los breakpoints de Bootstrap 5.3.
* **RNF-04 (Rendimiento y Tiempos de Carga):** El First Contentful Paint (FCP) debe ser inferior a 1.2 segundos y el tiempo total de carga en red 4G simulada menor a 2.5 segundos.
* **RNF-05 (Compatibilidad Cruzada de Navegadores):** Funcionamiento idéntico y sin fallas en Google Chrome, Mozilla Firefox, Apple Safari y Microsoft Edge en sus versiones estables actuales.
* **RNF-06 (Modularidad y Mantenibilidad del Código):** Separación estricta de responsabilidades en tres capas: estructura (`index.html`), presentación (`css/styles.css`) y comportamiento (`js/app.js`), debidamente documentadas con comentarios técnicos.
* **RNF-07 (Despliegue y Disponibilidad):** El proyecto debe poder desplegarse en un servidor web estático gratuito con protocolo seguro HTTPS habilitado por defecto.
