// let images = [
//   ["./img/gif0.gif", "./img/gif1.gif"],
//   ["./img/gif2.gif", "./img/gif3.gif"],
//   ["./img/gif0.gif"],
// ];

// for (let i = 0; i < images.length; i++) {
//   for (let x = 0; x < images[i].length; x++) {
//     $(`.preview-${i}`).attr("src", images[i][0]);
//   }
// }

$(".switch").on("click", function () {
  $(this).find(".switch-btn").toggleClass("active");
  let num = getSecondPart($(this).attr("id"));

  if ($(this).find(".switch-btn").hasClass("active")) {
    $(`.preview-${num}.img-0`).addClass("hide");
    $(`.preview-${num}.img-1`).removeClass("hide");
  } else {
    $(`.preview-${num}.img-0`).removeClass("hide");
    $(`.preview-${num}.img-1`).addClass("hide");
  }
});

$(document).on("keyup", function (e) {
  if (e.which == 70) {
    // 70 is F
    if (!$("#email").is(":focus")) {
      $("#toFeatures").click();
    }
  }
});
$(".scroll-div")
  .find("p, img")
  .on("click", function () {
    $("#toFeatures").click();
  });
//all A smooth scroll
$("a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      550,
      function () {
        window.location.hash = hash;
      }
    );
  }
});

var distance0 = $("#time-tracking").offset().top;
var distance1 = $("#contacts-companies-management").offset().top;
var distance2 = $("#contacts-companies-management").offset().top;

var $window = $(window);

$window.scroll(function () {
  if ($window.scrollTop() >= distance0) {
    $(".feature-link").removeClass("active");
    $(".feature-link").eq(0).addClass("active");
  }
  if ($window.scrollTop() >= distance1) {
    $(".feature-link").removeClass("active");
    $(".feature-link").eq(1).addClass("active");
  }
});

$("button[type='submit']").on("click", function (e) {
  e.preventDefault();
  let email = $("#email").val();
  if (validateEmail(email)) {
    $(".failedEmail").fadeOut();
    $("form").fadeOut();
    $(".try").fadeOut();
    setTimeout(() => {
      $(".try").html("Woohoo! You've registered! 🎉 🥳");
      $(".try").css("textAlign", "center");
      $(".try").css("fontSize", "18");
      $(".try").css("marginBottom", "0");
    }, 300);
    fireConfetti();
    setTimeout(() => {
      $(".try").fadeIn();
    }, 300);
  } else {
    $(".failedEmail").fadeIn();
  }
});

function getSecondPart(str) {
  return str.split("-")[1];
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function fireConfetti() {
  var count = 200;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}
// $(".switch").on("click", function () {
//     $(this).find(".switch-btn").toggleClass("active");
//     let num = getSecondPart($(this).attr("id"));
//     if ($(this).find(".switch-btn").hasClass("active")) {
//       $(`.preview-${num}`).attr("src", images[num][1]);
//     } else {
//       $(`.preview-${num}`).attr("src", images[num][0]);
//     }
//   });
