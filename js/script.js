const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    const targetOffsetTop = targetElement.offsetTop;
    window.scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth'
    });
  });
});

$(document).ready(function(){
  const owl = $('.owl-carousel');
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: true, 
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });

  $('#prevBtn').click(function() {
    owl.trigger('prev.owl.carousel');
  });

  $('#nextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  });

  
  $('.nav__button').click(function(event) {
    $('.nav').toggleClass('hidden');
    event.stopPropagation(); // предотвращение распространения события клика
  });

  $('.header__menu_item').click(function(event) {
    $('.nav').toggleClass('hidden');
    event.stopPropagation(); // предотвращение распространения события клика
  });

  if ($('.nav').length) {
    $(document).click(function (event) {
      // Проверяем, что клик был сделан не по меню .nav и не по кнопке .nav__button
      if (!$(event.target).closest('.nav').length && !$(event.target).hasClass('nav__button')) {
        $('.nav').addClass('hidden');
      }
    });
  }
});

const btnSignup = document.querySelectorAll('.btn-signup');
const btnSignin = document.querySelector('.btn-signin');
const btnSubscription = document.querySelector('.btn-subscription');
const closeSigninBtn = document.getElementById('close-signin-btn');
const closeSignupBtn = document.getElementById('close-signup-btn');
const closeSubscrBtn = document.getElementById('close-subscription-btn');

const wrapper = document.querySelector('.wrapper');
const signin = document.querySelector('.signin');
const signup = document.querySelector('.signup');
const subscription = document.querySelector('.subscription');

const tosignup = document.querySelector('.tosignup');
const tosignin = document.querySelector('.tosignin');

// Обработчик события клика на кнопку
btnSignup.forEach(button => {
  button.addEventListener('click', () => {
    $(wrapper).fadeIn();
    $(signup).fadeIn();
  });
});

tosignin.addEventListener('click', () => {
  $(signup).fadeOut('slow', () => {
    $(signin).fadeIn('slow');
  });
});

btnSignin.addEventListener('click', () => {
  $(wrapper).fadeIn();
  $(signin).fadeIn();
});

tosignup.addEventListener('click', () => {
  $(signin).fadeOut('slow', () => {
    $(signup).fadeIn('slow');
  });
});

closeSigninBtn.addEventListener('click', () => {
  $(wrapper).fadeOut();
  $(signin).fadeOut();
});

closeSignupBtn.addEventListener('click', () => {
  $(wrapper).fadeOut();
  $(signup).fadeOut();
});

btnSubscription.addEventListener('click', (event) => {
  event.stopPropagation(); // Остановка всплытия события
  $(wrapper).fadeIn();
  $(subscription).fadeIn();
});

closeSubscrBtn.addEventListener('click', () => {
  $(wrapper).fadeOut();
  $(subscription).fadeOut();
});

$(".wrapper").click(function(event) {
  // Проверяем, что клик был вне области модального окна
  if ($(event.target).hasClass("wrapper")) {
    // Закрываем модальное окно и подложку
    $(".modal, .wrapper").fadeOut();
  }
});