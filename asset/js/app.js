const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option");



selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    
    optionMenu.classList.remove("active");
  });
});


$('.carusel').slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1600,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

var countDownDate = new Date("Dec 5, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

$('.product-slider').slick({
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow:'<span class="next"><i class="fa-solid fa-arrow-right"></i></span>',
  prevArrow:'<span class="prew"><i class="fa-solid fa-arrow-left"></i></span>',
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.electr').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 7,
  slidesToScroll: 7,
  nextArrow:'<span class="next"><i class="fa-solid fa-arrow-right"></i></span>',
  prevArrow:'<span class="prew"><i class="fa-solid fa-arrow-left"></i></span>',
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.product-slider-2').slick({
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow:'<span class="next"><i class="fa-solid fa-arrow-right"></i></span>',
  prevArrow:'<span class="prew"><i class="fa-solid fa-arrow-left"></i></span>',
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

var y = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days2").innerHTML = days;
  document.querySelector(".hours2").innerHTML = hours;
  document.querySelector(".minutes2").innerHTML = minutes;
  document.querySelector(".seconds2").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(y);
  }
}, 1000);

let circle = document.querySelector(".circles");

 circle.addEventListener  ("click", (e) =>{
let target  = e.target;
  
  if (target.classList.contains("circle")){
    circle.querySelector(".activec").classList.remove("activec");
    target.classList.add("activec");
  }
       
 });


 




 

