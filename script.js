
//Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

//Toggle paragraph
function showParagraph(){
   var clickParagraph =  document.getElementById("readMore");
    
    if (clickParagraph.style.display =='none'){
        clickParagraph.style.display = 'block';
    }
    else{
        clickParagraph.style.display = 'none';
    }  
}

function showParagraph2(){
   var clickParagraph =  document.getElementById("readMore2");
    
    if (clickParagraph.style.display =='none'){
        clickParagraph.style.display = 'block';
    }
    else{
        clickParagraph.style.display = 'none';
    }
}

function showParagraph3(){
   var clickParagraph =  document.getElementById("readMore3");
    
    if (clickParagraph.style.display =='none'){
        clickParagraph.style.display = 'block';
    }
    else{
        clickParagraph.style.display = 'none';
    }
}

function showParagraph4(){
   var clickParagraph =  document.getElementById("readMore4");
    
    if (clickParagraph.style.display =='none'){
        clickParagraph.style.display = 'block';
    }
    else{
        clickParagraph.style.display = 'none';
    }
}