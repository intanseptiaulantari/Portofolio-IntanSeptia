const sections = document.querySelectorAll('.section');
const observerOptions = {
  root: null,  
  threshold: 0.5,  
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});

const socialIcons = document.querySelectorAll('.icons a img');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
  });
  
  icon.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});


