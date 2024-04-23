$(document).ready(function() {
    const currentIndexLeft = 0;
    const  currentIndexRight = 0;
    const imagesLeft = $('.p-header__left img');
    const imagesRight = $('.p-header__right img');
    const totalImagesLeft = imagesLeft.length;
    const totalImagesRight = imagesRight.length;

    function showNextImageLeft() {
      const nextIndex = (currentIndexLeft + 1) % totalImagesLeft;
      imagesLeft.eq(currentIndexLeft).animate({opacity: 0}, 500);
      imagesLeft.eq(nextIndex).animate({opacity: 1}, 500);
      currentIndexLeft = nextIndex;
    }

    function showNextImageRight() {
      const nextIndex = (currentIndexRight + 1) % totalImagesRight;
      imagesRight.eq(currentIndexRight).animate({opacity: 0}, 500);
      imagesRight.eq(nextIndex).animate({opacity: 1}, 500);
      currentIndexRight = nextIndex;
    }

    setInterval(showNextImageLeft, 3000);
    setInterval(showNextImageRight, 3000);
});



// PF01
// $(() => {
//   const fadeInPage = () => {
//     $('body').fadeIn(1000);
//   };

//   fadeInPage();

//   const checkScrollFadeIn = (scrollBottom) => {
//     const scrollFadeIn = $("._scrollFadeIn");

//     scrollFadeIn.each((index, element) => {
//       const $element = $(element);
//       const elementTop = $element.offset().top;

//       if (elementTop < scrollBottom) {
//         $element.addClass("_isActiveFadeIn");
//       } else {
//         $element.removeClass("_isActiveFadeIn");
//       }
//     });
//   };

//   const checkScrollSlideFadeLeft = (scrollBottom) => {
//     const scrollSlideFadeLeft = $("._scrollSlideFadeLeft");

//     scrollSlideFadeLeft.each((index, element) => {
//       const $element = $(element);
//       const elementTop = $element.offset().top;

//       if (elementTop < scrollBottom) {
//         $element.addClass("_isActiveSlideFadeLeft");
//       } else {
//         $element.removeClass("_isActiveSlideFadeLeft");
//       }
//     });
//   };

//   const checkScrollSlideFadeRight = (scrollBottom) => {
//     const scrollSlideFadeRight = $("._scrollSlideFadeRight");

//     scrollSlideFadeRight.each((index, element) => {
//       const $element = $(element);
//       const elementTop = $element.offset().top;

//       if (elementTop < scrollBottom) {
//         $element.addClass("_isActiveSlideFadeRight");
//       } else {
//         $element.removeClass("_isActiveSlideFadeRight");
//       }
//     });
//   };

//   $(window).scroll(() => {
//     const scrollTop = $(window).scrollTop();
//     const windowHeight = $(window).height();
//     const scrollBottom = scrollTop + windowHeight;

//     checkScrollFadeIn(scrollBottom);
//     checkScrollSlideFadeLeft(scrollBottom);
//     checkScrollSlideFadeRight(scrollBottom);
//   });
// });

