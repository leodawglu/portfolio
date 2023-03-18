const aboutSection = document.querySelector(".about");

let gridContainer = document.createElement("div");
let pictureContainer = document.createElement("div");
let paraContainer = document.createElement("div");

let pictureElement = document.createElement("img");
setAttributes(pictureElement, {
    class: "about-img img-fluid",
    src: "./images/IMG_7026_square.jpg",
    alt: "Leo Lu portrait",
    title:
    "Leo Lu at Budva beach standing infront of the sea with Budva Citadel in the background, on a sunny day.",
});

setAttributes(gridContainer,{
    class: "row py-4"
});
setAttributes(pictureContainer,{
    class: "picture-container col-md-6 py-3"
});
setAttributes(paraContainer,{
    class: "paragraph-container col-md-6 mt-3"
});


let pElement = document.createElement("p");
let spanElement = document.createElement("span");

setAttributes(pElement,{
    class: "paragraph"
});

setAttributes(spanElement,{
    class: "para-first-line"
});
spanElement.innerText =
  "< Hello World. I'm Leo. /> \n";

pElement.appendChild(spanElement);
pElement.insertAdjacentText(
  "beforeend",
  "I'm currently a Graduate student at Portland State University studying Computer Science. \n"+
  "Prior to grad school, I worked a few years in the industry exploring my interests while making fun software. \n" +
  "I have extensive knowledge in marketing attribution analytics, and backend engineering.\n"+
  "I plan to learn more about AI/ML at PSU, and contribute meaningfully to the society with the skills I acquire.\n" +
  "Besides school, I like to get down and dirty breaking out the tools to work on my car. \n" + 
  "I also like to cook, though I can't claim to be good at it!"
);

/*Set Parent-child relationship for elements */
aboutSection.appendChild(gridContainer);
gridContainer.appendChild(pictureContainer);
pictureContainer.appendChild(pictureElement);
gridContainer.appendChild(paraContainer);
paraContainer.appendChild(pElement);

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