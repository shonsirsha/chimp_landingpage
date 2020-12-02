var result = localStorage.getItem("chimp_lang");

let wordsArr = [];

//app simulation

$(document).ready(function () {
  function setWidth() {
    $(".first").hide();
    let ppWidth = 55 + 12 + 4;
    let nameContainerWidth = $(".profilepic").next().outerWidth();
    $(".sidebar-wrapper").css("width", ppWidth + nameContainerWidth);
  }
  function x() {
    setWidth();
    setTimeout(() => {
      $(".app-wrapper").css("opacity", 1);
    }, 300);

    var index = 0;
    setInterval(function () {
      wordsArr = [];
      var rx = localStorage.getItem("chimp_lang");

      if (rx == "de") {
        wordsArr = [
          "Letzte Aktivitäten",
          "Neuste Projekte ",
          "Zeit verbracht",
          "Todos",
          "Personalisierte Erinnerungen",
        ];
      } else if (rx == "en") {
        wordsArr = [
          "Recent activites",
          "Latest projects",
          "Time spent",
          "Todos",
          "Customised reminders",
        ];
      }

      let words = wordsArr[index++ % wordsArr.length].split(" ");
      let htmlWords = `<span class="bold">${words[0]}</b>`;
      if (words.length > 1) {
        htmlWords += `<span class="light"> ${words[1]}</b>`;
      }
      $(".proj-name").html(htmlWords);
    }, 1200);
  }

  x();

  window.onresize = function (event) {
    setWidth();
  };
});
