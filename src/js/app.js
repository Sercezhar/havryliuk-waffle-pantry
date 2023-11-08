import { burgerMenu } from './modules/burgerMenu';
import { useDynamicAdapt } from './modules/dynamicAdapt';
import { swiperHero } from './modules/swiper-hero';
import { swiperProducts } from './modules/swiper-products';
import { tabs } from './modules/tabs';

burgerMenu();
useDynamicAdapt();
swiperHero();
swiperProducts();
tabs(
  '.tabs__header',
  '.tabs__header-item',
  '.tabs__content-item',
  'tabs__header-item--active'
);
