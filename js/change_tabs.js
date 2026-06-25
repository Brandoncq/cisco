/* =====================================================
   change_tabs.js - Funcionalidades de la ficha de producto
   ===================================================== */

(function () {
  "use strict";

  /* ---------- Galería / Modal de imágenes ---------- */
  function viewImage(src) {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    if (!modal || !modalImage) return;
    modalImage.src = src;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = document.getElementById("image-modal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  }

  function toExchangeImage(el) {
    const main = document.getElementById("img_main");
    if (main && el && el.src) {
      main.src = el.src;
      main.alt = el.alt || "Imagen del producto";
    }
  }

  /* Cierre del modal: backdrop, X y tecla ESC */
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("image-modal");
    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  });

  /* Exponer funciones al ámbito global (uso inline en HTML) */
  window.viewImage = viewImage;
  window.closeModal = closeModal;
  window.toExchangeImage = toExchangeImage;

  /* ---------- Tabs Producto / Imágenes ---------- */
  function initTabs() {
    const productTab = document.getElementById("product-tab");
    const imagesTab = document.getElementById("images-tab");
    const infoSection = document.getElementById("information-section");
    const imagesSection = document.getElementById("images-section");

    if (!productTab || !imagesTab) return;

    function activate(tab) {
      const isProduct = tab === productTab;

      productTab.classList.toggle("bg-blue-600", isProduct);
      productTab.classList.toggle("text-white", isProduct);
      productTab.classList.toggle("bg-gray-100", !isProduct);
      productTab.classList.toggle("text-gray-700", !isProduct);

      imagesTab.classList.toggle("bg-blue-600", !isProduct);
      imagesTab.classList.toggle("text-white", !isProduct);
      imagesTab.classList.toggle("bg-gray-100", isProduct);
      imagesTab.classList.toggle("text-gray-700", isProduct);

      if (infoSection) {
        infoSection.classList.toggle("hidden", !isProduct);
      }
      if (imagesSection) {
        imagesSection.classList.toggle("hidden", isProduct);
      }
    }

    productTab.addEventListener("click", () => activate(productTab));
    imagesTab.addEventListener("click", () => activate(imagesTab));
  }

  /* ---------- Smooth scroll para anclas internas ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.length > 1) {
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    });
  }

  /* ---------- Inicialización ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initTabs();
    initSmoothScroll();
  });
})();