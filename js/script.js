//функция определения поддержки WebP
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

//полифил для IE 10-11
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('._req-textarea').forEach(function (input) {
    input.value = '';
  });
});

$(document).ready(function () {
  $('.tours__slider-inner').slick({
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 3300,
    easing: 'easeInSine',
    prevArrow: '<button type="button" class="slick-btn slick-prev"> <img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="img/arrow-right.svg" alt=""></button>',
  });
});

$(document).ready(function () {
  $('.projects-gallery__inner').slick({
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 3300,
    easing: 'easeInSine',
    arrows: false,
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 746,
        settings: {
          slidesToShow: 2.1,
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1.1,
        }
      },

    ]
  });
});

const burgerBtn = document.querySelector(".burger-menu");
const burgerMenu = document.querySelector(".burger-nav");


if (burgerBtn) {
  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.toggle("burger-btn--active");
    if (burgerBtn.classList.contains("burger-btn--active")) {
      burgerMenu.classList.add("burger-nav--active");
    } else {
      burgerMenu.classList.remove("burger-nav--active");
    }
  });
}
$(function () {
  $("#compare-container").twentytwenty();
});

$(document).ready(function () {
  $('.question__title').click(function () {
    if ($('.question__btn').hasClass('question__btn--active')) {
      $('.question__btn').removeClass('question__btn--active')
    } else {
      $('.question__btn').addClass('question__btn--active')
    }
    $(this).parent().children('div.question__text').toggle('normal');
    return false;
  });
});
$(document).ready(function () {
  $('.question__btn').click(function () {
    $(this).toggleClass('question__btn--active');
    $(this).parent().children('div.question__text').toggle('normal');
    return false;
  });
});



const zoomImgs = document.querySelectorAll('.zoom-img');
const zoomBg = document.querySelector('.zoom-bg');
const zoomClose = document.querySelector('.zoom-close');
const zoomedImages = document.querySelectorAll('.zoom');

if (zoomImgs) {
  zoomImgs.forEach(function (zoomImg) {
    zoomImg.addEventListener("click", function () {
      zoomBg.classList.add('zoom-bg--active');
      zoomImg.children[1].classList.add('zoom--active');
    })
  })
};
if (zoomBg) {
  zoomBg.addEventListener("click", function () {
    zoomedImages.forEach(function (zoomedImage) {
      zoomedImage.classList.remove('zoom--active');
    });
    zoomBg.classList.remove('zoom-bg--active');
  });
};

const portfolioLinks = document.querySelectorAll('.active-item__inner');
if (portfolioLinks) {
  portfolioLinks.forEach(function (portfolioLink) {
    portfolioLink.addEventListener('click', function () {
      document.location.href = "portfolio.html";
    });
  });
};


//form validation

function emailTest(input) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
};

function phoneTest(input) {
  return /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(input.value);
};


function formAddError(input) {
  input.parentNode.classList.add('_error');
};

function formRemoveError(input) {
  input.parentNode.classList.remove('_error');
};
document.querySelectorAll('.form-check').forEach(function (formWrapper) {
  const consultationForm = formWrapper.querySelector('.form-btn');

  if (consultationForm) {
    consultationForm.addEventListener('click', function (e) {
      e.preventDefault();
      let error = 0;
      let formReq = formWrapper.querySelectorAll('._req');
      formReq.forEach(function (input) {
        formRemoveError(input);
        if (input.classList.contains('_email')) {
          if (input.value === '' || !emailTest(input)) {
            formAddError(input);
            error++;
          };
        } else {
          if (input.value === '') {
            formAddError(input);
            error++;
          };
        };
      });
      let textareaReq = formWrapper.querySelectorAll('._req-textarea');
      if (textareaReq) {
        textareaReq.forEach(function (textarea) {
          formRemoveError(textarea);
          if (textarea.value === '') {
            formAddError(textarea);
            error++;
          };
        });
      };
      if (error === 0) {
        formWrapper.querySelector('.succeed-form').classList.add('succeed-form--active');
        formWrapper.querySelectorAll('._req').forEach(function (input) {
          input.value = '';
        });
        formWrapper.quercost - form__innerySelectorAll('._req-textarea').forEach(function (input) {
          input.value = '';
        });
      };
    });
  };


  const succeedForm = formWrapper.querySelector('.succeed-form');
  const succeedClose = formWrapper.querySelector('.succeed-form__close');
  succeedForm.addEventListener("click", function () {
    succeedForm.classList.remove('succeed-form--active');
  });
  succeedClose.addEventListener("click", function () {
    succeedForm.classList.remove('succeed-form--active');
  });

  const formInputs = formWrapper.querySelectorAll('.form-block__input');
  if (formInputs) {
    formInputs.forEach(function (input) {
      input.addEventListener('change', function () {
        formRemoveError(input);
      });
    });
  };
  const formTextarea = formWrapper.querySelector('.form__textarea');
  if (formTextarea) {
    formTextarea.addEventListener('change', function () {
      formRemoveError(formTextarea);
    });
  };
});
