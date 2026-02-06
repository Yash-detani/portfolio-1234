let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

var typed = new Typed('.element', {
    strings: ["Web Developer", "Python Programmer" , "DSA Enthusiast"],
    typeSpeed: 30
    });

var typed1 = new Typed('.')

document.getElementById("download_btn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "Yash's Resume"; 
  link.download = "Yash_Detani_resume.pdf"; 
  link.click();

});
