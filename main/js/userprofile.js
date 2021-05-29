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

// select menu
(function ($) {
  $.fn.RevSelectBox = function () {
    this.each(function () {
      var $this = $(this),
        numberOfOptions = $(this).children("option").length;

      $this.addClass("select-hidden");

      if (!$this.parent().hasClass("rev-select")) {
        $this.wrap('<div class="rev-select"></div>');
      }
      $this.closest(".rev-select").find(".select-styled").remove();
      $this.closest(".rev-select").find(".select-options").remove();

      $this.after('<div class="select-styled"></div>');

      var $styledSelect = $this.next("div.select-styled");
      if ($this.find("option:selected")) {
        $styledSelect.text($this.find("option:selected").text());
      } else {
        $styledSelect.text($this.children("option").eq(0).text());
      }

      var $list = $("<ul />", {
        class: "select-options",
      }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {
        $("<li />", {
          text: $this.children("option").eq(i).text(),
          rel: $this.children("option").eq(i).val(),
        }).appendTo($list);
      }

      var $listItems = $list.children("li");

      $styledSelect.click(function (e) {
        e.stopPropagation();
        $("div.select-styled.active")
          .not(this)
          .each(function () {
            $(this).removeClass("active").next("ul.select-options").hide();
          });
        $(this).toggleClass("active").next("ul.select-options").toggle();
      });

      $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass("active");
        $this.val($(this).attr("rel")).trigger("change");
        $list.hide();
        //console.log($this.val());
      });

      $this.change(function (e) {
        // e.stopPropagation();
        $styledSelect.text($this.find("option:selected").text());
      });

      $(document).click(function () {
        $styledSelect.removeClass("active");
        $list.hide();
      });
    });
  };
})(jQuery);

jQuery(".rev-select-box").RevSelectBox();
jQuery("select").RevSelectBox();
