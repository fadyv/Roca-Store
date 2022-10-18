// products slider 
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
      
        600:{
            items:2
        },
        900:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})


// function show  product colors
function ProductColorChange(ProductColorID,productImg) {
    $(ProductColorID).click(function () {
        let imgSrc= $(this).attr('src');
        console.log(imgSrc)
         $(productImg).attr('src',imgSrc);
     })
}
// call functions for all single product
ProductColorChange("#ProductColor1 img","#productImg1");
ProductColorChange("#ProductColor2 img","#productImg2");
ProductColorChange("#ProductColor3 img","#productImg3");
ProductColorChange("#ProductColor4 img","#productImg4");
ProductColorChange("#ProductColor5 img","#productImg5");
ProductColorChange("#ProductColor6 img","#productImg6");


  //when scroll change navbar color 
  let FProductsOffset = $('#FProducts').offset().top;
 $(window).scroll(function () {
 
     let winScrollTop = $(window).scrollTop();
     if (winScrollTop+180 > FProductsOffset) {
         $('.navbar').css({
            backgroundColor:'rgb(0, 0, 0)',
            transition:'all 1s'
         })

        //  $('.navbar img').attr('src','images/logo2.png')
         
     } else {
        $('.navbar').css({
            backgroundColor:'transparent',
            transition:'all 1s'
         })
         $('.navbar img').attr('src','images/logo.png')
         
     }
     
 })


  //show and hide the btn up
$(window).scroll(function () {

    let winScrollTop = $(window).scrollTop();
    if (winScrollTop > FProductsOffset) {
           $('.btn-up').fadeIn(1000);
    } else {
        $('.btn-up').fadeOut(1000);
        
    }

})

//when click on btn up move to home section 
$(".btn-up").click(function () {
    let homeOffset = $("#home").offset().top;
    console.log(homeOffset);
  
    $('body').animate(
      {
        scrollTop: "0px",
      },
      3000
);
  });


// loading page
$(document).ready(function () {
    $('.loading').fadeOut(2000 , function () {
      $('body').css('overflow','auto')
      $('.navbar').animate({
        opacity:'1'
      },3000)
      
    })
  })




