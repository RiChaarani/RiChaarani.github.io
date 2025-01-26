document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.projectCard');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it becomes visible
      }
    });
  }, {
    threshold: 0.5, // Trigger when at least 50% of the element is visible
  });

  projectCards.forEach(card => {
    observer.observe(card);
  });
});
