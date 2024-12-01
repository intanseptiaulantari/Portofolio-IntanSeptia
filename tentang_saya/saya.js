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

const profileImage = document.querySelector('.about_img img');

if (profileImage) {
  profileImage.addEventListener('mouseenter', function() {
    profileImage.style.transform = 'scale(1.1)';
    profileImage.style.transition = 'transform 0.3s ease';
  });

  profileImage.addEventListener('mouseleave', function() {
    profileImage.style.transform = 'scale(1)';
  });
}
