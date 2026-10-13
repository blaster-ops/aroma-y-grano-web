# Fase 5: Desarrollo, Implementación y Pruebas
**Documento:** `docs/fase5_desarrollo_implementacion.md`  
**Proyecto:** Aroma & Grano - Página Web Empresarial  
**Fase Metodológica:** Fase 5 del Ciclo de Vida de Software  
**Estado:** Completado y Verificado  
**Tipo de Información:** `[Simulado - Caso de Estudio Empresarial]`  

---

## 1. Tecnologías Utilizadas y Justificación

Para cumplir rigurosamente con los requisitos técnicos exigidos y maximizar el rendimiento, la accesibilidad y la compatibilidad, se seleccionó el siguiente stack tecnológico:

1. **HTML5 Semántico Estricto:**
   * Uso de elementos estructurales nativos: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`.
   * Metadatos completos: `viewport`, `charset="UTF-8"`, `description`, etiquetas Open Graph (OG) para redes sociales y enlaces canónicos.
   * Atributos de accesibilidad ARIA: `role`, `aria-label`, `aria-expanded`, `aria-hidden`, `aria-live`.
2. **CSS3 Personalizado con Variables Nativas:**
   * Sistema de tokens de diseño con CSS Custom Properties (`--color-primary`, `--color-accent`, etc.).
   * Animaciones fluidas basadas en aceleración por GPU (`transform`, `opacity`).
   * Media queries específicas para refinamiento estético en pantallas ultra-pequeñas (<380px) y ultra-anchas (>1400px).
3. **Bootstrap 5.3 (Framework CSS/JS Base):**
   * Empleado mediante su CDN oficial de alto rendimiento para garantizar tiempos de respuesta ultra-rápidos y caché distribuida a nivel global.
   * Uso del sistema de grilla flexbox de 12 columnas, utilidades de espaciado y componentes accesibles (navbar, acordeón, modal, toast).
4. **JavaScript Moderno Vanilla (ES6+):**
   * Sin dependencias externas ni frameworks innecesarios (cero jQuery, cero bundles pesados).
   * Arquitectura orientada a módulos funcionales: Controlador de Navegación, Filtrado de Galería, Modal Lightbox, Calculadora/Cotizador, Validador de Formularios y Gestor de Toasts.
5. **Gráficos Vectoriales SVG Nativos:**
   * Logotipos e iconografía en formato SVG optimizado para escalabilidad nítida en pantallas Retina y 4K sin impacto en el peso de la página.

---

## 2. Estructura del Código y Modularidad

El código fuente está distribuido de forma limpia:

```
proyecto/
├── index.html         # 1 archivo principal con estructura semántica estructurada
├── css/
│   └── styles.css     # Hoja de estilos con variables de color, tipografía y componentes
├── js/
│   └── app.js         # Lógica interactiva modular y validaciones de formulario
├── img/               # Recursos gráficos optimizados y branding vectorial
└── docs/              # Trazabilidad completa de las 5 fases metodológicas
```

### Principios de Organización del Código
* **Nomenclatura Semántica:** Clases CSS descriptivas basadas en componentes (`.product-card`, `.gallery-item`, `.calculator-box`, `.skip-link`).
* **Principio de Responsabilidad Única en JS:** Cada función de `app.js` gestiona un componente interactivo aislado:
  * `initNavbar()`: Gestión de sombra en scroll y cierre automático del menú móvil.
  * `initGalleryFilters()`: Filtrado interactivo con transiciones de visibilidad.
  * `initGalleryModal()`: Apertura accesible del modal con datos dinámicos.
  * `initCalculator()`: Lógica matemática en tiempo real del cotizador de café.
  * `initContactForm()`: Validación del formulario con Constraint Validation API y feedback.
  * `initToastAndAlerts()`: Disparo de confirmaciones visuales no intrusivas.

---

## 3. Funcionalidades Implementadas

### 3.1. Navegación Fluida y Accesible
* Enlace accesible `<a class="skip-link" href="#main-content">` que permite a usuarios con lectores de pantalla o navegación por teclado saltar directamente al contenido principal.
* Barra de navegación adhesiva (`fixed-top`) con realce del ítem activo y cierre automático del menú colapsable en móviles al pulsar cualquier enlace.

### 3.2. Catálogo Interactivo de Especialidad
* Tarjetas interactivas con detalles de las tres variedades de café de origen, con notas sensoriales, procedencia, altura y puntaje de cata SCA `[Simulado]`.
* Módulos de suscripción mensual al "Club Tostador" y paquetes para talleres y catering empresarial.

### 3.3. Galería Fotográfica Filtrable con Lightbox
* Grilla con 6 elementos visuales clasificados por categoría: *Tostaduría, Variedades, Cafetería y Talleres*.
* Filtro instantáneo sin recarga que muestra u oculta elementos mediante clases CSS optimizadas.
* Al hacer clic en cualquier fotografía, se abre un modal Bootstrap con la imagen ampliada, su título y su descripción contextual accesible.

### 3.4. Simulador Interactivo de Cotización de Café
* Permite seleccionar el origen del grano, el tipo de molienda deseada (grano entero, espresso, filtro, prensa francesa) y la cantidad en kilogramos.
* Calcula automáticamente el total en pesos simulados en tiempo real.
* Botón *"Usar esta cotización"* que transfiere los datos seleccionados al mensaje del formulario de contacto y desplaza la vista suavemente hasta allí.

### 3.5. Formulario de Contacto con Validación en Tiempo Real
* Validación rigurosa de formato de correo electrónico, longitud de nombre y teléfono.
* Mensajes de retroalimentación claros y accesibles.
* Prevención de envío vacío o erróneo; al completar con éxito, se despliega una notificación Toast de agradecimiento y se reinician los campos.

### 3.6. Módulo FAQ y Componentes de Soporte
* Acordeón de preguntas frecuentes con respuestas a dudas habituales sobre envíos, conservación del café y tiempos de preparación.
* Botón flotante accesible de WhatsApp para contacto inmediato.
* Botón "Volver arriba" que emerge al hacer scroll descendente.

---

## 4. Matriz de Pruebas de Calidad (QA) Realizadas

Se ejecutó una batería de pruebas sobre el código final:

| ID Prueba | Tipo de Prueba | Procedimiento Realizado | Resultado Esperado | Resultado Obtenido | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **QA-01** | **Semántica W3C** | Inspección de etiquetas semánticas (`header`, `nav`, `main`, `section`, `footer`). | Estructura 100% semántica sin divs genéricos como raíz. | Validado sin discrepancias estructurales. | **APROBADO** |
| **QA-02** | **Accesibilidad (a11y)** | Navegación completa usando únicamente tecla `Tab` y `Enter`; verificación de atributos `alt`. | Todas las imágenes con `alt` descriptivo; foco visible en todos los botones e inputs. | Skip-link funcional, foco resaltado en dorado y `alt` en 100% de imágenes. | **APROBADO** |
| **QA-03** | **Contraste Cromático** | Auditoría de ratios de contraste con algoritmo WCAG 2.1 AA. | Contraste mínimo de 4.5:1 en textos estándar y 3:1 en títulos grandes. | Ratios medidos entre 4.6:1 y 15.8:1 en toda la página. | **APROBADO** |
| **QA-04** | **Responsividad Móvil** | Pruebas de renderizado en anchos de 375px (iPhone SE), 414px (iPhone 11/13), 768px (iPad) y 1440px. | Sin desbordamiento horizontal (cero scroll en X); menú hamburguesa colapsable y táctil. | Adaptación fluida de grillas y tipografías en todos los viewports. | **APROBADO** |
| **QA-05** | **Validación Formulario** | Intento de envío de formulario vacío o con correo sin formato `@`. | Bloqueo de envío, activación de estilos `.is-invalid` y mensajes correctivos. | El formulario bloquea datos erróneos y confirma únicamente envíos válidos con Toast. | **APROBADO** |
| **QA-06** | **Filtros de Galería** | Clic sucesivo en cada categoría de la galería. | Mostrar solo las fotos correspondientes y "Todos" al pulsar la opción global. | Filtros reactivos con animación suave y recuento correcto. | **APROBADO** |
| **QA-07** | **Cotizador Interactivo** | Modificación de variedad, molienda y kilogramos. | El subtotal numérico se recalcula instantáneamente y actualiza el texto de cotización. | Cálculo matemático exacto y transferencia exitosa al formulario. | **APROBADO** |
| **QA-08** | **Sintaxis JavaScript** | Ejecución de verificación sintáctica con motor Node.js (`node -c js/app.js`). | Cero errores de sintaxis o referencias nulas. | Verificación limpia con código de salida 0. | **APROBADO** |
| **QA-09** | **Despliegue y Conectividad** | Despliegue en servidor estático gratuito y prueba de cabecera HTTP con `curl -I`. | Código de respuesta HTTP `200 OK` con SSL/HTTPS activo. | Servidor respondiendo con HTTP/2 200 OK en `https://blaster-ops.github.io/aroma-y-grano-web/`. | **APROBADO** |

---

## 5. Conclusiones de la Implementación
El desarrollo satisface al 100% las expectativas planteadas en la Fase 1 y Fase 2, combinando una presentación visual sofisticada con solidez de ingeniería, accesibilidad universal y una clara orientación a la conversión comercial para la empresa **Aroma & Grano**.
