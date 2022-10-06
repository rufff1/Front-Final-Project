$(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
        $(".back-to-top").css("opacity","1");
    } else {
      $(".back-to-top").css("opacity","0");
  
    }
  });