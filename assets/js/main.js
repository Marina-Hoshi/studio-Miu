$(document).ready(function() {
  // ページ読み込み時にローディング画面を表示
  $("#loading-screen").fadeIn(1000);

  // ページの読み込みが完了したらローディング画面をフェードアウト
  $(window).on("load", function() {
    $("#loading-screen").fadeOut(1500);
    $("body").removeClass("loading"); // loadingクラスを削除してページを表示
  });

  // 一定時間後に要素の表示を開始
  setTimeout(() => {
    $(".c-slideImage, .c-scroll-text, .p-subNav__menu--pc, .p-nav__menu--pc").addClass("_isActiveFadeIn");
  }, 600);
  setTimeout(() => {
    $("h1, .c-top__subTitle").addClass("_isActiveFadeIn");
  }, 1200);

  // スクロールイベントを監視してフェードインさせる
  $(window).scroll(() => {
    $(".p-about__imgTop, .p-about__imgBottom, .c-top__subTitle").each((index, element) => {
      const position = $(element).offset().top;
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();

      if (scroll > position - windowHeight + 200) {
        $(element).addClass("_isActiveFadeIn");
      }
    });
  });

  // 擬似要素のhover
  $('p-nav__menu--pc > .c-nav__menu').hover(
    function() {
      $(this).addClass('hovered');
    },
    function() {
      $(this).removeClass('hovered');
    }
  );

  // 読み込み時のハンバーガーメニューボタンを閉じた状態に設定
  $("#p-drawer__toggle--sp").removeClass("open");
  $(".c-hamburger_borderTop, .c-hamburger_borderBottom").removeClass("open");

  $("#p-drawer__toggle--sp").click(function(){
    $(this).toggleClass("open");
    if ($(this).hasClass("open")) {
      $(".p-header__nav--sp").fadeIn();
      $(".c-hamburger_borderTop, .c-hamburger_borderBottom").addClass("open");
    } else {
      $(".p-header__nav--sp").fadeOut();
      $(".c-hamburger_borderTop, .c-hamburger_borderBottom").removeClass("open");
    }
  });


  // 画像の切り替え
  const imagesLeft = $('.p-header__left img');
  const imagesRight = $('.p-header__right img');
  let currentIndexLeft = 0;
  let currentIndexRight = 0;

  function showNextImageLeft() {
    const nextIndex = (currentIndexLeft + 1) % imagesLeft.length;
    imagesLeft.eq(currentIndexLeft).animate({opacity: 0}, 500);
    imagesLeft.eq(nextIndex).animate({opacity: 1}, 500);
    currentIndexLeft = nextIndex;
  }

  function showNextImageRight() {
    const nextIndex = (currentIndexRight + 1) % imagesRight.length;
    imagesRight.eq(currentIndexRight).animate({opacity: 0}, 500);
    imagesRight.eq(nextIndex).animate({opacity: 1}, 500);
    currentIndexRight = nextIndex;
  }

  setInterval(showNextImageLeft, 3000);
  setInterval(showNextImageRight, 3000);
});







