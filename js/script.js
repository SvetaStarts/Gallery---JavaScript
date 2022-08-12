let slideIndex = 1;
let slides = [];
let dots = [];
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    

 if(n > slides.length) {
     slideIndex = 1;
 }

 if (n < 1) {
     slideIndex = slides.length;
 }

 for (i = 0; i < slides.length; i++){
     slides[i].style.display = "none";
 }

 for(i = 0; i < dots.length; i++){
     dots[i].className = dots[i].className.replace("active", "");
 }
 

slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className = "dot active";

}

function showGallery (id){
    
    let modal = document.getElementsByClassName('modalImage')[0];
 
        if (modal.style.display = "none") {
            modal.style.display = "block";
        }
         else {
             modal.style.display = "none";
            }
            currentSlide(id);
    }



function closeAll(){

    let iconClose = document.getElementById('iconClose');
    let modal = document.getElementsByClassName('modalImage')[0];

    iconClose.onclick = function(){
        modal.style.display = "none";
    }
}

function onlyImage(){

    
    let imgDot = document.getElementsByClassName('imgDot')[0];
    let iconOnlyImage = document.getElementById('onlyImage');

    iconOnlyImage.onclick = function () {
        if (imgDot.style.display == "none") {
            imgDot.style.display = "block";  
                 
        } else {
            imgDot.style.display = "none";
           
        }
    }
}

//fullScreen////////////////////////////////////////////////////////////
document.addEventListener('click', function(event) {

    // игнорирование событий, которые произошли не на данной кнопке
    if( !event.target.hasAttribute('data-toggle-fullscreen') ) return;
 
   }, false );

   document.addEventListener('click', function (event) {

    // игнорирование событий, которые произошли не на данной кнопке
    if (!event.target.hasAttribute('data-toggle-fullscreen')) return;
 
    // если элемент уже в полноэкранном режиме, выйти из него
    // В противном случае войти в полный экран
    if (document.fullscreenElement) {
     document.exitFullscreen(); // выходит из полноэкранного режима

    } else {
     document.documentElement.requestFullscreen(); //переводит элемент страницы в полноэкранный режим

    }
  }, false);

  ///lupe image////////////////////////////////////////////////////////////

function lupeImage(){
    let next = document.getElementsByClassName('next')[0];
    let prev = document.getElementsByClassName('prev')[0];
    let iconLupe = document.getElementById('lupe');
    let containerSlider = document.getElementsByClassName('slideshow_container')[0];
    let imgSlide = document.querySelectorAll('imgSlide');

    iconLupe.onclick = function () {
        if (containerSlider.style.width == "1000px") {
            containerSlider.style.width = "100%";
            next.style.left = "95%";
            prev.style.left = "5%";
            imgSlide.style.height = "100%";
            imgSlide.style.objectFit = "contain";
          
                 
        } else {
            containerSlider.style.width = "1000px"; 
            next.style.left = "85%";
            prev.style.left = "15%";
            imgSlide.style.height = "700px";
                   
        }  
        
    }
}


////slide show///////////////////////////////////////////////////////////
function slideShowPlay(){

              slideIndex++;
              showSlides(slideIndex);   
    }
    
function stopTimer() {
    let iconStop = document.getElementById('stop');
    iconStop.onclick = function(){
        clearInterval(timer);
    }
    
}

function startTimer() {
    let iconStart = document.getElementById('start');
    iconStart.onclick = function(){
        timer = setInterval(slideShowPlay, 2000);
    }
    
}

