const karyaImages = document.querySelectorAll('.karya img');

karyaImages.forEach(image => {
  image.addEventListener('mouseenter', function() {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.3s ease';
  });

  image.addEventListener('mouseleave', function() {
    image.style.transform = 'scale(1)';
  });
});

const karyaSections = document.querySelectorAll('.karya');
const observerOptions = {
  root: null,  
  threshold: 0.5,  
};

const karyaObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

karyaSections.forEach(karya => {
  karyaObserver.observe(karya);
});