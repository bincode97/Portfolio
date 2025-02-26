$(function () {
  $(".navigator ul li a").click(function () {
    var thisElem = $(this.hash);
    $("html,body").stop();
    $("html,body").animate({ scrollTop: thisElem.offset().top } , 500);
  });
  $(window).scroll(function () {
    $(this).scrollTop() > 100
      ? $(".nav-section").addClass("on")
      : $(".nav-section").removeClass("on");
  });
  

});
