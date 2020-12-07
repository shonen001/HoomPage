
$(function() 
{
  var   winh   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        vanH   = $('.navbar').innerHeight();
        $('.slider , .carousel-item').height(winh - (upperH+vanH) );


     $('.featured-work ul li').on('click',function()
     {



        //  $(this).addClass('').siblings().removeClass('');

        $(this).addClass('active').siblings().removeClass('active');
          
           console.log($(this).data('class'))

           if($(this).data('class')== 'All')
           {
                  $('.featured-work  .iimgg').css('opacity','100%');
           }
           else
           {
             $('.featured-work  .iimgg').css('opacity','30%');
             $($(this).data('class')).parent().css('opacity',1);
           }

        
     });



})