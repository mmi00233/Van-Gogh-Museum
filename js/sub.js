$(document).ready(function(){

    
  //gnb
  $('.depth2').hide();

    $('.gnb > li').mouseenter(function(){
      $(this).find('.depth2').stop().fadeIn();
    });

    $('.gnb > li').mouseleave(function(){
      $(this).find('.depth2').stop().fadeOut();
    });


    //mgnb
    $('.mgnb_wrap').hide();
    $('.ham').click(function(){
      $('.mgnb_wrap').fadeIn({
        left: '0'
      },1000);
    });
    $('.mgnb_close').click(function(){
      $('.mgnb_wrap').fadeOut({
        left: '100%'
      },1000);
    });

      


          //language
    $('.language ul').hide();
    $('.language').click(function(){
      $('.language ul').stop().slideToggle();
      $('.down').toggleClass('active');
    });


    //search
    $('.search_wrap').hide();

      $('.search').click(function(){
        $('.search_wrap').stop().slideDown();

      $('.search_close').click(function(){
        $('.search_wrap').stop().slideUp();
      });

    });



    //sub_list
    $('.sub_list li').click(function(){
      $(this).addClass('circle').siblings().removeClass('circle');
    });



    //shop
    $('.all').click(function(){
      $('.list_all').show();
    });

    $('.books').click(function(){
      $('.list_book').show();
      $('.list_Pt').hide();
      $('.list_MD').hide();
      $('.list_gift').hide();
    });

    $('.prints').click(function(){
      $('.list_book').hide();
      $('.list_Pt').show();
      $('.list_MD').hide();
      $('.list_gift').hide();
    });

    $('.md').click(function(){
      $('.list_book').hide();
      $('.list_Pt').hide();
      $('.list_MD').show();
      $('.list_gift').hide();
    });

    $('.gifts').click(function(){
      $('.list_book').hide();
      $('.list_Pt').hide();
      $('.list_MD').hide();
      $('.list_gift').show();
    });



    //art
    $('.all').click(function(){
      $('.list_all').show();
    });
    
    $('.paintings').click(function(){
      $('.list_painting').show();
      $('.list_drawing').hide();
    });

    $('.drawings').click(function(){
      $('.list_drawing').show();
      $('.list_painting').hide();
    });











    //self-portrait

    // 01
    $('.puls01').hide();
    $('.aa').hide();

    $('.minus01').click(function(){
      $('.aa').slideDown();
      $('.minus01').hide();
      $('.puls01').show();
    });

    $('.puls01').click(function(){
      $('.aa').slideUp();
      $('.puls01').hide();
      $('.minus01').show();
    });

    // 02
    $('.puls02').hide();
    $('.bb').hide();

    $('.minus02').click(function(){
      $('.bb').slideDown();
      $('.minus02').hide();
      $('.puls02').show();
    });

    $('.puls02').click(function(){
      $('.bb').slideUp();
      $('.puls02').hide();
      $('.minus02').show();
    });


    





    
});