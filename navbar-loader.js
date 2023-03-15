// navbar-loader.js

// Load the contents of the "navbar.html" file
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    // Insert the contents into the "navbar" div
    document.getElementById("navbar-placeholder").innerHTML = data;
  });

  const hideElement = () => {
    if (window.location.pathname === '/index.html') {
      const elementToHide = document.querySelector('#brand');
      if (elementToHide) {
        elementToHide.style.display = 'none';
      }
    }
  }
  