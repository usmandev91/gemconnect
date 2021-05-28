// wishlist button toggle
$(document).ready(function () {
  $("button").on("click", function () {
    $(this).toggleClass("active");
  });
});
// raty plugin
$(".HandMade_jewelry_rating").raty({
  starType: "i",
  half: true,
  readOnly: true,
  precision: true,
  score: 4.5,
  number: 5,
  target: "#hint",
  targetType: "score",
  targetKeep: true,
  round: { down: 0.25, full: 0.7, up: 1 },
});
$(".listing_rating").raty({
  starType: "i",
  half: true,
  precision: true,
  // change target type and make a review item function

  score: function () {
    return $(this).attr("data-score");
  },
  readOnly: true,
  // score: 5,
  number: 5,
  space: 1,
  target: "#listing_score",
  targetType: "score",
  targetKeep: true,
  // round: { down: 0.25, full: 0.5 },
});
//
