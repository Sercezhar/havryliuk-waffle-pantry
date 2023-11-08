export function swiperHero() {
  const swiper = new Swiper('.swiper-hero', {
    loop: true,

    pagination: {
      el: '.hero-swiper-pagination',
      clickable: true,
    },
  });
}
