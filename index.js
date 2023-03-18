// Load the contents of the "navbar.html" file

fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    // Insert the contents into the "navbar" div
    document.getElementById("navbar-placeholder").innerHTML = data;
  });


  fetch("projects.html")
  .then(response => response.text())
  .then(data => {
    // Insert the contents into the "navbar" div
    document.getElementById("projects-placeholder").innerHTML = data;
  });

/* Resume Fix */

const firstButton = document.querySelector(".first-button");

let firstContainer = document.createElement("div");
let h4_first = document.createElement("h4");
h4_first.innerText = "Carfixsg.co";
let p_first = document.createElement("p");
p_first.innerText = "DevOps Tech Lead | April 2021 - July 2021";
firstContainer.appendChild(h4_first);
firstContainer.appendChild(p_first);
firstButton.appendChild(firstContainer);


const secondButton = document.querySelector(".second-button");

let secondContainer = document.createElement("div");
let h4_second = document.createElement("h4");
h4_second.innerText = "TUNE Inc.";
let p_second = document.createElement("p");
p_second.innerText = "Software Escalations Engineer | April 2018 - May 2020";
secondContainer.appendChild(h4_second);
secondContainer.appendChild(p_second);
secondButton.appendChild(secondContainer);


const thirdButton = document.querySelector(".third-button");

let thirdContainer = document.createElement("div");
let h4_third = document.createElement("h4");
h4_third.innerText = "Reverba";
let p_third = document.createElement("p");
p_third.innerText = "Software Developer Intern | November 2017 - March 2018";
thirdContainer.appendChild(h4_third);
thirdContainer.appendChild(p_third);
thirdButton.appendChild(thirdContainer);

/* Functions */
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  
  function setAttributes(element, attributes) {
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }
  
  function setStyles(element, styles) {
    for (let property in styles) {
      element.style[property] = styles[property];
    }
  }