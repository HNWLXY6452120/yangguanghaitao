$(".toolbar_person").on("mouseenter",function(){
    $(this).addClass("current").siblings(".toolbar_person").removeClass("current");
    console.log($(".user"))
    console.log($(this).index())
    if($(this).index()==2){
        $(".user").eq(1).stop().animate({right:35}).siblings(".user").stop().animate({right:-35});
        $(".user").eq(1).addClass("current").siblings(".user").removeClass("current");
    }else  if($(this).index()==0){
         $(".user").eq(0).stop().animate({right:35}).siblings(".user").stop().animate({right:-35});
         $(".user").eq(0).addClass("current").siblings(".user").removeClass("current");
    }else if($(this).index()==4){
        $(".user").eq(2).stop().animate({right:35}).siblings(".user").stop().animate({right:-35});
        $(".user").eq(2).addClass("current").siblings(".user").removeClass("current");
    }
}).on("mouseleave",function(){
    $(".toolbar_person").removeClass("current");
    $(".user").stop().animate({right:-35});
})
$(".toolbar_scroll").on("mouseenter",function(){
    $(".scroll").addClass("current").stop().animate({right:35});
}).on("mouseleave",function(){
    $(".scroll").removeClass("current").stop().animate({right:-45});
})