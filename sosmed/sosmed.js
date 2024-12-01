const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const postBtn = document.getElementById('postBtn');
const postContent = document.getElementById('postContent');

postBtn.addEventListener('click', () => {
  if (postContent.value.trim() !== "") {
    alert("Post terkirim: " + postContent.value);
    postContent.value = ""; 
  } else {
    alert("Tulis sesuatu sebelum mengirim.");
  }
});
