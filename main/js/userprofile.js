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
// drop down hover on fullscreen
//
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
