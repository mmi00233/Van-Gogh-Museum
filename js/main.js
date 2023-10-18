$(document).ready(function () {

  // $('#fullpage').fullpage({

  //   onLeave: function () {
  //     $('.section [data-aos]').each(function () {
  //       $(this).removeClass("aos-animate")
  //     });
  //   },
  //   onSlideLeave: function () {
  //     $('.slide [data-aos]').each(function () {
  //       $(this).removeClass("aos-animate")
  //     });
  //   },
  //   afterSlideLoad: function () {
  //     $('.slide.active [data-aos]').each(function () {
  //       $(this).addClass("aos-animate")
  //     });
  //   },
  //   afterLoad: function () {
  //     $('.section.active [data-aos]').each(function () {
  //       $(this).addClass("aos-animate")
  //     });
  //   }

  // });






  //gnb
  $('.depth2').hide();

  $('.gnb > li').mouseenter(function () {
    $(this).find('.depth2').stop().fadeIn();
  });

  $('.gnb > li').mouseleave(function () {
    $(this).find('.depth2').stop().fadeOut();
  });


  //mgnb
  $('.mgnb_wrap').hide();
  $('.ham').click(function () {
    $('.mgnb_wrap').fadeIn({
      left: '0'
    }, 1000);
  });
  $('.mgnb_close').click(function () {
    $('.mgnb_wrap').fadeOut({
      left: '100%'
    }, 1000);
  });


  //슬라이드
  const collection_list = new Swiper('.collection_list', {

    autoplay: {
      delay: 3000,  // 5초, 슬라이드 머무르는 시간
      disableOnInteraction: false,
    },

    slidesPerView: "4",
    spaceBetween: 20,
    breakpoints: {
      1024: {  // 가로해상도가 1024px 이상일 경우
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1600: {  // 가로해상도가 1600px 이상일 경우
        slidesPerView: 4,
        spaceBetween: 40,
      },

    },
    loop: true,
    speed: 800,



  });



  //language
  $('.language ul').hide();
  $('.language').click(function () {
    $('.language ul').stop().slideToggle();
    $('.down').toggleClass('active');
  });


  //search
  $('.search_wrap').hide();

  $('.search').click(function () {
    $('.search_wrap').stop().slideDown();

    $('.search_close').click(function () {
      $('.search_wrap').stop().slideUp();
    });

  });


  //제품 슬라이드
  const store_list = new Swiper('.store_list', {

    autoplay: {
      delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },

    centeredSlides: true, // 첫번재 들라이드 가운데 배치
    slidesPerView: '1', // 한 슬라이드에 보여룾 갯수 모바일 기준
    spaceBetween: 40,
    breakpoints: {
      1024: {  // 가로해상도가 1024px 이상일 경우
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1600: {  // 가로해상도가 1600px 이상일 경우
        slidesPerView: 4,
        spaceBetween: 40,
      },

    },
    loop: true,  // 슬라이드 반복 여부
    speed: 1000  // 슬라이드 동작 속도

  }); // 옵션
});