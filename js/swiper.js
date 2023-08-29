import Swiper from 'swiper/bundle';
const swiper = new Swiper(".online-swiper", {
    // 是否可用滑鼠移動
    allowTouchMove: false,
    
    //呈現幾個
    slidesPerView: "auto",
    
    // 是否重複
    loop: true,
    
    // 速度
    speed: 30000,
    
    // 自動播放
    autoplay: {
      // 延遲時間
      delay: 0,
      //避免點擊造成跑馬燈失效，視情況增加
      disableOnInteraction: false,
    },
    
    centeredSlides: true,
  });
  
  const reverseSwiper = new Swiper(".online-reverse-wiper", {
    // 是否可用滑鼠移動
    allowTouchMove: false,
    
    //呈現幾個
    slidesPerView: "auto",
    
    // 是否重複
    loop: true,
    
    // 速度
    speed: 30000,
    
    // 自動播放
    autoplay: {
      // 延遲時間
      delay: 0,
      //避免點擊造成跑馬燈失效，視情況增加
      disableOnInteraction: false,
      // 方向調整
      reverseDirection: true,
    },
    
    centeredSlides: true,
  });