
// jQuery(function ($) {

//     $(".sidebar-dropdown > a").click(function() {
//       $(".sidebar-submenu").slideUp(200);
//       if (
//         $(this).parent().hasClass("active")
//       ) {
//         $(".sidebar-dropdown").removeClass("active");
//         $(this).parent().removeClass("active");
//       } else {
//         $(".sidebar-dropdown").removeClass("active");
//         $(this).next(".sidebar-submenu").slideDown(200);
//         $(this).parent().addClass("active");
//       }
// });

//   $("#close-sidebar").click(function() {
//     $(".page-wrapper").removeClass("toggled");
//     $("#show-sidebar").css('left','0px');
//   });
//   $("#show-sidebar").click(function() {
//     $(".page-wrapper").addClass("toggled");
//     $("#show-sidebar").css('left','-40px');
//   });

// });



$(".clickMenu").click(function(){
  var pages = ['1','2','3'];
    var getId = $(this).attr('id');
    //console.log("Clicked button id " + getId);
    $('#idPage').load('Option1/Menu'+pages[getId-1]+'.html');
})

