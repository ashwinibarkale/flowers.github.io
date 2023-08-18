// JavaScript function to handle scrolling and navigation
function navigateToSection(sectionId) {
    // Add your navigation logic here
  }
  
  // JavaScript function to handle navbar color change on scroll
  window.addEventListener("scroll", function () {
    var sections = document.querySelectorAll("section");
    var navbarItems = document.querySelectorAll(".navbar-nav .nav-link");
    
    sections.forEach(function (section, index) {
      var rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        navbarItems.forEach(function (item) {
          item.classList.remove("active");
        });
        navbarItems[index].classList.add("active");
      }
    });
  });
  
  // JavaScript function to toggle the navigation menu
  function toggleMenu() {
    var menu = document.getElementById("navbarNav");
    menu.classList.toggle("show");
  }
  
  // Close the navigation menu when clicking a link
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      var menu = document.getElementById("navbarNav");
      menu.classList.remove("show");
    });
  });
  
  // Close the navigation menu when clicking outside
  window.addEventListener("click", function (event) {
    var menu = document.getElementById("navbarNav");
    var button = document.querySelector(".navbar-toggler");
    
    if (!menu.contains(event.target) && !button.contains(event.target)) {
      menu.classList.remove("show");
    }
  });
  




  