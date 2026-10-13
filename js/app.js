/**
 * ==========================================================================
 * AROMA & GRANO - TOSTADURÍA ARTESANAL & CAFÉ DE ESPECIALIDAD
 * Lógica de Interacción Frontend (JavaScript Vanilla ES6+)
 * Módulos: Navegación, Galería, Modal, Cotizador, Formularios y Toasts
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Inicialización de todos los módulos del aplicativo
  initNavbarBehavior();
  initBackToTop();
  initGalleryFiltering();
  initGalleryLightbox();
  initCoffeeCalculator();
  initContactFormValidation();
  initPromoCountdown();
  initNewsletterForm();
  
  console.log('☕ Aroma & Grano Web Corp - Aplicación inicializada correctamente.');
});

/**
 * Módulo 1: Comportamiento del Navbar y Navegación
 */
function initNavbarBehavior() {
  const navbar = document.querySelector('.custom-navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  // Agregar sombra y estilo compacto al hacer scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('navbar-scrolled');
    } else {
      navbar?.classList.remove('navbar-scrolled');
    }
  }, { passive: true });

  // Cierre automático del menú colapsable en dispositivos móviles al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse?.classList.contains('show')) {
        // Invoca el método toggle de Bootstrap si está disponible
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
}

/**
 * Módulo 2: Botón Flotante "Volver Arriba"
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('btnBackToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Módulo 3: Filtrado Reactivo de la Galería Visual
 */
function initGalleryFiltering() {
  const filterButtons = document.querySelectorAll('.btn-filter');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remover clase activa previa
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter') || 'all';

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hidden');
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 50);
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

/**
 * Módulo 4: Modal Lightbox Accesible para Galería
 */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modalEl = document.getElementById('galleryModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

  if (!modalEl || !modalImage || !modalTitle || !modalDesc) return;

  const bsModal = new bootstrap.Modal(modalEl);

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-item-title')?.textContent || 'Fotografía Aroma & Grano';
      const desc = item.getAttribute('data-description') || 'Detalle visual de nuestras instalaciones y procesos.';

      if (img) {
        modalImage.setAttribute('src', img.getAttribute('src'));
        modalImage.setAttribute('alt', img.getAttribute('alt') || title);
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        bsModal.show();
      }
    });

    // Accesibilidad por teclado (Enter o Espacio para abrir)
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });
}

/**
 * Módulo 5: Cotizador / Calculadora Interactiva de Pedidos de Café
 */
function initCoffeeCalculator() {
  const originSelect = document.getElementById('calcOrigin');
  const grindSelect = document.getElementById('calcGrind');
  const weightInput = document.getElementById('calcWeight');
  const totalDisplay = document.getElementById('calcTotalNumber');
  const breakdownDisplay = document.getElementById('calcBreakdown');
  const transferBtn = document.getElementById('btnTransferQuote');

  if (!originSelect || !grindSelect || !weightInput || !totalDisplay) return;

  // Precios base por kilogramo en COP [Simulado]
  const pricesPerKg = {
    'geisha': 140000,    // Lote Geisha Los Andes
    'bourbon': 98000,    // Bourbon Rosado
    'castillo': 68000,   // Castillo Selección
    'blend': 55000       // Blend Casa Tostador
  };

  function calculateSubtotal() {
    const originKey = originSelect.value;
    const pricePerKg = pricesPerKg[originKey] || 68000;
    const kg = Math.max(1, parseFloat(weightInput.value) || 1);
    
    // Descuento por volumen mayorista [Simulado]
    let discountRate = 0;
    if (kg >= 5 && kg < 10) discountRate = 0.05; // 5% de descuento
    if (kg >= 10) discountRate = 0.12;          // 12% de descuento mayorista

    const rawTotal = pricePerKg * kg;
    const finalTotal = rawTotal * (1 - discountRate);

    // Formatear moneda con separadores de miles
    totalDisplay.textContent = '$' + Math.round(finalTotal).toLocaleString('es-CO');

    // Mensaje explicativo
    if (breakdownDisplay) {
      const originName = originSelect.options[originSelect.selectedIndex].text.split(' - ')[0];
      const grindName = grindSelect.options[grindSelect.selectedIndex].text;
      let text = `${kg} kg de ${originName} (${grindName})`;
      if (discountRate > 0) {
        text += ` • Ahorro del ${(discountRate * 100)}% por volumen aplicado`;
      }
      breakdownDisplay.textContent = text;
    }
  }

  originSelect.addEventListener('change', calculateSubtotal);
  grindSelect.addEventListener('change', calculateSubtotal);
  weightInput.addEventListener('input', calculateSubtotal);

  // Transferir al formulario de contacto
  if (transferBtn) {
    transferBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('contacto');
      const mensajeField = document.getElementById('mensaje');
      const motivoSelect = document.getElementById('motivo');

      if (mensajeField && motivoSelect) {
        motivoSelect.value = 'pedido';
        const originName = originSelect.options[originSelect.selectedIndex].text;
        const grindName = grindSelect.options[grindSelect.selectedIndex].text;
        const kg = weightInput.value;
        const total = totalDisplay.textContent;

        mensajeField.value = `Hola equipo de Aroma & Grano, me interesa realizar el siguiente pedido simulado:\n- Variedad: ${originName}\n- Tipo de molienda: ${grindName}\n- Cantidad: ${kg} kg\n- Estimado calculado: ${total}\n\nPor favor contáctenme para coordinar detalles de entrega y facturación.`;

        // Desplazamiento suave al formulario
        contactSection?.scrollIntoView({ behavior: 'smooth' });
        mensajeField.focus();
      }
    });
  }

  // Ejecución inicial
  calculateSubtotal();
}

