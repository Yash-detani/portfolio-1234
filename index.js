let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
// Side Navigation Menu
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
  link.href = "Yash's Resume"; // Replace with path to your resume file
  link.download = "Yash_Resume.pdf"; // Rename the file for user
  link.click();
});