jQuery(document).ready(function () {
  // incoming tab
  // message 1
  $("#prod_1_counter_by_you").hide();
  $("#prod_1_offer_verified").hide();
  $("#prod_1_close").hide();
  // onclick function or change function of radio
  $("input[type=radio][name=prod_1_binding_offer]").on("change", function () {
    if ($(this).val() == "accept") {
      $("#prod_1_counter_container").fadeOut(400);
      $("#prod_1_reject_binding_offer").fadeOut(400);
      $("#prod_1_close").fadeIn(1200);
    } else if ($(this).val() == "reject") {
      $("#prod_1_counter_container").fadeOut(400);
      $("#prod_1_accept_binding_offer").fadeOut(400);
      $("#prod_1_close").fadeIn(1200);
    }
  });
  // checked state for radio
  $("input[name='prod_1_binding_offer']:checked").each(function () {
    if ($(this).val() == "accept") {
      $("#prod_1_counter_container").fadeOut(400);
      $("#prod_1_reject_binding_offer").fadeOut(400);
      $("#prod_1_close").fadeIn(1200);
    } else if ($(this).val() == "reject") {
      $("#prod_1_counter_container").fadeOut(400);
      $("#prod_1_accept_binding_offer").fadeOut(400);
      $("#prod_1_close").fadeIn(1200);
    }
  });
  // counter offer send button function
  $("#prod_1_counter").click(function () {
    $("#prod_1_offer_verified").fadeIn(1200);
    $("#prod_1_counter_by_you").fadeIn(1200);
    // sent a counter offer text
    $("#counter_offer_text").fadeIn(1200);
    // sent a binding offer text
    $("#binding_offer_text").fadeOut(100);
    // accept radio button
    $("#prod_1_accept_binding_offer").fadeOut(100);
    // reject radio button
    $("#prod_1_reject_binding_offer").fadeOut(100);
    // counter offer input div
    $("#prod_1_counter_container").fadeOut(100);
    // adding value of input in div
    $("#prod_1_counter_value").text("$" + $("#prod_1_counter_offer").val());
    // adding value of input in li
    $("#prod_1_value").text("$" + $("#prod_1_counter_offer").val());
    // removing active class
    $(".offer_list li.active").removeClass("active");
    // adding active class to counter offer by you
    $("#prod_1_counter_by_you").addClass("active");
  });
  // message 2
  $("#prod_2_counter_by_you").hide();
  $("#prod_2_offer_verified").hide();
  $("#prod_2_close").hide();
  $("input[name='prod_2_binding_offer']:checked").each(function () {
    if ($(this).val() == "accept") {
      $("#prod_2_counter_container").fadeOut(400);
      $("#prod_2_reject_binding_offer").fadeOut(400);
      $("#prod_2_close").fadeIn(1200);
    } else if ($(this).val() == "reject") {
      $("#prod_2_counter_container").fadeOut(400);
      $("#prod_2_accept_binding_offer").fadeOut(400);
      $("#prod_2_close").fadeIn(1200);
    }
  });
  // counter offer send button function
  $("#prod_2_counter").click(function () {
    $("#prod_2_offer_verified").fadeIn(1200);
    $("#prod_2_counter_by_you").fadeIn(1200);
    $("#prod_2_accept_binding_offer").fadeOut(100);
    $("#prod_2_reject_binding_offer").fadeOut(100);
    $("#prod_2_counter_container").fadeOut(100);
    $("#prod_2_counter_value").text("$" + $("#prod_1_counter_offer").val());
    $("#prod_2_value").text("$" + $("#prod_1_counter_offer").val());
    $(".offer_list li.active").removeClass("active");
    $("#prod_1_counter_by_you").addClass("active");
  });
  // out going tab 2nd message or prod no.4
  // message 1
  $("#prod_4_counter_by_you").hide();
  $("#prod_4_counter_by_you_text").hide();
  $("#prod_4_offer_verified").hide();
  $("#prod_4_close").hide();
  // onclick function or change function of radio
  $("input[type=radio][name=prod_4_binding_offer]").on("change", function () {
    if ($(this).val() == "accept") {
      $("#prod_4_counter_container").fadeOut(400);
      $("#prod_4_reject_binding_offer").fadeOut(400);
      $("#prod_4_close").fadeIn(1200);
    } else if ($(this).val() == "reject") {
      $("#prod_4_counter_container").fadeOut(400);
      $("#prod_4_accept_binding_offer").fadeOut(400);
      $("#prod_4_close").fadeIn(1200);
    }
  });
  // checked function
  $("input[name='prod_4_binding_offer']:checked").each(function () {
    if ($(this).val() == "accept") {
      $("#prod_4_counter_container").fadeOut(400);
      $("#prod_4_reject_binding_offer").fadeOut(400);
      $("#prod_4_close").fadeIn(1200);
    } else if ($(this).val() == "reject") {
      $("#prod_4_counter_container").fadeOut(400);
      $("#prod_4_accept_binding_offer").fadeOut(400);
      $("#prod_4_close").fadeIn(1200);
    }
  });
  // counter offer send button function
  $("#prod_4_counter").click(function () {
    $("#prod_4_offer_verified").fadeIn(1200);
    $("#prod_4_counter_by_you").fadeIn(1200);
    $("#prod_4_counter_offer_text").fadeOut(100);
    $("#prod_4_counter_by_you_text").fadeIn(1200);
    $("#binding_offer_text").fadeOut(100);
    $("#prod_4_accept_binding_offer").fadeOut(100);
    $("#prod_4_reject_binding_offer").fadeOut(100);
    $("#prod_4_counter_container").fadeOut(100);
    $("#prod_4_counter_value").text("$" + $("#prod_4_counter_offer").val());
    $("#prod_4_value").text("$" + $("#prod_4_counter_offer").val());
    $(".offer_list li.active").removeClass("active");
    $("#prod_4_counter_by_you").addClass("active");
  });
});
