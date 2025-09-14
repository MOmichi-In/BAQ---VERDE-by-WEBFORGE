// NO FUNCIONÓÓÓÓÓ

// export function initCarousel(rootSelector = '.carousel') {
//   // console.log("[carousel] initCarousel running...");
//   document.querySelectorAll(rootSelector).forEach((carousel) => {
//     const wrapper = carousel.querySelector('.cards-wrapper');
//     const prevBtn = carousel.querySelector('.prevBtn');
//     const nextBtn = carousel.querySelector('.nextBtn');
//     const controls = carousel.querySelector('.carousel-controls');

//     let currentIndex = 0;

//     function getCardWidth() {
//       const firstCard = wrapper.querySelector('.card-container');
//       return firstCard ? firstCard.offsetWidth : 0;
//     }

//     function visibleCount() {
//       const cw = getCardWidth();
//       if (!cw) return 1;
//       return Math.max(1, Math.floor(wrapper.clientWidth / cw));
//     }

//     function updateCarousel() {
//       const cardWidth = getCardWidth();
//       const offset = -(currentIndex * cardWidth);
//       wrapper.style.transform = `translateX(${offset}px)`;
//     }

//     function checkMode() {
//       if (window.innerWidth > 900) {
//         if (controls) controls.style.display = 'flex';
//         wrapper.style.transition = 'transform 0.4s ease-in-out';

//         const maxIndex = wrapper.children.length - visibleCount();
//         currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
//         updateCarousel();
//       } else {
//         if (controls) controls.style.display = 'none';
//         wrapper.style.transition = 'none';
//         wrapper.style.transform = 'none';

//         const cardW = getCardWidth();
//         wrapper.scrollLeft = currentIndex * cardW;
//       }
//     }

//     // --- Botón siguiente ---
//     nextBtn?.addEventListener('click', () => {
//       const maxIndex = wrapper.children.length - visibleCount();
//       if (currentIndex < maxIndex) {
//         currentIndex++; // avanzar de 1 en 1
//         updateCarousel();
//       }
//     });

//     // --- Botón anterior ---
//     prevBtn?.addEventListener('click', () => {
//       if (currentIndex > 0) {
//         currentIndex--; // retroceder de 1 en 1
//         updateCarousel();
//       }
//     });

//     let resizeTimeout;
//     window.addEventListener('resize', () => {
//       clearTimeout(resizeTimeout);
//       resizeTimeout = setTimeout(checkMode, 120);
//     });

//     carousel.querySelectorAll('img').forEach(img => {
//       if (img.complete) return;
//       img.addEventListener('load', checkMode);
//     });

//     checkMode();
//   });
// }

// initCarousel();
