window.addEventListener("DOMContentLoaded", async () => {
  gsap.registerPlugin(SplitText);
  initTween(); // GSAPの初期化
  initSwiper(); // Swiperの初期化
  mobileMenu(); // ハンバーガーメニューの初期化
  toggleDevice(); // worksのデバイス切り替えの初期化
});

const mobileMenu = () => {
  // ハンバーガーメニューの処理
  const mobile_menu_btn = document.querySelector(".mobile-menu-btn");
  const mobile_menu_wrapper = document.querySelector(".mobile-menu-wrapper");
  if (mobile_menu_btn) {
    mobile_menu_btn.addEventListener("click", () =>
      mobile_menu_wrapper.classList.toggle("open")
    );
  }
};

const toggleDevice = () => {
  // worksのデバイス（デスクトップ／モバイル）の切り替え処理
  const device_item_btn_desktop = document.querySelector(
    ".device-item-btn-desktop"
  );
  const device_item_btn_mobile = document.querySelector(
    ".device-item-btn-mobile"
  );
  const web_body_desktop = document.querySelector(".web-body.desktop");
  const web_body_mobile = document.querySelector(".web-body.mobile");
  device_item_btn_desktop.addEventListener("click", () => {
    device_item_btn_desktop.classList.add("active");
    device_item_btn_mobile.classList.remove("active");
    web_body_desktop.classList.add("active");
    web_body_mobile.classList.remove("active");
  });
  device_item_btn_mobile.addEventListener("click", () => {
    device_item_btn_mobile.classList.add("active");
    device_item_btn_desktop.classList.remove("active");
    web_body_mobile.classList.add("active");
    web_body_desktop.classList.remove("active");
  });
};

const initTween = () => {
  SplitText.create(".js-split", {
    type: "words, chars",
    onSplit(self) {
      // runs every time it splits
      gsap.fromTo(
        self.chars,
        {
          y: -50,
          autoAlpha: 0,
        },
        {
          duration: 2,
          y: 0,
          autoAlpha: 1,
          stagger: 0.08,
          ease: "power4",
        }
      );
    },
  });
  SplitText.create(".js-split2", {
    type: "words, chars",
    onSplit(self) {
      // runs every time it splits
      gsap.fromTo(
        self.chars,
        {
          y: -30,
          autoAlpha: 0,
        },
        {
          delay: 0.5,
          duration: 1.5,
          y: 0,
          autoAlpha: 1,
          stagger: 0.05,
          ease: "power4",
        }
      );
    },
  });
  gsap.fromTo(
    ".js-appear-zoom",
    { opacity: 0, y: -10, scale: 0.9 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.3,
    }
  );
  gsap.fromTo(
    ".js-appear-dot",
    {
      opacity: 0,
      scale: 3,
    },
    {
      delay: 0.5,
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.08,
    }
  );
  gsap.fromTo(
    ".js-appear-up",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.3,
    }
  );
  gsap.to(".js-split", {
    opacity: 1,
  });
  gsap.to(".js-split2", {
    opacity: 1,
  });
};

const initSwiper = () => {
  return new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    loopAdditionalSlides: 2,
    slidesPerView: 1.2,
    spaceBetween: 20,
    grabCursor: true,
    // centeredSlides: true,
    // watchSlidesProgress: true,

    speed: 3500, // スライドアニメーションのスピード（ミリ秒）

    autoplay: {
      // 自動再生させる
      delay: 40, // 次のスライドに切り替わるまでの時間（ミリ秒）
      disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
      // waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".my-swiper-pagination", // ページネーション要素のクラス
      // clickable: true, // クリックによるスライド切り替えを有効にする
      type: "bullets", // 'bullets'（デフォルト） | 'fraction' | 'progressbar'
    },
    breakpoints: {
      // ブレークポイント
      767: {
        slidesPerView: 1.7,
      },
      1200: {
        slidesPerView: 2.7,
      },
    },
  });
};
