let count = 0;

const value = document.querySelector("#value");
console.log(value);

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const element = e.currentTarget.classList;
    if (element.contains("btn-decrease")) {
      count--;
    } else if (element.contains("btn-increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
