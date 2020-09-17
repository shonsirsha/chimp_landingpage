changeFeatureTitle();

$(window).resize(function () {
  changeFeatureTitle();
});

function changeFeatureTitle() {
  if (window.innerWidth <= 512) {
    $(".feature-title").html("Current Feature:");
  } else {
    $(".feature-title").html("Features:");
  }
}
