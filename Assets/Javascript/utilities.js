class Modal {
  constructor(modal, btn, span) {
    this.modal = modal;
    this.btn = btn;
    this.span = span;
  }

  open(){
    this.btn.onclick = function(){
      this.modal.style.display = "block";
    }
  }

  spanClose(){
    this.span.onclick = function() {
      this.modal.style.display = "none";
    }
  }

  outClick(){
    window.onclick = function(event){
      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    }
  }
}

/* // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */

class Slider {
  constructor(slideIndex, slides, dots) {
    this.slideIndex = slideIndex;
    this.slides = slides;
    this.dots = dots;
  }
}

/* var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
} */

export {Modal, Slider};