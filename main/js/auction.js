$(document).ready(function () {
  // hide the counters and filters at start
  $("#collapseRing").hide();
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
    $("#auction_count").hide();
    $("#auction_counter").removeClass("std-title");
    $("#auction_counter").removeClass("tab-text");
    $("#auction_counter").addClass("gm_counter_deactive");
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
  // cheveron animation
  $(
    "#ringAccordion, #chainAccordion, #pendantAccordion, #watchAccordion, #braceletAccordion, #earingAccordion, #bs-collapse"
  )
    .on("show.bs.collapse", function (a) {
      $(a.target).prev(".panel-heading").addClass("active");
    })
    .on("hide.bs.collapse", function (a) {
      $(a.target).prev(".panel-heading").removeClass("active");
    });
  //Collapse and expand individual accordion buttons rings
  $("#ringCollapse").hide();
  $("#ringExpand").click(function () {
    $(this).hide();
    $(".ring_collapse").collapse("show");
    $("#ringCollapse").show();
  });
  $("#ringCollapse").click(function () {
    $(this).hide();
    $(".ring_collapse").collapse("hide");
    $("#ringExpand").show();
  });
});

//Collapse and expand individual accordion buttons chains
$("#chainCollapse").hide();
$("#chainExpand").click(function () {
  $(this).hide();
  $(".chain_collapse").collapse("show");
  $("#chainCollapse").show();
});
$("#chainCollapse").click(function () {
  $(this).hide();
  $(".chain_collapse").collapse("hide");
  $("#chainExpand").show();
});
//Collapse and expand individual accordion buttons pendants
$("#pendantCollapse").hide();
$("#pendantExpand").click(function () {
  $(this).hide();
  $(".pendant_collapse").collapse("show");
  $("#pendantCollapse").show();
});
$("#pendantCollapse").click(function () {
  $(this).hide();
  $(".pendant_collapse").collapse("hide");
  $("#pendantExpand").show();
});
//Collapse and expand individual accordion buttons watch
$("#watchCollapse").hide();
$("#watchExpand").click(function () {
  $(this).hide();
  $(".watch_collapse").collapse("show");
  $("#watchCollapse").show();
});
$("#watchCollapse").click(function () {
  $(this).hide();
  $(".watch_collapse").collapse("hide");
  $("#watchExpand").show();
});
//Collapse and expand individual accordion buttons bracelets
$("#braceletCollapse").hide();
$("#braceletExpand").click(function () {
  $(this).hide();
  $(".bracelet_collapse").collapse("show");
  $("#braceletCollapse").show();
});
$("#braceletCollapse").click(function () {
  $(this).hide();
  $(".bracelet_collapse").collapse("hide");
  $("#braceletExpand").show();
});
//Collapse and expand individual accordion buttons earings
$("#earingCollapse").hide();
$("#earingExpand").click(function () {
  $(this).hide();
  $(".earing_collapse").collapse("show");
  $("#earingCollapse").show();
});
$("#earingCollapse").click(function () {
  $(this).hide();
  $(".earing_collapse").collapse("hide");
  $("#earingExpand").show();
});
$(".navbar-toggler").click(function () {
  $(this).toggleClass("active");
});
