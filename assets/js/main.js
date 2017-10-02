const activeClass = 'is-active';
const hamburger = document.querySelector('.navbar-burger');
const menu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle(activeClass);
menu.classList.toggle(activeClass);
});


function initModals() {
    document.querySelectorAll('[data-modal-open]').forEach(item => {
        item.addEventListener("click", () => {
            let key = item.dataset['modalOpen'];
            document.querySelector('[data-modal='+key+']').classList.toggle(activeClass);
        });
    });
    document.querySelectorAll('[data-modal-close]').forEach(item => {
        item.addEventListener("click", () => {
            let key = item.dataset['modalClose'];
            document.querySelector('[data-modal='+key+']').classList.toggle(activeClass);
        });
    });
    
}

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
     //also check here some another stuff like menu already opend or not
       $("div.modal").hide();
    }
});
initModals();

////////////MAP/////////////

 function initMap() {
        let map = new google.maps.Map(document.querySelector('.map'), {
          center: {lat: 25.011010, lng: 54.989423},
          zoom: 10,
          disableDefaultUI: true,
          zoomControl: true,
        });    
        let markerImage = {
scaledSize: new google.maps.Size(50, 50),
origin: new google.maps.Point(0, 0),
anchor: new google.maps.Point(0, 0)

};
let marker = new google.maps.Marker({
    map: map,
});
}


///////////////////SMOOOTH//////////////
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          };
        });
      }
    }
  });
  

//////////////ACTIVE NAVIGATION WHILE SCROLLING////////////

$(document).ready(function () {
    $(document).on("scroll", onScroll);
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}




        
