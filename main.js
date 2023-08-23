import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';
import AOS from 'aos';
import Swiper from 'swiper/bundle';
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
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });