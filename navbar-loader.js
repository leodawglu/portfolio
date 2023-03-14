// navbar-loader.js

// Load the contents of the "navbar.html" file
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    // Insert the contents into the "navbar" div
    document.getElementById("navbar-placeholder").innerHTML = data;
  });