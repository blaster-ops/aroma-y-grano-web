# Fase 4: Diseño de Interfaz (UI) y Usabilidad
**Documento:** `docs/fase4_diseno_interfaz_ui_usabilidad.md`  
**Proyecto:** Aroma & Grano - Página Web Empresarial  
**Fase Metodológica:** Fase 4 del Ciclo de Vida de Software  
**Estado:** Aprobado  
**Tipo de Información:** `[Simulado - Caso de Estudio Empresarial]`  

---

## 1. Sistema de Diseño (Design System) y Estilo Visual

La interfaz gráfica de **Aroma & Grano** está inspirada en la atmósfera sensorial de las tostadurías de café de especialidad artesanales: tonos tierra profundos, acentos dorados que evocan la miel y el tueste perfecto, fondos claros y cremosos que garantizan alta legibilidad, y una estética limpia, contemporánea y acogedora.

---

## 2. Paleta Cromática y Validación de Accesibilidad (WCAG 2.1 AA)

Para asegurar la inclusión universal, todos los textos y combinaciones cromáticas cumplen o superan el ratio mínimo de contraste de **4.5:1** para texto normal y **3:1** para texto grande (18pt o 14pt negrita), de acuerdo con las pautas WCAG 2.1 nivel AA:

| Nombre del Color | Código HEX | Código RGB | Rol Semántico en la Interfaz | Ratio de Contraste vs Fondo | Cumplimiento WCAG |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Café Espresso Profundo** | `#2B1810` | `rgb(43, 24, 16)` | Color primario de marca, encabezados y textos oscuros de alta jerarquía. | **15.8:1** (sobre fondo blanco/crema) | **Supera AAA (Excelente)** |
| **Tostado Ámbar / Dorado** | `#C88A35` | `rgb(200, 138, 53)` | Color de acento secundario, botones primarios, badges y líneas divisorias. | **4.6:1** (sobre fondo `#2B1810`) / **3.2:1** (en iconos grandes) | **Cumple AA** |
| **Tostado Intenso Hover** | `#A86D22` | `rgb(168, 109, 34)` | Estado hover y active de botones de acción para feedback táctil. | **5.8:1** (sobre fondo claro) | **Cumple AA** |
| **Crema Latte Suave** | `#FBF7F2` | `rgb(251, 247, 242)` | Fondo general de la página y fondos de secciones alternadas. | Fondo neutro de contraste cálido | **Base Neutra** |
| **Blanco Puro** | `#FFFFFF` | `rgb(255, 255, 255)` | Fondo de tarjetas de producto, modales e inputs. | Fondo principal | **Base Neutra** |
| **Gris Tostaduría Neutro** | `#594A42` | `rgb(89, 74, 66)` | Texto secundario, párrafos explicativos y notas al pie. | **7.2:1** (sobre fondo crema `#FBF7F2`) | **Supera AAA** |
| **Verde Origen Orgánico** | `#2E7D32` | `rgb(46, 125, 50)` | Badges de comercio justo, certificaciones y alertas de éxito. | **4.9:1** (sobre blanco) | **Cumple AA** |

---

## 3. Escala Tipográfica y Jerarquía Visual

La identidad tipográfica combina una fuente Serif elegante para títulos (evocando tradición artesanal y sofisticación) con una fuente Sans-Serif geométrica y legible para bloques de lectura e interfaces interactivas:

* **Tipografía de Títulos (Display):** `'Playfair Display'`, serif. Aporta distinción editorial, personalidad de café gourmet y calidez artesanal.
* **Tipografía de Texto y UI (Body):** `'Outfit'`, sans-serif (con fallback a `'Inter', system-ui, -apple-system, sans-serif`). Gran legibilidad en pantallas pequeñas, amplia apertura en vocales y múltiples pesos numéricos.

### Escala Modular Tipográfica

| Nivel Semántico | Selector CSS | Tamaño Desktop | Tamaño Mobile | Peso (Weight) | Altura de Línea (line-height) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero Titular)** | `h1, .hero-title` | `3.25rem (52px)` | `2.15rem (34px)` | 700 (Bold) | 1.15 |
| **H2 (Sección)** | `h2, .section-title` | `2.25rem (36px)` | `1.75rem (28px)` | 600 (SemiBold) | 1.25 |
| **H3 (Tarjetas/Subtítulos)**| `h3, .card-title` | `1.4rem (22px)` | `1.25rem (20px)` | 600 (SemiBold) | 1.35 |
| **Cuerpo Principal (Body)** | `body, p` | `1.05rem (16.8px)` | `1rem (16px)` | 400 (Regular) | 1.6 |
| **Texto Secundario/Metadatos**| `.text-muted, small` | `0.875rem (14px)` | `0.85rem (13.6px)`| 400 / 500 | 1.5 |
| **Botones y Badges** | `.btn, .badge` | `0.95rem (15.2px)` | `0.9rem (14.4px)` | 600 (SemiBold) | 1.2 |

---

## 4. Biblioteca de Componentes UI Reutilizables

Todos los componentes se diseñaron utilizando la base modular de **Bootstrap 5.3** con personalizaciones CSS precisas:

### 4.1. Barra de Navegación (Navbar)
* Estructura fija superior con desenfoque de fondo (`backdrop-filter: blur(10px)`).
* Efecto de subrayado animado en los enlaces de navegación al hacer hover y en estado activo.
* Botón de menú hamburguesa con icono animado y atributos de accesibilidad (`aria-label="Abrir menú de navegación"`).

### 4.2. Tarjetas de Producto (Product Cards)
* Contenedor con borde suave (`1px solid rgba(43, 24, 16, 0.08)`), esquinas redondeadas (`border-radius: 16px`) y elevación progresiva con sombra suave (`box-shadow: 0 10px 30px rgba(43, 24, 16, 0.06)`).
* Imagen superior con relación de aspecto 4:3 y zoom sutil al situar el cursor encima (`transform: scale(1.04)`).
* Insignia (badge) flotante con puntuación de cata SCA (ej. *"88.5 pts SCA"*).
* Botón de llamada a la acción directo para cotizar o pedir.

### 4.3. Galería Interactiva con Filtros
* Barra de botones con estilo píldora (`btn-filter`) para filtrar dinámicamente entre categorías: *Todos, Tostaduría, Variedades, Cafetería, Talleres*.
* Tarjetas fotográficas con overlay translúcido oscuro que revela el título de la foto y un icono de lupa interactivo.
* Modal accesible (Lightbox) con foco atrapado, navegación por teclado y cierre mediante tecla `Escape` o botón de cierre con `aria-label="Cerrar modal"`.

### 4.4. Cotizador / Calculadora Interactiva de Pedidos
* Panel destacado con fondo contrastante y controles de formulario claros:
  1. Selector de variedad de café con descripción breve.
  2. Selector de molienda adaptada a diferentes cafeteras.
  3. Campo numérico de kilogramos con botones de incremento/decremento rápido.
* Visualizador de subtotal dinámico animado con actualización inmediata en JavaScript.
* Botón de traspaso automático al formulario de contacto.

### 4.5. Formulario de Contacto Accesible
* Etiquetas flotantes o superiores inequívocas (`<label for="...">`).
* Estados `:focus-visible` con anillo de enfoque dorado de 3px (`outline: 3px solid rgba(200, 138, 53, 0.45)`).
* Mensajes de error en línea vinculados mediante `aria-describedby` para compatibilidad con lectores de pantalla.

### 4.6. Notificaciones Toast y Alertas
* Notificación flotante de confirmación (Bootstrap Toast) ubicada en la esquina inferior derecha con icono de check verde y mensaje de cortesía.

---

## 5. Distribución de Espaciado y Layout Responsivo
* **Sistema de Rejilla:** Grilla de 12 columnas de Bootstrap 5.3 con gutters equilibrados (`gx-4 gy-4`).
* **Espaciado Vertical:** Separación estandarizada entre secciones de `5rem (80px)` en escritorio y `3.5rem (56px)` en dispositivos móviles para proporcionar "aire" visual y ritmo de lectura relajado.
* **Contenedores de Contenido:** Ancho máximo centrado en `container` (máx. 1200px) para evitar líneas de texto excesivamente largas que fatiguen la vista del lector.
