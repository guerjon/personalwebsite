document.addEventListener('DOMContentLoaded', function () {
  // Animate the navigation bar
  gsap.from('nav', {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: 'power2.out',
  });

  // Animate the header text
  gsap.from('header h1, header h2', {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.3,
      ease: 'power2.out',
  });
});