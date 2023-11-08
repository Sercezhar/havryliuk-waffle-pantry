export function swiperProducts() {
  const swiperProd = new Swiper('.swiper-prod', {
    slidesPerView: 'auto',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
