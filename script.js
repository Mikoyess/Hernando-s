document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('nav a.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        highlightSection(targetSection);
      }
    });
  });

  function highlightSection(section) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('highlight-section'));
    section.classList.add('highlight-section');
    setTimeout(() => section.classList.remove('highlight-section'), 1100);
  }

  // Menu item click scroll + image highlight
  document.querySelectorAll('.menu-item').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetImage = document.getElementById(targetId);
      if (targetImage) {
        e.preventDefault();
        targetImage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetImage.classList.add('highlight-img');
        setTimeout(() => targetImage.classList.remove('highlight-img'), 700);
      }
    });
  });

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = lightbox.querySelector('img');
  const galleryImages = document.querySelectorAll('.gallery-container img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightbox.classList.add('show');
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImage) {
      lightbox.classList.remove('show');
      setTimeout(() => {
        lightbox.style.display = 'none';
        lightboxImage.src = '';
        document.body.style.overflow = 'auto';
      }, 300);
    }
  });
});
