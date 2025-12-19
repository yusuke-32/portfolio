window.addEventListener("DOMContentLoaded", async () => {
  gsap.registerPlugin(SplitText);
  initTween(); // GSAPの初期化
  initSwiper(); // Swiperの初期化
  mobileMenu(); // ハンバーガーメニューの初期化
  switchSite(); // worksのWebサイトの切り替えの初期化
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

const switchSite = () => {
  // worksのWebサイトの切り替え処理
  const btn_cafe = document.querySelector(".website-item-btn.cafe");
  const btn_clinic = document.querySelector(".website-item-btn.clinic");
  const btn_journey = document.querySelector(".website-item-btn.journey");

  const btn_mobile_cafe = document.querySelector(
    ".mobile-website-switch-btn.cafe"
  );
  const btn_mobile_clinic = document.querySelector(
    ".mobile-website-switch-btn.clinic"
  );
  const btn_mobile_journey = document.querySelector(
    ".mobile-website-switch-btn.journey"
  );

  const img_cafe = document.querySelectorAll(".web-body-img-cafe");
  const img_clinic = document.querySelectorAll(".web-body-img-clinic");
  const img_journey = document.querySelectorAll(".web-body-img-journey");

  const removeClass = function () {
    // デバッグ: 要素が存在するか確認
    console.log("btn_cafe:", btn_cafe);
    console.log("btn_mobile_cafe:", btn_mobile_cafe);
    console.log("img_cafe:", img_cafe);
    btn_cafe.classList.remove("active");
    btn_clinic.classList.remove("active");
    btn_journey.classList.remove("active");
    console.log(btn_mobile_cafe);
    btn_mobile_cafe.classList.remove("active");
    btn_mobile_clinic.classList.remove("active");
    btn_mobile_journey.classList.remove("active");

    img_cafe.forEach((el) => {
      el.classList.remove("active");
    });
    img_clinic.forEach((el) => {
      el.classList.remove("active");
    });
    img_journey.forEach((el) => {
      el.classList.remove("active");
    });
  };
  btn_cafe.addEventListener("click", () => {
    removeClass();
    btn_cafe.classList.add("active");
    btn_mobile_cafe.classList.add("active");
    img_cafe.forEach((el) => {
      el.classList.add("active");
    });
  });
  btn_clinic.addEventListener("click", () => {
    removeClass();
    btn_clinic.classList.add("active");
    btn_mobile_clinic.classList.add("active");
    img_clinic.forEach((el) => {
      el.classList.add("active");
    });
  });
  btn_journey.addEventListener("click", () => {
    removeClass();
    btn_journey.classList.add("active");
    btn_mobile_journey.classList.add("active");
    img_journey.forEach((el) => {
      el.classList.add("active");
    });
  });
  btn_mobile_cafe.addEventListener("click", () => {
    removeClass();
    btn_cafe.classList.add("active");
    btn_mobile_cafe.classList.add("active");
    img_cafe.forEach((el) => {
      el.classList.add("active");
    });
  });
  btn_mobile_clinic.addEventListener("click", () => {
    removeClass();
    btn_clinic.classList.add("active");
    btn_mobile_clinic.classList.add("active");
    img_clinic.forEach((el) => {
      el.classList.add("active");
    });
  });
  btn_mobile_journey.addEventListener("click", () => {
    removeClass();
    btn_journey.classList.add("active");
    btn_mobile_journey.classList.add("active");
    img_journey.forEach((el) => {
      el.classList.add("active");
    });
  });
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
  const swiper = document.querySelector(".swiper");
  if (swiper) {
    return new Swiper(".swiper", {
      // Optional parameters
      loop: true,
      loopAdditionalSlides: 2,
      slidesPerView: 1.2,
      spaceBetween: 20,
      grabCursor: true,
      // centeredSlides: true,
      // watchSlidesProgress: true,

      speed: 1000, // スライドアニメーションのスピード（ミリ秒）

      autoplay: {
        // 自動再生させる
        delay: 4000, // 次のスライドに切り替わるまでの時間（ミリ秒）
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
  }
};
