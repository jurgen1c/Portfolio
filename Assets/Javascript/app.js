// Intro Animation --------------------------------------
function introAnimation() {
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
  }, 4300)
  .add({
    targets: '.intro-wrap',
    opacity: [0, 1]
  }, 4500);
}


// Form animation ----------------------------------

/* document.querySelector('body').addEventListener('mousemove', squareMove);

function squareMove(){
  let square = document.querySelectorAll('.form-square');
  square.forEach(function(square){
    let x = (square.getBoundingClientRect().left) + (square.clientWidth / 2);
    let y = (square.getBoundingClientRect().right) + (square.clientHeight / 2);
    let radian = Math.atan2(target.pageX - x , target.pageY - y);
    let rot = (radian * (180 / Math.PI) * -1) + 270;
    square.style.transform = "rotate(" + rot + "deg)";
  });
} */

let path = anime.path("#form-path path");
anime({
  targets: '.form-square',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  delay: anime.stagger(500),
  rotate: '1turn',
  easing: 'linear',
  duration: 10500,
  loop: true
});


/* document.querySelector('#contact-form').addEventListener('focus', function(e){
  anime({
    tagerts: '.form-morph',
    strokeDashoffset: [anime.setDashoffset, 0]
  });
}); */

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
/* window.onclick = function(event) {
  if (event.target == cmodal) {
    cmodal.style.display = "none";
  }
} */

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

// ITTC Modal & Slider ------------------------------------------

var imodal = document.getElementById("ittcModal");
var ibtn = document.getElementById("ittcBtn");
var ispan = document.getElementsByClassName("ittc-close")[0];

// Get the modal

// When the user clicks on the button, open the modal
ibtn.onclick = function() {
  imodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ispan.onclick = function() {
  imodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/* window.onclick = function(event) {
  if (event.target == imodal) {
    imodal.style.display = "none";
  }
} */

var islideIndex = 1;
showSlidesI(islideIndex);

function plusSlidesI(n) {
  showSlidesI(islideIndex += n);
}

function currentSlideI(n) {
  showSlidesI(islideIndex = n);
}

function showSlidesI(n) {
  var i;
  var slides = document.getElementsByClassName("ittcSlides");
  var dots = document.getElementsByClassName("ittc-dot");
  if (n > slides.length) {islideIndex = 1}
    if (n < 1) {islideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[islideIndex-1].style.display = "block";
  dots[islideIndex-1].className += " active";
}

// Invaders Modal & Slider ------------------------------------------

var simodal = document.getElementById("invadersModal");
var sibtn = document.getElementById("invadersBtn");
var sispan = document.getElementsByClassName("invaders-close")[0];

// Get the modal

// When the user clicks on the button, open the modal
sibtn.onclick = function() {
  simodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
sispan.onclick = function() {
  simodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/* window.onclick = function(event) {
  if (event.target == simodal) {
    simodal.style.display = "none";
  }
} */

var sislideIndex = 1;
showSlidesSi(sislideIndex);

function plusSlidesSi(n) {
  showSlidesSi(sislideIndex += n);
}

function currentSlideSi(n) {
  showSlidesSi(sislideIndex = n);
}

function showSlidesSi(n) {
  var i;
  var slides = document.getElementsByClassName("invadersSlides");
  var dots = document.getElementsByClassName("invaders-dot");
  if (n > slides.length) {sislideIndex = 1}
    if (n < 1) {sislideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[sislideIndex-1].style.display = "block";
  dots[sislideIndex-1].className += " active";
}

// Etnias Modal & Slider ------------------------------------------

var emodal = document.getElementById("etniasModal");
var ebtn = document.getElementById("etniasBtn");
var espan = document.getElementsByClassName("etnias-close")[0];

// Get the modal

// When the user clicks on the button, open the modal
ebtn.onclick = function() {
  emodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
espan.onclick = function() {
  emodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/* window.onclick = function(event) {
  if (event.target == emodal) {
    emodal.style.display = "none";
  }
} */

var eslideIndex = 1;
showSlidesE(eslideIndex);

function plusSlidesE(n) {
  showSlidesE(eslideIndex += n);
}

function currentSlideE(n) {
  showSlidesE(eslideIndex = n);
}

function showSlidesE(n) {
  var i;
  var slides = document.getElementsByClassName("etniasSlides");
  var dots = document.getElementsByClassName("etnias-dot");
  if (n > slides.length) {eslideIndex = 1}
    if (n < 1) {eslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[eslideIndex-1].style.display = "block";
  dots[eslideIndex-1].className += " active";
}

// Vianda Modal & Slider ------------------------------------------

var vmodal = document.getElementById("viandaModal");
var vbtn = document.getElementById("viandaBtn");
var vspan = document.getElementsByClassName("vianda-close")[0];

// Get the modal

// When the user clicks on the button, open the modal
vbtn.onclick = function() {
  vmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
vspan.onclick = function() {
  vmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == tmodal) {
    tmodal.style.display = "none";
  } else if (event.target == cmodal){
    cmodal.style.display = "none";
  } else if (event.target == imodal) {
    imodal.style.display = "none";
  } else if (event.target == simodal) {
    simodal.style.display = "none";
  } else if (event.target == emodal) {
    emodal.style.display = "none";
  } else if (event.target == vmodal) {
    vmodal.style.display = "none";
  }
}

var vslideIndex = 1;
showSlidesV(vslideIndex);

function plusSlidesV(n) {
  showSlidesV(vslideIndex += n);
}

function currentSlideV(n) {
  showSlidesV(vslideIndex = n);
}

function showSlidesV(n) {
  var i;
  var slides = document.getElementsByClassName("viandaSlides");
  var dots = document.getElementsByClassName("vianda-dot");
  if (n > slides.length) {eslideIndex = 1}
    if (n < 1) {vslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[vslideIndex-1].style.display = "block";
  dots[vslideIndex-1].className += " active";
}