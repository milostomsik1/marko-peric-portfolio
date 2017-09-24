import '../sass/styles.sass'

$('.navigation__item').on('click', function() {
  $(this).siblings().removeClass('currentLink');
  $(this).addClass('currentLink');
  console.log($(this));
});


// --- HOME
var $home = $('.hero');

$home.waypoint(function(direction) {
  if (direction === 'up') {
    $('.navigation__item').each(function(i, link) {
      $(this).removeClass('currentLink');
    });
    $('.navigation__item')[0].classList.add('currentLink');
  }
}, {
  offset: '-50%'
});


// --- ABOUT
var $about = $('.about');

$about.waypoint(function(direction) {
  if (direction === 'down') {
    $('.navigation__item').each(function(i, link) {
      $(this).removeClass('currentLink');
    });
    $('.navigation__item')[1].classList.add('currentLink');
  }
}, {
  offset: '25%'
});

$about.waypoint(function(direction) {
  if (direction === 'up') {
    $('.navigation__item').each(function(i, link) {
      $(this).removeClass('currentLink');
    });
    $('.navigation__item')[1].classList.add('currentLink');
  }
}, {
  offset: '0%'
});


// --- SERVICES
var $services = $('.services');

$services.waypoint(function(direction) {
  if (direction === 'down') {
    $('.navigation__item').each(function(i, link) {
      $(this).removeClass('currentLink');
    });
    $('.navigation__item')[2].classList.add('currentLink');
  }
}, {
  offset: '50%'
});

$services.waypoint(function(direction) {
  if (direction === 'up') {
    $('.navigation__item').each(function(i, link) {
      $(this).removeClass('currentLink');
    });
    $('.navigation__item')[2].classList.add('currentLink');
  }
}, {
  offset: '0%'
});


// --- PORTFOLIO
var $portfolio = $('.portfolio');

$portfolio.waypoint(function(direction) {
  if (direction === 'down') {
    $('.navigation__item').each(function(i, link) {
      $(this).removeClass('currentLink');
    });
    $('.navigation__item')[3].classList.add('currentLink');
  }
}, {
  offset: '50%'
});

$portfolio.waypoint(function(direction) {
  if (direction === 'up') {
    $('.navigation__item').each(function(i, link) {
      $(this).removeClass('currentLink');
    });
    $('.navigation__item')[3].classList.add('currentLink');
  }
}, {
  offset: '0%'
});


// --- CONTACT
var $contact = $('.contact');

$contact.waypoint(function(direction) {
  if (direction === 'down') {
    $('.navigation__item').each(function(i, link) {
      $(this).removeClass('currentLink');
    });
    $('.navigation__item')[4].classList.add('currentLink');
  }
}, {
  offset: '50%'
});

$contact.waypoint(function(direction) {
  if (direction === 'up') {
    $('.navigation__item').each(function(i, link) {
      $(this).removeClass('currentLink');
    });
    $('.navigation__item')[4].classList.add('currentLink');
  }
}, {
  offset: '0%'
});