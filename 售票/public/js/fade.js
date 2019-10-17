var btn = $(".nav-list");
  for (var i = 0; i < btn.length; i++) {
      (function (i) {
          btn[i].onclick = function () {
              $(".nav-list").eq(i).addClass("cur").siblings().removeClass("cur");
              var cla = $(".list-container ul").eq(i).attr("class");

          }
      })(i)
  }
  $(".nav-list").eq(3).on("mouseenter", function () {
      console.log(1)
      $(".child").fadeIn()
  })

  $(".nav-list").eq(3).on("mouseleave", function () {
      console.log(1)
      $(".child").fadeOut()
  })