/**
 * Módulo 6: Validación Accesible del Formulario de Contacto
 */
function initContactFormValidation() {
  const form = document.getElementById('contactForm');
  const toastSuccessEl = document.getElementById('toastSuccess');

  if (!form) return;

  const bsToast = toastSuccessEl ? new bootstrap.Toast(toastSuccessEl, { delay: 5000 }) : null;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verificación de validez de campos
    let isValid = true;
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const mensaje = document.getElementById('mensaje');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Validación de Nombre
    if (!nombre.value.trim() || nombre.value.trim().length < 3) {
      setFieldError(nombre, true);
      isValid = false;
    } else {
      setFieldError(nombre, false);
    }

    // Validación de Email con expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      setFieldError(email, true);
      isValid = false;
    } else {
      setFieldError(email, false);
    }

    // Validación de Teléfono (al menos 7 dígitos numéricos)
    const phoneClean = telefono.value.replace(/\D/g, '');
    if (phoneClean.length < 7) {
      setFieldError(telefono, true);
      isValid = false;
    } else {
      setFieldError(telefono, false);
    }

    // Validación de Mensaje
    if (!mensaje.value.trim() || mensaje.value.trim().length < 10) {
      setFieldError(mensaje, true);
      isValid = false;
    } else {
      setFieldError(mensaje, false);
    }

    if (isValid) {
      // Simular procesamiento del envío
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Enviando solicitud...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        // Disparar Toast de éxito
        if (bsToast) {
          const toastBody = toastSuccessEl.querySelector('.toast-body');
          if (toastBody) {
            toastBody.textContent = `¡Gracias ${nombre.value.trim()}! Hemos recibido tu mensaje comercial. Nos pondremos en contacto en menos de 2 horas.`;
          }
          bsToast.show();
        }

        // Limpiar formulario y estados de error
        form.reset();
        [nombre, email, telefono, mensaje].forEach(field => {
          field.classList.remove('is-valid', 'is-invalid');
        });
      }, 700);
    }
  });

  function setFieldError(field, hasError) {
    if (hasError) {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
    } else {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
    }
  }
}

/**
 * Módulo 7: Contador Regresivo para Promoción Limitada
 */
function initPromoCountdown() {
  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minsEl = document.getElementById('countMins');
  const secsEl = document.getElementById('countSecs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  // Fijar fecha de expiración simulada (48 horas desde ahora)
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 48);

  function updateTimer() {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/**
 * Módulo 8: Suscripción a Newsletter en Footer
 */
function initNewsletterForm() {
  const newsletterForm = document.getElementById('newsletterForm');
  const toastSuccessEl = document.getElementById('toastSuccess');

  if (!newsletterForm) return;

  const bsToast = toastSuccessEl ? new bootstrap.Toast(toastSuccessEl, { delay: 4000 }) : null;

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    
    if (emailInput && emailInput.value.trim()) {
      if (bsToast) {
        const toastBody = toastSuccessEl.querySelector('.toast-body');
        if (toastBody) {
          toastBody.textContent = '¡Suscripción exitosa al Boletín Cafetero de Aroma & Grano!';
        }
        bsToast.show();
      }
      newsletterForm.reset();
    }
  });
}
