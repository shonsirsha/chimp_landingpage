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
    if (!$(".email_addr").is(":focus")) {
      $("#toFeatures").click();
    }
  }
});
$(".email_addr").on("keyup", function (e) {
  $(".email_addr").val($(this).val());
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
var distance2 = $("#commands").offset().top;

var $window = $(window);

var scrollTop = $(window).scrollTop(),
  elementOffset = $("#time-tracking").offset().top,
  distance = elementOffset - scrollTop;

let distances = [0, 0, 0];

$window.scroll(function () {
  let tt = $("#time-tracking").offset().top - $(".browser-border").offset().top;
  if (tt < 0) tt = tt * -1;
  let cc =
    $("#contacts-companies-management").offset().top -
    $(".browser-border").offset().top;
  if (cc < 0) cc = cc * -1;
  let c = $("#commands").offset().top - $(".browser-border").offset().top;
  if (c < 0) c = c * -1;
  distances[0] = tt;
  distances[1] = cc;
  distances[2] = c;
  let tempDist = distances.slice();
  tempDist.sort(function (a, b) {
    return a - b;
  });
  let ix = distances.indexOf(tempDist[0]);
  $(`.feature-link`).removeClass("active");
  $(`.feature-link`).eq(ix).addClass("active");
});

$("input[type='submit']").on("click", function (e) {
  e.preventDefault();

  let email = $(".email_addr").val();
  if (validateEmail(email)) {
    // $(".failedEmail").html("Signing you up...");
    // $(".failedEmail").fadeIn();
    // $.ajax({
    //   type: "GET",
    //   url: $(".validate").attr("action"),
    //   data: $(".validate").serialize(),
    //   cache: false,
    //   dataType: "jsonp",
    //   jsonp: "c",
    //   contentType: "application/json; charset=utf-8",

    //   error: function (error) {},

    //   success: function (data) {
    //     if (data.result != "success") {
    //       //failed;
    //       $(".failedEmail").fadeIn();

    //       if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
    //         emailSuccess(email); // already subscribed - but just say youre registered.
    //       }
    //     } else {
    //       emailSuccess(email);
    //     }
    //   },
    // });
    emailSuccess(email);
  } else {
    $(".failedEmail").html(
      "Oopsie! 🤭 Your e-mail address is <em>invalid.</em> <br /> Please check it again!"
    );
    $(".failedEmail").fadeIn();
  }
});

$(".more").on("click", function () {
  $("#toFeatures").click();
});

$(".download-btn").on("click", function () {
  $("#toDownload").click();
});

function emailSuccess(email) {
  $(".failedEmail").fadeOut();
  $("form").fadeOut();
  $(".try").fadeOut();
  setTimeout(() => {
    $(".try").html(
      `<span class="light">Woohoo! <br/> You've registered for<span> <span class="bold">Chimp</span> <br/><br /> <span class="bold">Don't forget to check your email</span> <a class="text-black" href="mailto:${email}">(${email})</a> 😉 📧`
    );
    $(".try").css("textAlign", "center");
    $(".try").css("fontSize", "18");
    $(".try").css("marginBottom", "0");
  }, 300);
  fireConfetti();
  setTimeout(() => {
    $(".try").fadeIn();
  }, 300);
}

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

var dataText = [
  "/create  ",
  "/call  ",
  "/start ",
  "/message ",
  "...and many more...",
];
var x = [
  "📅  🍱  Lunch with Antoniette",
  "📱 👩🏽  Karyn Bryant",
  "⏱️ 👨‍💻 01:32",
  "🤩 💬 Hey, the latest version is live!",
  "",
];
let y = 0;
function typeWriter(text, i, fnCallback) {
  if (i < text.length) {
    $(".first").fadeOut(function () {
      $(".first").html(x[y]);

      document.querySelector("#command-words").innerHTML =
        text.substring(0, i + 1) +
        '<span class="typewriter" aria-hidden="true">';
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    });
  } else if (typeof fnCallback == "function") {
    if (y === x.length - 1) {
      y = 0;
    } else {
      y++;
    }

    $(".first").fadeIn();
    setTimeout(fnCallback, 2000);
  }
}
function StartTextAnimation(i) {
  if (typeof dataText[i] == "undefined") {
    setTimeout(function () {
      StartTextAnimation(0);
    }, 500);
  }
  if (i < dataText.length) {
    typeWriter(dataText[i], 0, function () {
      StartTextAnimation(i + 1);
    });
  }
}
StartTextAnimation(0);
