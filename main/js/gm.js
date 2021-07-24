$(document).ready(function () {
  // hide the counters and filters at start
  $("#rings_counter").hide();
  $("#chains_counter").hide();
  $("#pendants_counter").hide();
  $("#watches_counter").hide();
  $("#earings_counter").hide();
  $("#bracelets_counter").hide();
  $("#rings_bar").hide();
  $("#watches_bar").hide();
  $("#chains_bar").hide();
  $("#pendants_bar").hide();
  $("#bracelets_bar").hide();
  $("#earings_bar").hide();
  $(".filter_btn").click(function () {
    var attr = $(this).attr("data-li");
    $(".filter_btn").removeClass("active");
    $(this).addClass("active");
    $("#gm_count").hide();
    $("#gm_counter").removeClass("std-title");
    $("#gm_counter").removeClass("tab-text");
    $(".item").hide();
    if (attr == "cat_rings") {
      $("." + attr).show();
    } else if (attr == "cat_chains") {
      $("." + attr).show();
    } else if (attr == "cat_pendants") {
      $("." + attr).show();
    } else if (attr == "cat_watches") {
      $("." + attr).show();
    } else if (attr == "cat_bracelets") {
      $("." + attr).show();
    } else if (attr == "cat_earings") {
      $("." + attr).show();
    } else {
      $(".item").show();
    }
  });
});
