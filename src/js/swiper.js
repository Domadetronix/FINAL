var init_1 = false;
var swiper_1;
var pagination_1 = document.querySelector('.swiper-pagination_1');

var init_2 = false;
var swiper_2;
var pagination_2 = document.querySelector('.swiper-pagination_2');

function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init_1) {
      init_1 = true;
      swiper_1 = new Swiper('.mobile-slider_1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination_1',
        },
        slidesPerView: 'auto',
        spaceBetween: 16,
      });
      pagination_1.classList.remove('hidden');
    }

    if (!init_2) {
      init_2 = true;
      swiper_2 = new Swiper('.mobile-slider_2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination_2',
        },
        slidesPerView: 'auto',
        spaceBetween: 16,
      });
      pagination_2.classList.remove('hidden');
    }



  } else {
    if (init_1) {
      init_1 = false;
      swiper_1.destroy();
      pagination_1.classList.add('hidden');
    }


    if (init_2) {
      init_2 = false;
      swiper_2.destroy();
      pagination_2.classList.add('hidden');
      }
    }
  
}
swiperCard();
window.addEventListener("resize", swiperCard);




