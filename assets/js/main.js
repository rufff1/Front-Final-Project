function clik() {
  document.getElementById("cont").classList.toggle("show")
}






$(document).ready(function() {
    $(".minimalist-vertical-menu").on("mouseleave", function() {
      $(".minimalist-tab-content").removeClass("active");
      $(".minimalist-tab-menu>.list-group>li").removeClass("active");
    });
                                                    
    $("li").on( "mouseleave", function() {
       if(!$(".minimalist-tab-content").hasClass("active")) {
        $(this).removeClass("active");
      }
    }).on( "mouseenter", function(e) {
      e.preventDefault();
      $(this)
        .siblings("li.active")
        .removeClass("active");
      $(this).addClass("active");
      var index = $(this).index();
      $(".minimalist-tab-content")
        .removeClass("active")
      $(".minimalist-tab>.minimalist-tab-content")
        .eq(index)
        .addClass("active");
    });
  });
  




  $('.slider').slick({
    dots:false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay:true,
    
    autoplaySpeed:1000,
    
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
         
          dots:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
     
    ]
  });


  $('.corusel-category').slick({
    dots:false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    autoplay:true,
    
    autoplaySpeed:1000,
    
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
         
          dots:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
     
    ]
  });


  $('.products-corusel').slick({
    dots:false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay:true,
    
    autoplaySpeed:1000,
    
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
         
          dots:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
     
    ]
  });



  function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock(){
      var t = getTimeRemaining(endtime);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if(t.total<=0){
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock,1000);
  }
  
  
  var deadline = 'Octaber 15 2022 00:00:00 UTC';
  initializeClock('countdown', deadline);




  $('.our-products-corusel').slick({
    dots:false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay:true,
    
    autoplaySpeed:1000,
    
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
         
          dots:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
     
    ]
  });



  $('.feed-corusel').slick({
    dots:false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay:true,
    
    autoplaySpeed:1000,
    
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
         
          dots:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
     
    ]
  });




  $('.arrivals-corusel').slick({
    dots:false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay:true,
    
    autoplaySpeed:1000,
    
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
         
          dots:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
     
    ]
  });








  $('.sldr').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });










  if(localStorage.getItem('basket') === null) {
    localStorage.setItem('basket',JSON.stringify([]))
}
  
function CountBasket() {
  let basket = JSON.parse(localStorage.getItem('basket'));
  if(basket.length === 0 ) {
      document.getElementById('count').style.display = 'none'
  }
  else{
      document.getElementById('count').style.display = 'block'
  }
  document.getElementById('count').innerHTML = basket.length
}

CountBasket()

let btns = document.getElementsByClassName('btn_add');

setTimeout(() => {
  for(let btn of btns) {
      btn.onclick = function(e) {
          let basket = JSON.parse(localStorage.getItem('basket'))
          let id = e.target.parentElement.parentElement.id;
          console.log(id);
          let price = e.target.parentElement.parentElement.children[2].children[2].children[1].innerHTML;
          price=Number.parseInt(price.slice(1));
          console.log(price);
          let title = e.target.parentElement.parentElement.children[2].children[0].innerHTML;
          console.log(title);
          let image = e.target.parentElement.parentElement.children[0].children[0].children[0].src ;
            
          let existProd = basket.find(x => x.Id == id);
          let filter = basket.filter(x => x.Id != id);
         
          if(existProd == undefined) {
              basket.push({
                  Id: id,
                  Name: title,
                  Price: price,
                  Image: image,
                  Count: 1
              })
          }
          else{
              existProd.Count += 1;
          }

          

          localStorage.setItem('basket',JSON.stringify(basket));
          CountBasket();
      }
  }
}, 1000);














$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 600) {
      $(".back-to-top").css("opacity","1");
  } else {
    $(".back-to-top").css("opacity","0");

  }
});





