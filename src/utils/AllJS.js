export const initScrollAnimations = () => {
  const fadeInUpElements = document.querySelectorAll(".fadeInUp");
  const animatedFadeUpElements = document.querySelectorAll(".animated-fade-up");
  const fadeUpElements = document.querySelectorAll(".fade-up");

  const observerOptions = { threshold: 0.2 };

  // FadeInUp Observer
  const fadeInUpObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  fadeInUpElements.forEach((el) => fadeInUpObserver.observe(el));

  // Animated fade up observer
  const animatedFadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, observerOptions);

  animatedFadeUpElements.forEach((el) => animatedFadeUpObserver.observe(el));

  // Fade-up observer with unobserve
  const fadeUpObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeUpElements.forEach((el) => fadeUpObserver.observe(el));
};
