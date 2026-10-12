$(function () {
  function res() {
    let w = $(window).width();

    $("header").off("mouseenter mouseleave");
    $("header .bar").off("click");
    $("header .xmark").off("click");

    if (w > 786) {
      $("header .bar").show();
      // $("header .hide").css({ right: "-800px" });
      $("header").on("mouseenter", function () {
        $("header .xmark").show();
        $("header .bar").hide();
        $("header .submenu").stop().slideDown();
        $(".bg").stop().slideDown();
      });
      $("header").on("mouseleave", function () {
        $("header .xmark").hide();
        $("header .bar").show();
        $("header .submenu").stop().slideUp();

        $(".bg").stop().slideUp();
      });
      if (w <= 1200) {
        $("header").on("mouseenter", function () {
          $("header .submenu").stop().slideDown();
          $(".bg").stop().slideDown();
        });

        $("header").on("mouseleave", function () {
          $("header .submenu").stop().slideUp();
          $(".bg").stop().slideUp();
        });
      }
    } else {
      $("header .bar").show();
      $("header .xmark").hide();
      $("header .hide").css({ right: "-800px" });

      $("header .bar").on("click", function () {
        $("header .hide").stop().animate({ right: "-40px" }, 400);
        $("header .bar").hide();
        $("header .xmark").show();
      });

      $("header .xmark").on("click", function () {
        $("header .hide").stop().animate({ right: "-800px" }, 400);
        $("header .xmark").hide();
        $("header .bar").show();
      });
    }
  }

  res();

  $(window).on("resize", function () {
    res();
  });

  // function res() {
  //   let w = $(window).width();

  //   $("header").off("mouseenter mouseleave");
  //   $("header .bar").off("click");
  //   $("header .xmark").off("click");

  //   if (w <= 1200 && w > 768) {
  //     $("header").on("mouseenter", function () {
  //       $("header .xmark").show();
  //       $("header .bar").hide();
  //       $("header .submenu").stop().slideDown();
  //       $(".bg").stop().slideDown();
  //     });
  //     $("header").on("mouseleave", function () {
  //       $("header .xmark").hide();
  //       $("header .bar").show();
  //       $("header .submenu").stop().slideUp();

  //       $(".bg").stop().slideUp();
  //     });
  //   } else if (w <= 786) {
  //     $("header .bar").on("click", function () {
  //       $("header .xmark").show();
  //       $("header .bar").hide();
  //       $("header .hide").stop().animate({ right: "-40px" });
  //     });
  //     $("header .xmark").on("click", function () {
  //       $("header .hide").stop().animate(
  //         {
  //           right: "-800px",
  //         },
  //         400,
  //       );

  //       $("header .xmark").hide();
  //       $("header .bar").show();
  //     });
  //   }

  //   res();

  //   $(window).on("resize", function () {
  //     res();
  //   });
  // }

  $(window).on("scroll", function () {
    let pos = $(this).scrollTop();
    let vis = $("#visual").offset().top;
    let con1 = $("#con1").offset().top;
    let con2 = $("#con2").offset().top;
    let con3 = $("#con3").offset().top;
    let con4 = $("#con4").offset().top;
    let con5 = $("#con5").offset().top;
    let foot = $("footer").offset().top;
    if (pos > vis - 700) {
      $("#visual .txt").addClass("on");
      $("#visual .txt h2:first-child").fadeIn(1000);
      $("#visual .txt h2:nth-of-type(2)").fadeIn(1500);
    } else {
      $("#visual .txt").removeClass("on");
    }
    if (pos > con1 - 700) {
      $("#con1 h3").addClass("on");
      $("#con1 ul li").addClass("on");
      $("#con1 p").addClass("on");
    } else {
      $("#con1 h3").removeClass("on");
      $("#con1 ul li").removeClass("on");
      $("#con1 p").removeClass("on");
    }
    if (pos > con2 - 700) {
      $("#con2 h3").addClass("on");
      $("#con2 ul").addClass("on");
      $(" #con2 .txt04 p").addClass("on");
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      setTimeout(function () {
        let stop = setInterval(function () {
          if (num == 492) {
            clearInterval(stop);
          } else {
            num = num + 4;
          }
          $(".number").text(num);
        }, 10);
      });
      setTimeout(function () {
        let stop2 = setInterval(function () {
          if (num2 == 12) {
            clearInterval(stop2);
          } else {
            num2 = num2 + 1;
          }
          $(".number2").text(num2);
        }, 100);
      }, 1100);
      setTimeout(function () {
        let stop3 = setInterval(function () {
          if (num3 == 43) {
            clearInterval(stop3);
          } else {
            num3 = num3 + 1;
          }
          $(".number3").text(num3);
        }, 30);
      }, 2400);
    } else {
      $("#con2 h3").removeClass("on");
      $("#con2 ul").removeClass("on");
      $(" #con2 .txt04 p").removeClass("on");
    }
    if (pos > con3 - 700) {
      $("#con3 h3").addClass("on");
      $("#con3 p").addClass("on");
      $("#con3 .ppl li").addClass("on");
      $("#con3 .category li").addClass("on");
    } else {
      $("#con3 h3").removeClass("on");
      $("#con3 p").removeClass("on");
      $("#con3 .ppl li").removeClass("on");
      $("#con3 .category li").removeClass("on");
    }
    if (pos > con4 - 700) {
      $("#con4 img").addClass("on");
    } else {
      $("#con4 img").removeClass("on");
    }
    if (pos > con5 - 700) {
      $().addClass("on");
      $(".list li .wrap02").addClass("on");
      $(".txt02").addClass("on");
    } else {
      $().removeClass("on");
      $(".list li .wrap02").removeClass("on");
      $(".txt02").removeClass("on");
    }
  });
});
