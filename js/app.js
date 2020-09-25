//app simulation
$(document).ready(function () {
  $(".first").hide();
  let ppWidth = 55 + 12 + 4;
  let nameContainerWidth = $(".profilepic").next().outerWidth();
  $(".sidebar-wrapper").css("width", ppWidth + nameContainerWidth);
  setTimeout(() => {
    $(".app-wrapper").css("opacity", 1);
  }, 300);

  let wordsArr = [
    "Recent activites",
    "Latest projects",
    "Time spent",
    "Todos",
    "Customised reminders",
  ];

  var index = 0;
  setInterval(function () {
    let words = wordsArr[index++ % wordsArr.length].split(" ");
    let htmlWords = `<span class="bold">${words[0]}</b>`;
    if (words.length > 1) {
      htmlWords += `<span class="light"> ${words[1]}</b>`;
    }
    $(".proj-name").html(htmlWords);
  }, 1200);
});
