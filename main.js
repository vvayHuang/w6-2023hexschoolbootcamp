import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';

// import Swiper JS
import Swiper from './node_modules/swiper/swiper-bundle';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper(".online-swiper", {
    // 避免使用者移動到
    allowTouchMove: false,
    
    //能呈現幾個.swiper-slide
    slidesPerView: "auto",
    
    // 是否重複
    loop: true,
    
    // 跑馬燈速度
    speed: 30000,
    
    // 自動播放
    autoplay: {
      // 動畫延遲時間
      delay: 0,
      //避免點擊造成跑馬燈失效，視情況增加
      disableOnInteraction: false,
    },
    
    centeredSlides: true,
  });
  
  // 要調整 cost
  const reverseSwiper = new Swiper(".online-reverse-wiper", {
    // 避免使用者移動到
    allowTouchMove: false,
    
    //能呈現幾個.swiper-slide(內容不換行)
    slidesPerView: "auto",
    
    // 是否重複
    loop: true,
    
    // 跑馬燈速度
    speed: 30000,
    
    // 自動播放
    autoplay: {
      // 動畫延遲時間
      delay: 0,
      //避免點擊造成跑馬燈失效，視情況增加
      disableOnInteraction: false,
      // 方向調整
      reverseDirection: true,
    },
    
    centeredSlides: true,
  });