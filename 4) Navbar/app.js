// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
console.log(links);

navToggle.addEventListener("click", function () {
  // const check = links.classList.contains("show-links");
  // if (!check) {
  //   links.classList.add("show-links");
  // }
  // if (check) {
  //   links.classList.remove("show-links");
  // }
  links.classList.toggle("show-links");
});
