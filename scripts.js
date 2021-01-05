(function() {
  window.addEventListener('load', function() {
    // declare the height array here since we need it
    // inside multiple functions
    var elementHeightArray = [],
      // convert the collection into an array so we can forEach() over it
      elementArray = [].slice.call(document.querySelectorAll('.thumbnail'));
    elementArray.forEach(function(i) {
      elementHeightArray.push(i.clientHeight);
    });
    // get the tallest height
    var maxElementHeight = Math.max.apply(Math, elementHeightArray);
    // apply that height to all elements
    elementArray.forEach(function(i) {
      i.style.height = maxElementHeight + "px";
    });
  });
})();
(function() {
  window.addEventListener('load', function() {
    // declare the height array here since we need it
    // inside multiple functions
    var elementHeightArray = [],
      // convert the collection into an array so we can forEach() over it
      elementArray = [].slice.call(document.querySelectorAll('.slide'));
    elementArray.forEach(function(i) {
      elementHeightArray.push(i.clientHeight);
    });
    // get the tallest height
    var maxElementHeight = Math.max.apply(Math, elementHeightArray);
    // apply that height to all elements
    elementArray.forEach(function(i) {
      i.style.height = maxElementHeight + "px";
    });
  });
})();
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
  var slides = document.getElementsByClassName("slide");
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
}

function togglePanel(panel) {
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {


  });
}
