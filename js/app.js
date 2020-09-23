//app simulation
$(document).ready(function () {
  let ppWidth = 55 + 12;
  let nameContainerWidth = $(".profilepic").next().outerWidth();
  $(".sidebar-wrapper").css("width", ppWidth + nameContainerWidth);
  setTimeout(() => {
    $(".app-wrapper").css("opacity", 1);
  }, 300);
});
