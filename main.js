window.addEventListener("DOMContentLoaded", async () => {
  gsap.registerPlugin(SplitText);
  initTween(); // GSAPの初期化
  initSwiper(); // Swiperの初期化
});

// ハンバーガーメニューの処理
const mobile_menu_btn = document.querySelector(".mobile-menu-btn");
const mobile_menu_wrapper = document.querySelector(".mobile-menu-wrapper");
if (mobile_menu_btn) {
  mobile_menu_btn.addEventListener("click", () =>
    mobile_menu_wrapper.classList.toggle("open")
  );
}

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
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    loopAdditionalSlides: 2,
    slidesPerView: 1.3,
    spaceBetween: 16,
    grabCursor: true,
    watchSlidesProgress: true,

    speed: 3000, // スライドアニメーションのスピード（ミリ秒）

    autoplay: {
      // 自動再生させる
      delay: 100, // 次のスライドに切り替わるまでの時間（ミリ秒）
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
        slidesPerView: 2.3,
      },
      1025: {
        slidesPerView: 3.5,
      },
    },
  });
};
