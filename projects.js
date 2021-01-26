// let pico = document.getElementById("pico");
// let fizz =  document.getElementById("fizz");
// let epilepsy = document.getElementById("epilepsy");
// pico.addEventListener("mouseover", function(event) {
//   console.log("hello");
//   document.imgCode.src="pico-herbe.png"
// });
// fizz.addEventListener("mouseover", function(event) {
//   document.imgCode.src="fizzbuzz.png"
// });
// epilepsy.addEventListener("mouseover", function(event) {
//   document.imgCode.src="codepilepsy.png"
// });
// function openNav() {
//     document.getElementById("sideNavigation").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }
//
// function closeNav() {
//     document.getElementById("sideNavigation").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
// }
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";

  }
  slides[slideIndex-1].style.display = "block";
}
