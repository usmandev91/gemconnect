$(document).ready(function () {
  $("#select_category").hide();
  $("#product_details").hide();
  $("#listing_details").hide();
  $("#publish").hide();
  $(".span2").hide();
  //  ajax call button1 functions
  $("#tab1").click(function () {
    $("#select_market").hide();
    $("#select_category").fadeIn(1300);
  });
  //   ajax call button2 function
  $("#tab2").click(function () {
    $("input[name='listing_category']:checked").each(function () {
      if ($(this).val() == "rings") {
        $("#select_category").hide();
        $("#product_details").fadeIn(1300);
        $("#ring_detail").fadeIn(1300);
        $("#pendant_detail").hide();
        $("#watch_detail").hide();
        $("#chain_detail").hide();
        $("#bracelet_detail").hide();
        $("#earing_detail").hide();
      }
      if ($(this).val() == "pendants") {
        $("#select_category").hide();
        $("#product_details").fadeIn(1300);
        $("#pendant_detail").fadeIn(1300);
        $("#ring_detail").hide();
        $("#watch_detail").hide();
        $("#chain_detail").hide();
        $("#bracelet_detail").hide();
        $("#earing_detail").hide();
      }
      if ($(this).val() == "chains") {
        $("#select_category").hide();
        $("#product_details").fadeIn(1300);
        $("#pendant_detail").hide();
        $("#ring_detail").hide();
        $("#watch_detail").hide();
        $("#chain_detail").fadeIn(1300);
        $("#bracelet_detail").hide();
        $("#earing_detail").hide();
      }
      if ($(this).val() == "watches") {
        $("#select_category").hide();
        $("#product_details").fadeIn(1300);
        $("#pendant_detail").hide();
        $("#ring_detail").hide();
        $("#watch_detail").fadeIn(1300);
        $("#chain_detail").hide();
        $("#bracelet_detail").hide();
        $("#earing_detail").hide();
      }
      if ($(this).val() == "bracelets") {
        $("#select_category").hide();
        $("#product_details").fadeIn(1300);
        $("#pendant_detail").hide();
        $("#ring_detail").hide();
        $("#watch_detail").hide();
        $("#chain_detail").hide();
        $("#bracelet_detail").fadeIn(1300);
        $("#earing_detail").hide();
      }
      if ($(this).val() == "earing") {
        $("#select_category").hide();
        $("#product_details").fadeIn(1300);
        $("#earing_detail").fadeIn(1300);
        $("#pendant_detail").hide();
        $("#ring_detail").hide();
        $("#watch_detail").hide();
        $("#chain_detail").hide();
        $("#bracelet_detail").hide();
      }
    });
  });

  $("#tab3").click(function () {
    $("#product_details").hide();
    $("#listing_details").fadeIn(1300);
  });
  $("#tab4").click(function () {
    $("#listing_details").hide();
    $("#publish").fadeIn(1300);
  });
});
