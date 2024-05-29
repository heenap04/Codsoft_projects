function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.querySelector('a[href="#cv"]').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#cv').scrollIntoView({
    behavior: 'smooth'
  });
});