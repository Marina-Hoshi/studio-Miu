$(() => {
  const fadeInPage = () => {
    $('body').fadeIn(1000);
  };

  fadeInPage();

  const checkScrollFadeIn = (scrollBottom) => {
    const scrollFadeIn = $("._scrollFadeIn");

    scrollFadeIn.each((index, element) => {
      const $element = $(element);
      const elementTop = $element.offset().top;

      if (elementTop < scrollBottom) {
        $element.addClass("_isActiveFadeIn");
      } else {
        $element.removeClass("_isActiveFadeIn");
      }
    });
  };

  const checkScrollSlideFadeLeft = (scrollBottom) => {
    const scrollSlideFadeLeft = $("._scrollSlideFadeLeft");

    scrollSlideFadeLeft.each((index, element) => {
      const $element = $(element);
      const elementTop = $element.offset().top;

      if (elementTop < scrollBottom) {
        $element.addClass("_isActiveSlideFadeLeft");
      } else {
        $element.removeClass("_isActiveSlideFadeLeft");
      }
    });
  };

  const checkScrollSlideFadeRight = (scrollBottom) => {
    const scrollSlideFadeRight = $("._scrollSlideFadeRight");

    scrollSlideFadeRight.each((index, element) => {
      const $element = $(element);
      const elementTop = $element.offset().top;

      if (elementTop < scrollBottom) {
        $element.addClass("_isActiveSlideFadeRight");
      } else {
        $element.removeClass("_isActiveSlideFadeRight");
      }
    });
  };



  const $leftInnerCircle = $(".c-slide__left .c-inner-circle");
  const $rightInnerCircle = $(".c-slide__right .c-inner-circle");

  function animateLeft() {
    $leftInnerCircle.animate({
      top: "100%" // 上から下にスライドイン
    }, {
      duration: 1500,
      complete: function() {
        setTimeout(function() {
          $leftInnerCircle.animate({
            top: "-100%" // 下から上にスライドアウト
          }, {
            duration: 1500,
            complete: function() {
              setTimeout(function() {
                animateLeft(); // 再帰的に自身を呼び出す
              }, 5000); // 5秒待機
            }
          });
        }, 5000); // 5秒待機
      }
    });
  }

  function animateRight() {
    $rightInnerCircle.animate({
      top: "-100%" // 下から上にスライドイン
    }, {
      duration: 1500,
      complete: function() {
        setTimeout(function() {
          $rightInnerCircle.animate({
            top: "100%" // 上から下にスライドアウト
          }, {
            duration: 1500,
            complete: function() {
              setTimeout(function() {
                animateRight(); // 再帰的に自身を呼び出す
              }, 5000); // 5秒待機
            }
          });
        }, 5000); // 5秒待機
      }
    });
  }

  // 初回呼び出し
  setTimeout(function() {
    animateLeft(); // 左側のアニメーションを開始
    animateRight(); // 右側のアニメーションを開始
  }, 5000); // 最初のアニメーションを待つ時間


  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const scrollBottom = scrollTop + windowHeight;

    checkScrollFadeIn(scrollBottom);
    checkScrollSlideFadeLeft(scrollBottom);
    checkScrollSlideFadeRight(scrollBottom);
  });
});

