// Sélectionner les éléments
const BadgeComponent = document.querySelector('.header_badge-layout');
const HeaderComponent = document.querySelector('.marketplace-header_content-component');

// Initialiser les styles avec GSAP
gsap.set([BadgeComponent, HeaderComponent], { visibility: "visible", opacity: 0, y: 100 });

// Animation pour HeaderComponent
gsap.to(HeaderComponent, {
  opacity: 1, // Rendre visible
  y: 0, // Position finale
  duration: 0.8, // Durée de l'animation
  ease: "power2.out",
  delay: 0.5, // Délai avant le démarrage
});

// Animation pour BadgeComponent
gsap.to(BadgeComponent, {
  opacity: 1, // Rendre visible
  y: 0, // Position finale
  duration: 0.8, // Durée de l'animation
  ease: "power2.out",
  delay: 0.3, // Délai avant le démarrage
});

// Animation au scroll pour .product-marketplace_collection-list-top et .product-marketplace_collection-list-bottom
gsap.registerPlugin(ScrollTrigger);

gsap.to('.header-marketplace_collection-list-top', {
  x: '-10%', // Translation sur X vers la gauche
  ease: 'none', // Animation linéaire
  scrollTrigger: {
    trigger: '.header-marketplace_products-wrapper', // Élément déclencheur
    start: 'top bottom', // Début de l'animation
    end: 'bottom top', // Fin de l'animation
    scrub: true, // Animation synchronisée avec le scroll
    markers: false, // Optionnel : Marqueurs pour debug
  },
});

gsap.to('.header-marketplace_collection-list-bottom', {
  x: '10%', // Translation sur X vers la droite
  ease: 'none', // Animation linéaire
  scrollTrigger: {
    trigger: '.header-marketplace_products-wrapper', // Élément déclencheur
    start: 'top bottom', // Début de l'animation
    end: 'bottom top', // Fin de l'animation
    scrub: true, // Animation synchronisée avec le scroll
    markers: false, // Optionnel : Marqueurs pour debug
  },
});

// Testimonies component animation
gsap.registerPlugin(ScrollTrigger);

// Applique l'animation seulement si l'écran est > 479px
ScrollTrigger.matchMedia({
  "(min-width: 480px)": function () {
    gsap.to(".testimonies-component_list", {
      y: (index, target) => {
        return ["-9rem", "-2rem", "-9rem", "-2rem"][index];
      },
      scrollTrigger: {
        trigger: ".section_testimonies-component",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
  }
});
