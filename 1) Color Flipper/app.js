const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let result = colors[Math.floor(Math.random() * colors.length)];
  console.log(result);
  document.body.style.background = result;
  color.textContent = result;
});
