
var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 2500
});

// Add children
tl
.add({
  targets: '.text',
  translateY: ['100%', '0%']
})
.add({
  targets: '.slider',
  translateY: ['100%', '-100%'],
})
.add({
  targets: '.intro-ani',
  translateY: ['0%', '-100%']
}, 2700)
.add({
  targets: 'nav',
  translateX: ['-100%', '0%']
})
.add({
  targets: '.intro-wrap',
  opacity: [0, 1]
}, 5800);

// T-bot modal and Slider --------------------------------------------

var tmodal = document.getElementById("t-botModal");
var tbtn = document.getElementById("t-botBtn");
var tspan = document.getElementsByClassName("t-bot-close")[0];

// Get the modal

// When the user clicks on the button, open the modal
tbtn.onclick = function() {
  tmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
tspan.onclick = function() {
  tmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == tmodal) {
    tmodal.style.display = "none";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("t-botSlides");
  var dots = document.getElementsByClassName("t-bot-dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// CSM Modal & Slider ------------------------------------------

var cmodal = document.getElementById("csmModal");
var cbtn = document.getElementById("csmBtn");
var cspan = document.getElementsByClassName("csm-close")[0];

// Get the modal

// When the user clicks on the button, open the modal
cbtn.onclick = function() {
  cmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cspan.onclick = function() {
  cmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == cmodal) {
    cmodal.style.display = "none";
  }
}

var cslideIndex = 1;
showSlidesC(cslideIndex);

function plusSlidesC(n) {
  showSlidesC(cslideIndex += n);
}

function currentSlideC(n) {
  showSlidesC(cslideIndex = n);
}

function showSlidesC(n) {
  var i;
  var slides = document.getElementsByClassName("csmSlides");
  var dots = document.getElementsByClassName("csm-dot");
  if (n > slides.length) {cslideIndex = 1}
    if (n < 1) {cslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[cslideIndex-1].style.display = "block";
  dots[cslideIndex-1].className += " active";
}
