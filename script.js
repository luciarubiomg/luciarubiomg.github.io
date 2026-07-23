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
          img: "assets/img/web/iphone16.jpg",
          title: "Lanzamiento iPhone 16 & Campaña reNuevos",
          desc: "Diseño de landing page promocional y arquitectura de catálogo en parrilla optimizada para e-commerce."
        },
        {
          img: "assets/img/web/samsung.jpg",
          title: "Galaxy Unpacked",
          desc: "Landing para evento en directo e integración de reproductor para streaming oficial."
        },
        {
          img: "assets/img/web/sorteo.jpg",
          title: "Captación de Leads: Sorteo & Calculadora",
          desc: "Diseño UX/UI de formularios dinámicos y landings para captación de usuarios."
        }
      ]
    },
    motion: {
      eyebrow: "Categoría · Motion Graphics y Vídeo",
      title: "Motion Graphics y Vídeo",
      intro: "Piezas animadas y contenido audiovisual diseñado para potenciar campañas digitales y redes sociales.",
      projects: [
        {
          // Puedes usar 'video' para archivos MP4 o 'img' si es una portada/gif
          video: "assets/video/motion/reel.mp4",
          img: "https://i.ibb.co/bMn9PvbZ/MOTION.png",
          title: "Motion para campaña",
          desc: "Animación 2D/3D desarrollada para redes sociales."
        },
        {
          img: "https://i.ibb.co/7t9XM03D/VIDEO.png",
          title: "Edición de vídeo promocional",
          desc: "Contenido audiovisual dinámico adaptado a formatos digitales."
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
          <video controls playsinline poster="${p.img || ''}">
            <source src="${p.video}" type="video/mp4">
            Tu navegador no soporta la reproducción de vídeo.
          </video>`;
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
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) cerrarModal();
  });
})();
