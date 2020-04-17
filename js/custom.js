
$(document).ready(function(){

    $(".newSignUp").click(function(){
        $(".fromContainer").css("display","none");
        $(".signUpContainer").css("display","block");
    });
    
    $(".UserHover").click(function(){
      $(".userPanel").show();
      $(".userIcon").addClass("activeUserIcon").removeClass("userIconDeactive");
      $(".downArrow").addClass("activeDownArrow");
    });
    $(".closeBtn").click(function(){
      $(".userPanel").hide();
      $(".userIcon").removeClass("activeUserIcon").addClass("userIconDeactive");
      $(".downArrow").removeClass("activeDownArrow");
    });

    // For toggle
    $(".toggle").text("<");
    var flag=true;
    $(".toggle").click(function(){
        //debugger
        flag=!flag;
        var link = $(".sideBar");
        $(".sideBar").animate({width: 'toggle'});
        if(flag){
            $(".toggle").text("<");
        }else{
            $(".toggle").text(">");
        }
    });

    // Click Menu UL li
   // var btnsGroup = $(".btnsGroup");
    var btns1 = $(".clickMenu1");
    var btns2 = $(".clickMenu2");
    var pages1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
    var pages2 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
    $(btns1).click(function(){
        
        var getId = $(this).attr('id');
        console.log("Clicked button id " + getId);
        $('.sideBarOutput').load('Pages/Option1/Menu'+pages1[getId-1]+'.html');
        $( this ).parent().find( 'li.activeTab' ).removeClass( 'activeTab' );
        $( this ).addClass( 'activeTab' );
        
    });

    $(btns2).click(function(){
        
        var getId = $(this).attr('id');
        console.log("Clicked button id " + getId);
        $('.sideBarOutput').load('Pages/Option2/Menu'+pages2[getId-20]+'.html');
        $( this ).parent().find( 'li.activeTab' ).removeClass( 'activeTab' );
        $( this ).addClass( 'activeTab' );
        
    });

    $(".card-link").click(function(){
        //debugger;
        flag=!flag;
        var cardLinkId = $(this).attr('id');
        var ariaExpnd = $(this).attr("aria-expanded");
        var collapse = $($(this)>".collapse").attr('className');
        var symbolId = cardLinkId.replace("card","");
        console.log("Clicked card "+cardLinkId);
        console.log("Clicked collapse "+collapse);
        console.log("aria-expanded " + ariaExpnd);
        // if(flag){
        //     $(".symbol"+symbolId).text("+");
        // }else{
        //     $(".symbol"+symbolId).text("-");
        // }
        $(".symbol"+symbolId).text("-");
        if(ariaExpnd =="false"){
            $(".symbol"+symbolId).text("-");
        }else if(ariaExpnd =="true"){
            $(".symbol"+symbolId).text("+");
        }
        
    });

    // For Side pannel Auto height
    var windowHeight = window.innerHeight;
    var sidebarHeight = windowHeight-144+"px";
    $(".sideBar,.sideBarOutput").css('height',sidebarHeight);
    console.log("windowHeight"+ windowHeight);


});
