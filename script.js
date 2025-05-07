const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('muncul');
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('sembunyi');
    observer.observe(section);
  });
  