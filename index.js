var navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and add a click event listener
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // Remove 'active' class from all links
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});