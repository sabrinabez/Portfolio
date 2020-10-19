var slideIndex = [1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
var galleryID = ["gallerycaption1","gallerycaption2", "gallerycaption3"]
var demoID = ["gallerydemo1","gallerydemo2", "gallerydemo3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n,no) {
  showSlides(slideIndex[no] = n,no);
}


function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(demoID[no]);
  var captionText = document.getElementById(galleryID[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex[no]-1].className += " active";
  captionText.innerHTML = dots[slideIndex[no]-1].alt;
}