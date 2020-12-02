var result = localStorage.getItem("chimp_lang");
$('[imageNum="2"], [imageNum="3"]').hide();

$(".lang_link").each(function () {
  if ($(this).html().toLowerCase() === result) {
    $(this).css("font-weight", "800");
    $(this).css("color", "#1b07f2");
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

$("input[type='submit']").on("click", function (e) {
  e.preventDefault();

  let email = $(".email_addr").val();
  if (validateEmail(email)) {
    $(".failedEmail").html("Signing you up...");
    $(".failedEmail").fadeIn();
    $.ajax({
      type: "GET",
      url: $(".validate").attr("action"),
      data: $(".validate").serialize(),
      cache: false,
      dataType: "jsonp",
      jsonp: "c",
      contentType: "application/json; charset=utf-8",

      error: function (error) {},

      success: function (data) {
        if (data.result != "success") {
          //failed;
          $(".failedEmail").fadeIn();

          if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
            emailSuccess(email); // already subscribed - but just say youre registered.
          }
        } else {
          emailSuccess(email);
        }
      },
    });
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

var dataText = ["/create  ", "/call  ", "/start ", "/message "];

var x = [
  "📅  🍱  Lunch with Antoniette",
  "📱 👩🏽  Karyn Bryant",
  "⏱️ 👨‍💻 01:32",
  "🤩 💬 Hey, the latest version is live!",
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

var featureDetailDe = [
  '<span class="bold">In einfachen schritten, schnell Kontakte anlegen.</span> Passend Sortiert mit angefügter Geschäftshistorie, für den optimalen Überblick. <br/><br/>Wir helfen dir dabei deine Geschäftskontakte zu organisieren und  diese zu Pflegen.',
  '<span class="bold">Arbeite effektiver</span> in dem du unsere Kurzbefehle verwendest. <br/><br />Finde alles was du im Moment benötigst und erstelle zum Beispiel schnell einen neuen Kontakt von überall auf deinem Computer',
  '<span class="bold">Strukturiere dich und deine Projekte einfach</span> durch unser Projektmanagement tool.<br/><br/> Erfasse deine Zeit zu den passenden Projekten, um Rechnungen zu erstellen und alles im Griff zu haben. ',
];

var featureDetailEn = [
  '<span class="bold">Create contacts in simple steps</span> and quickly.<br/> <br/> Appropriately sorted with attached business history, for an optimal overview. Chimp organises your business contacts and helps you to maintain them.',
  '<span class="bold">Save time</span> by using our shortcut feature.<br/> <br/> Find everything you need right now and quickly create a new contact from anywhere on your computer',
  '<span class="bold">Structure yourself and your projects easily </span>with our project management tool.</span> <br/><br/> Enter your time to the appropriate projects to create the invoices and have everything under control.',
];
$(".pc").on("click", function () {
  // Start animation. Add a css class or do this by javascript or whatever
  initialLaunch++;
  $(".pc").removeClass("active");
  $(this).addClass("active");
  var resultLoc = localStorage.getItem("chimp_lang");
  var featureNum = $(this).attr("featureNum");
  var minus = 120;

  $(`.img-feature-x`).fadeOut(200, function () {
    setTimeout(() => {
      $(`.img-feature-x`).attr(
        "src",
        `../newimg/GroupedFeature${featureNum}.png`
      );
      $(`.img-feature-x`).fadeIn();
    }, 150);
  });

  if (resultLoc === "de") {
    $(".feature-body-text").html(featureDetailDe[parseInt(featureNum - 1)]);
  } else {
    $(".feature-body-text").html(featureDetailEn[parseInt(featureNum - 1)]);
  }

  if (initialLaunch > 1) {
    $("html, body").animate(
      {
        scrollTop: $(".zaza").offset().top - minus,
      },
      550
    );
  }
});
