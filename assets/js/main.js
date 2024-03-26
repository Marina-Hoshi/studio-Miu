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

  const startNewAnimation = () => {
    // グレーの丸をスライドイン
    $('.c-filled__circle').animate({ top: '50%' }, {
      duration: 1000, // スライドインの持続時間
      easing: 'linear', // 等速でのスライドイン
      complete: function() {
        // スライドイン完了後に黄色い背景を表示してスライドイン
        $('.c-yellow__background').css('top', '-100%').show().animate({ top: '0' }, {
          duration: 1000, // スライドインの持続時間
          easing: 'linear', // 等速でのスライドイン
          complete: function() {
            // 2秒後に黄色い背景をスライドアウト
            setTimeout(() => {
              $('.c-yellow__background').animate({ top: '-100%' }, {
                duration: 1000, // スライドアウトの持続時間
                easing: 'linear', // 等速でのスライドアウト
                complete: function() {
                  // 黄色い背景のスライドアウト完了後にグレーの丸をスライドアウト
                  $('.c-filled__circle').animate({ top: '-100%' }, 1000);
                }
              });
            }, 2000);
          }
        });
      }
    });
  };

  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const scrollBottom = scrollTop + windowHeight;

    checkScrollFadeIn(scrollBottom);
    checkScrollSlideFadeLeft(scrollBottom);
    checkScrollSlideFadeRight(scrollBottom);

    if (scrollTop > 500) {
      startNewAnimation();
    }
  });
});

  // $('.c-left__img:nth-child(n+2)').hide();
  // setInterval(function() {
  //   $(".c-left__img:first-child").fadeOut(2000);
  //   $(".c-left__img:nth-child(2)").fadeIn(2000);
  //   $(".c-left__img:first-child").appendTo(".c-slide__left");
  // }, 4000);
