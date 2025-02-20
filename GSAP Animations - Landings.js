// Sélectionner les éléments
const BadgeComponent = document.querySelector('.landing-header');
const HeaderComponent = document.querySelector('.landing-header_content-component');

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

gsap.to('.header-landing-page_collection-list-top', {
  x: '-10%', // Translation sur X vers la gauche
  ease: 'none', // Animation linéaire
  scrollTrigger: {
    trigger: '.header-landing-page_product-wrapper', // Élément déclencheur
    start: 'top bottom', // Début de l'animation
    end: 'bottom top', // Fin de l'animation
    scrub: true, // Animation synchronisée avec le scroll
    markers: false, // Optionnel : Marqueurs pour debug
  },
});

gsap.to('.header-landing-page_collection-list-bottom', {
  x: '10%', // Translation sur X vers la droite
  ease: 'none', // Animation linéaire
  scrollTrigger: {
    trigger: '.header-landing-page_product-wrapper', // Élément déclencheur
    start: 'top bottom', // Début de l'animation
    end: 'bottom top', // Fin de l'animation
    scrub: true, // Animation synchronisée avec le scroll
    markers: false, // Optionnel : Marqueurs pour debug
  },
});
