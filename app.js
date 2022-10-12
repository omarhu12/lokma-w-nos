const menuBtn = document.querySelector(".hamburger");
const navUl = document.querySelector("ol");

const txt = document.querySelector(".txtBlock");


menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  txt.classList.toggle("remove");
});

menuBtn.addEventListener("click", function () {
  navUl.classList.toggle("active");
});
