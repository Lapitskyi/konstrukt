document.querySelector('.burger').addEventListener('click', function (e) {
  e.preventDefault();

  if (this.classList.contains('active')) {
    this.classList.remove('active');
    document.querySelector('.menu').classList.remove('active');
    document.body.classList.remove('body-active');
  } else {
    this.classList.add('active');
    document.querySelector('.menu').classList.add('active');
    document.body.classList.add('body-active');
  }

});

new WOW().init();


let menu = document.querySelector(".header__bottom").offsetTop;

window.onscroll = function scrollMenu() {
  if (window.pageYOffset > menu) {

    document.querySelector('.header__bottom').classList.add('fixed');
  } else {
    document.querySelector('.header__bottom').classList.remove('fixed');
  }
}

let link = document.querySelectorAll('.menu__list-link');

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function (e) {
    e.preventDefault();
    let href = link[i].getAttribute('href').substring(1);
    let id = document.getElementById(href);
    const topOffset = document.querySelector('.header__bottom').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху 
    const elementPosition = id.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    document.querySelector('.burger').classList.remove('active');
    document.querySelector('.menu').classList.remove('active');
    document.body.classList.remove('body-active');
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });

  });
};


$('.slider').slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  dots: true,
  adaptiveHeight: true,
  responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 577,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }

    }
  ]
});


$('.slider-about').slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  dots: true,
  responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    }, {
      breakpoint: 450,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 350,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }

    }
  ]

});