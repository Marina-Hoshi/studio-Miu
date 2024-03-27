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



  $('#circle-container').append('<div id="inner-circle"></div>');
  $('#inner-circle').animate({
    'top': '0'
  }, 1000, function() {
    setTimeout(function() {
      $('.c-slide__left').append('<div id="yellow-background"></div>');
      $('#yellow-background').animate({
        'top': '0'
      }, 1000, function() {
        $('#circle-container, #yellow-background').animate({
          'top': '100%'
        }, 1000, function() {
          $('#inner-circle').css('top', '-100%');
          $('#yellow-background').remove();
          $('#circle-container').animate({
            'top': '50%'
          }, 1000);
        });
      });
    }, 2000);
  });

  setInterval(function() {
    $('#inner-circle').animate({
      'top': '0'
    }, 1000, function() {
      setTimeout(function() {
        $('#yellow-background').animate({
          'top': '0'
        }, 1000, function() {
          $('#circle-container, #yellow-background').animate({
            'top': '100%'
          }, 1000, function() {
            $('#inner-circle').css('top', '-100%');
            $('#yellow-background').remove();
            $('#circle-container').animate({
              'top': '50%'
            }, 1000);
          });
        });
      }, 2000);
    });
  }, 7000);

  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const scrollBottom = scrollTop + windowHeight;

    checkScrollFadeIn(scrollBottom);
    checkScrollSlideFadeLeft(scrollBottom);
    checkScrollSlideFadeRight(scrollBottom);
  });
});

