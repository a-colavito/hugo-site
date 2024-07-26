document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.getElementById('navbar-toggler');
    var navbarIcon = navbarToggler.querySelector('.navbar-toggler-icon');
    var closeIcon = navbarToggler.querySelector('.navbar-toggler-close-icon');
  
    navbarToggler.addEventListener('click', function() {
      var isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
      navbarIcon.style.display = isExpanded ? 'block' : 'none';
      closeIcon.style.display = isExpanded ? 'none' : 'block';
    });
  });
  