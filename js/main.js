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

// $(".switch").on("click", function () {
//     $(this).find(".switch-btn").toggleClass("active");
//     let num = getSecondPart($(this).attr("id"));
//     if ($(this).find(".switch-btn").hasClass("active")) {
//       $(`.preview-${num}`).attr("src", images[num][1]);
//     } else {
//       $(`.preview-${num}`).attr("src", images[num][0]);
//     }
//   });

function getSecondPart(str) {
  return str.split("-")[1];
}
