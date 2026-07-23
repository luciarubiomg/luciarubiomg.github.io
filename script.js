(function () {
  "use strict";

  /* 1. Scroll Reveal */
  const revealEls = document.querySelectorAll(".js-reveal");
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  /* 2. Contenido de cada categorÃ­a de proyectos */
  const categorias = {
    web: {
      eyebrow: "CategorÃ­a Â· Web & UX/UI",
      title: "Web & Landing Pages",
      intro: "Landing pages y sitios pensados para convertir, optimizando la experiencia de usuario y el rendimiento comercial.",
      projects: [
        {
          img: "assets/img/web/iphone16.png",
          title: "Lanzamiento iPhone 16",
          desc: "Landing de producto con selector de almacenamiento por modelo, pensada para maximizar la conversiÃ³n."
        },
        {
          img: "assets/img/web/renuevos.png",
          title: "reNuevos Â· iPhone Top Reacondicionados",
          desc: "Landing de catÃ¡logo con parrilla de producto, sellos promocionales y bloque informativo de marca."
        },
        {
          img: "assets/img/web/samsung.png",
          title: "Galaxy Unpacked",
          desc: "Landing para evento en directo e integraciÃ³n de reproductor para streaming oficial."
        },
        {
          img: "assets/img/web/sorteo.png",
          title: "Sorteo Aniversario reNuevos",
          desc: "Landing de captaciÃ³n de leads con formulario de suscripciÃ³n a newsletter."
        },
        {
          img: "assets/img/web/ahorro.png",
          title: "Calculadora de Ahorro",
          desc: "Formulario de captaciÃ³n con carga de factura para estimar el ahorro personalizado del cliente."
        }
      ]
    },
    motion: {
      eyebrow: "CategorÃ­a Â· Motion Graphics y VÃ­deo",
      title: "Motion Graphics y VÃ­deo",
      intro: "Piezas animadas y contenido audiovisual diseÃ±ado para potenciar campaÃ±as digitales y redes sociales.",
      projects: [
        {
          video: "assets/video/motion/campana_renuevos.mp4",
          img: "assets/img/motion/campana_renuevos.jpg",
          title: "CampaÃ±a reNuevos",
          desc: "Pieza animada para la promociÃ³n de la campaÃ±a de dispositivos reacondicionados."
        },
        {
          video: "assets/video/motion/renuevos_video.mp4",
          img: "assets/img/motion/renuevos_video.jpg",
          title: "reNuevos â€” VersiÃ³n Extendida",
          desc: "VÃ­deo ampliado de la lÃ­nea reNuevos para reforzar la campaÃ±a en distintos formatos."
        },
        {
          video: "assets/video/motion/prueba_renuevos.mp4",
          img: "assets/img/motion/prueba_renuevos.jpg",
          title: "reNuevos â€” Prueba de Producto",
          desc: "Pieza de producto mostrando el proceso de revisiÃ³n y prueba de los dispositivos reNuevos."
        },
        {
          video: "assets/video/motion/campana_sv.mp4",
          img: "assets/img/motion/campana_sv.jpg",
          title: "CampaÃ±a San ValentÃ­n",
          desc: "Motion graphics de campaÃ±a estacional para San ValentÃ­n."
        },
        {
          video: "assets/video/motion/sanvalentin.mp4",
          img: "assets/img/motion/sanvalentin.jpg",
          title: "San ValentÃ­n â€” VÃ­deo Largo",
          desc: "VersiÃ³n extendida de la pieza audiovisual de la campaÃ±a de San ValentÃ­n."
        },
        {
          video: "assets/video/motion/internetdays.mp4",
          img: "assets/img/motion/internetdays.jpg",
          title: "Internet Days",
          desc: "AnimaciÃ³n promocional desarrollada para la campaÃ±a de Internet Days."
        },
        {
          video: "assets/video/motion/coches.mp4",
          img: "assets/img/motion/coches.jpg",
          title: "Coches",
          desc: "Pieza de motion graphics con temÃ¡tica de automÃ³viles para campaÃ±a digital."
        },
        {
          video: "assets/video/motion/ventana.mp4",
          img: "assets/img/motion/ventana.jpg",
          title: "Ventana",
          desc: "AnimaciÃ³n conceptual desarrollada como pieza creativa para redes sociales."
        },
        {
          video: "assets/video/motion/neon.mp4",
          img: "assets/img/motion/neon.jpg",
          title: "Neon",
          desc: "Motion graphics con estÃ©tica neon para campaÃ±a de impacto visual."
        },
        {
          video: "assets/video/motion/lava.mp4",
          img: "assets/img/motion/lava.jpg",
          title: "Lava",
          desc: "Pieza animada con efectos fluidos desarrollada para contenido de marca."
        },
        {
          video: "assets/video/motion/cierre_videos.mp4",
          img: "assets/img/motion/cierre_videos.jpg",
          title: "Cierre de CampaÃ±a",
          desc: "VÃ­deo de cierre utilizado como remate final en distintas piezas audiovisuales."
        }
		  
      ]
    },
    posters: {
      eyebrow: "CategorÃ­a Â· Posters",
      title: "Posters & GrÃ¡fica Impresa",
      intro: "SecciÃ³n en mantenimiento. Estoy actualizando el portfolio con los proyectos mÃ¡s recientes.",
      projects: [
        {
          img: "assets/img/en_obras.jpg", // <-- AquÃ­ pon la ruta de tu imagen estilo 'en obras'
          title: "SecciÃ³n en proceso de actualizaciÃ³n ðŸ› ï¸",
          desc: "Muy pronto podrÃ¡s ver los nuevos diseÃ±os de cartelerÃ­a y grÃ¡fica impresa."
        }
      ]
    },
    social: {
      eyebrow: "CategorÃ­a Â· Social Media",
      title: "Social Media & Banners",
      intro: "Â¡Me estÃ¡n actualizando! Estoy preparando los mejores contenidos para mostrarte.",
      projects: [
        {
          img: "assets/img/en_obras.jpg", // <-- Puedes usar la misma imagen o una diferente
          title: "Contenido en preparaciÃ³n ðŸš§",
          desc: "Estoy seleccionando las mejores piezas y campaÃ±as para redes sociales."
        }
      ]
    }
  };

  /* 3. Modal de proyectos (glassmorphism) */
  const modal = document.getElementById("categoryModal");
  const modalEyebrow = document.getElementById("modalEyebrow");
  const modalTitle = document.getElementById("modalTitle");
  const modalIntro = document.getElementById("modalIntro");
  const modalGallery = document.getElementById("modalGallery");
  const modalClose = document.getElementById("modalClose");

  function abrirModal(clave) {
    const data = categorias[clave];
    if (!data) return;

    modalEyebrow.textContent = data.eyebrow;
    modalTitle.textContent = data.title;
    modalIntro.textContent = data.intro;

    // Generar dinÃ¡micamente imÃ¡genes o vÃ­deos segÃºn lo configurado en cada proyecto
    modalGallery.innerHTML = data.projects.map(p => {
      let mediaHTML = "";
      if (p.video) {
        mediaHTML = `
          <div class="modal-glass__media" data-video-src="${p.video}">
            <video muted playsinline preload="metadata" poster="${p.img || ''}">
              <source src="${p.video}#t=0.5" type="video/mp4">
              Tu navegador no soporta la reproducciÃ³n de vÃ­deo.
            </video>
            <span class="modal-glass__play" aria-hidden="true">&#9658;</span>
          </div>`;
      } else {
        mediaHTML = `<img src="${p.img}" alt="${p.title}" loading="lazy">`;
      }

      return `
        <figure class="modal-glass__item">
          ${mediaHTML}
          <figcaption>
            <h4>${p.title}</h4>
            <p>${p.desc}</p>
          </figcaption>
        </figure>
      `;
    }).join("");

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function cerrarModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".cat-card").forEach(card => {
    card.addEventListener("click", () => {
      // Si estÃ¡ bloqueada, no abre el modal
      if (card.classList.contains("is-disabled")) return;
      abrirModal(card.dataset.categoria);
    });
    
    card.addEventListener("keydown", (e) => {
      if (card.classList.contains("is-disabled")) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        abrirModal(card.dataset.categoria);
      }
    });
  });

  modalClose.addEventListener("click", cerrarModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) cerrarModal(); });

  /* 4. Lightbox: ver imagen o vÃ­deo completo (sin recortar) al hacer clic */
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxVideo = document.getElementById("lightboxVideo");
  const lightboxClose = document.getElementById("lightboxClose");

  function abrirLightboxImagen(src, alt) {
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.remove("mode-video");
    lightbox.classList.add("mode-image", "is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function abrirLightboxVideo(src) {
    lightboxImg.src = "";
    lightboxVideo.src = src;
    lightbox.classList.remove("mode-image");
    lightbox.classList.add("mode-video", "is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lightboxVideo.currentTime = 0;
    lightboxVideo.play().catch(() => {});
  }

  function cerrarLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();
    document.body.style.overflow = "";
  }

  // DelegaciÃ³n de eventos: funciona tambiÃ©n con el contenido generado dinÃ¡micamente en el modal
  modalGallery.addEventListener("click", (e) => {
    const mediaWrap = e.target.closest(".modal-glass__media");
    if (mediaWrap) {
      abrirLightboxVideo(mediaWrap.dataset.videoSrc);
      return;
    }
    const img = e.target.closest("img");
    if (img) abrirLightboxImagen(img.src, img.alt);
  });

  lightboxClose.addEventListener("click", cerrarLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) cerrarLightbox(); });

  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (lightbox.classList.contains("is-open")) { cerrarLightbox(); return; }
    if (modal.classList.contains("is-open")) cerrarModal();
  });
})();
