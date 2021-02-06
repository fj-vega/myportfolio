(() => {
    
  /**
   * Hamburger menu toggle
   */

  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', toggleNavbar);

  function toggleNavbar() {
    hamburger.classList.toggle('cross');
    document.querySelector('.navbar').classList.toggle('show');
  }

  // Close navbar after clicking a link
  document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', toggleNavbar);
  });

})();
