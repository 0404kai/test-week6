//選單
$('#burger').on('click', () =>{
  $('#menu').slideToggle();
})

//輪播
var mySwiper = new Swiper('.swiper-course', {
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  },
  speed: 1500,
  loop: true,
  freeMode: true, //自由模式
  slidesPerView: 3, //多欄
  breakpoints: {
    768: {
      slidesPerView: 6
    },
    992: {
      slidesPerView: 9
    }
  }
})

var mySwiper = new Swiper('.swiper-feedback', {
  autoplay: {
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
})

//日期
const date = document.querySelector('#date');
var datepicker = new Datepicker(date, {
  language: 'zh-TW',
  orientation: 'bottom'
}); 

const effectiveDate = document.querySelector('#effective-date');
var datepicker = new Datepicker(effectiveDate, {
  language: 'zh-TW',
  orientation: 'bottom',
  format: 'MM-yy'
}); 

//結帳頁切換
$('#checkout').on('click', () =>{
  $('#apply').fadeOut();
  $('#creditCard').fadeIn();
})
$('#next').on('click', () =>{
  $('#creditCard').fadeOut();
  $('#success').fadeIn();
})