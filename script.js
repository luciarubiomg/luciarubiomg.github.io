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

  /* 2. Contenido de cada categoría de proyectos */
  const categorias = {
    web: {
      eyebrow: "Categoría · Web & UX/UI",
      title: "Web & Landing Pages",
      intro: "Landing pages y sitios pensados para convertir, optimizando la experiencia de usuario y el rendimiento comercial.",
      projects: [
        {
          img: "assets/img/web/iphone16.png",
          title: "Lanzamiento iPhone 16",
          desc: "Landing de producto con selector de almacenamiento por modelo, pensada para maximizar la conversión."
        },
        {
          img: "assets/img/web/renuevos.png",
          title: "reNuevos · iPhone Top Reacondicionados",
          desc: "Landing de catálogo con parrilla de producto, sellos promocionales y bloque informativo de marca."
        },
        {
          img: "assets/img/web/samsung.png",
          title: "Galaxy Unpacked",
          desc: "Landing para evento en directo e integración de reproductor para streaming oficial."
        },
        {
          img: "assets/img/web/sorteo.png",
          title: "Sorteo Aniversario reNuevos",
          desc: "Landing de captación de leads con formulario de suscripción a newsletter."
        },
        {
          img: "assets/img/web/ahorro.png",
          title: "Calculadora de Ahorro",
          desc: "Formulario de captación con carga de factura para estimar el ahorro personalizado del cliente."
        }
      ]
    },
    motion: {
      eyebrow: "Categoría · Motion Graphics y Vídeo",
      title: "Motion Graphics y Vídeo",
      intro: "Piezas animadas y contenido audiovisual diseñado para potenciar campañas digitales y redes sociales.",
      projects: [
        {
          video: "assets/video/motion/campana_renuevos.mp4",
          img: "assets/img/motion/campana_renuevos.jpg",
          title: "Campaña reNuevos",
          desc: "Pieza animada para la promoción de la campaña de dispositivos reacondicionados."
        },
        {
          video: "assets/video/motion/renuevos_video.mp4",
          img: "assets/img/motion/renuevos_video.jpg",
          title: "reNuevos — Versión Extendida",
          desc: "Vídeo ampliado de la línea reNuevos para reforzar la campaña en distintos formatos."
        },
        {
          video: "assets/video/motion/prueba_renuevos.mp4",
          img: "assets/img/motion/prueba_renuevos.jpg",
          title: "reNuevos — Prueba de Producto",
          desc: "Pieza de producto mostrando el proceso de revisión y prueba de los dispositivos reNuevos."
        },
        {
          video: "assets/video/motion/campana_sv.mp4",
          img: "assets/img/motion/campana_sv.jpg",
          title: "Campaña San Valentín",
          desc: "Motion graphics de campaña estacional para San Valentín."
        },
        {
          video: "assets/video/motion/sanvalentin.mp4",
          img: "assets/img/motion/sanvalentin.jpg",
          title: "San Valentín — Vídeo Largo",
          desc: "Versión extendida de la pieza audiovisual de la campaña de San Valentín."
        },
        {
          video: "assets/video/motion/internetdays.mp4",
          img: "assets/img/motion/internetdays.jpg",
          title: "Internet Days",
          desc: "Animación promocional desarrollada para la campaña de Internet Days."
        },
        {
          video: "assets/video/motion/coches.mp4",
          img: "assets/img/motion/coches.jpg",
          title: "Coches",
          desc: "Pieza de motion graphics con temática de automóviles para campaña digital."
        },
        {
          video: "assets/video/motion/ventana.mp4",
          img: "assets/img/motion/ventana.jpg",
          title: "Ventana",
          desc: "Animación conceptual desarrollada como pieza creativa para redes sociales."
        },
        {
          video: "assets/video/motion/neon.mp4",
          img: "assets/img/motion/neon.jpg",
          title: "Neon",
          desc: "Motion graphics con estética neon para campaña de impacto visual."
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
          title: "Cierre de Campaña",
          desc: "Vídeo de cierre utilizado como remate final en distintas piezas audiovisuales."
        },
        {
          video: "assets/video/motion/anuncio_acho.mp4",
          img: "assets/img/motion/anuncio_acho.jpg",
          title: "Anuncio Acho",
          desc: "Spot publicitario animado desarrollado para campaña de marca."
        },
        {
          video: "assets/video/motion/anuncio_opticalia.mp4",
          img: "assets/img/motion/anuncio_opticalia.jpg",
          title: "Anuncio Opticalia — Comparativa",
          desc: "Pieza publicitaria con formato comparativo para campaña de producto."
        },
        {
          video: "assets/video/motion/rrss_2.mp4",
          img: "assets/img/motion/rrss_2.jpg",
          title: "Pieza para Redes Sociales",
          desc: "Vídeo en formato vertical adaptado para consumo en redes sociales."
        },
        {
          video: "assets/video/motion/videoclip_imagine_dragons.mp4",
          img: "assets/img/motion/videoclip_imagine_dragons.jpg",
          title: "Videoclip — Imagine Dragons",
          desc: "Edición y montaje audiovisual sincronizado con música de Imagine Dragons."
        }
      ]
    },
    posters: {
      eyebrow: "Categoría · Posters",
      title: "Posters & Gráfica Impresa",
      intro: "Cartelería y piezas gráficas clave para campañas promocionales e identidad visual.",
      projects: [
        {
          img: "https://i.ibb.co/Fkjtcr2M/POSTERS.png",
          title: "Serie de carteles promocionales",
          desc: "Campaña visual con aplicación gráfica en gran formato."
        }
      ]
    },
    social: {
      eyebrow: "Categoría · Social Media",
      title: "Social Media & Banners",
      intro: "Identidad visual, set de banners y contenido dinámico diseñado para maximizar el engagment en redes.",
      projects: [
        {
          img: "https://i.ibb.co/KcTtZWtV/BRANDING.png",
          title: "Identidad de marca en redes",
          desc: "Sistema visual unificado y adaptaciones multicanal."
        },
        {
          img: "https://i.ibb.co/vCLfhWNV/IA.png",
          title: "Contenido creativo & Ads",
          desc: "Piezas visuales y banners publicitarios enfocados en CTR."
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

    // Generar dinámicamente imágenes o vídeos según lo configurado en cada proyecto
    modalGallery.innerHTML = data.projects.map(p => {
      let mediaHTML = "";
      if (p.video) {
        mediaHTML = `
          <div class="modal-glass__media" data-video-src="${p.video}">
            <video muted playsinline preload="metadata" poster="${p.img || ''}">
              <source src="${p.video}#t=0.5" type="video/mp4">
              Tu navegador no soporta la reproducción de vídeo.
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
    card.addEventListener("click", () => abrirModal(card.dataset.categoria));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        abrirModal(card.dataset.categoria);
      }
    });
  });

  modalClose.addEventListener("click", cerrarModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) cerrarModal(); });

  /* 4. Lightbox: ver imagen o vídeo completo (sin recortar) al hacer clic */
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

  // Delegación de eventos: funciona también con el contenido generado dinámicamente en el modal
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