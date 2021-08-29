$(document).ready(function () {
  $("button").on("click", function () {
    $(this).toggleClass("active");
  });
});
// for switching modals
$(function () {
  $("[data-bm-close][data-bm-open]").on("click", function () {
    var $this = $(this);
    $($this.data("bm-close"))
      .one("hidden.bs.modal", function () {
        $($this.data("bm-open")).modal("show");
      })
      .modal("hide");
  });
});
// alert/modal time out
$(".modal-auto-clear").on("shown.bs.modal", function () {
  $(this)
    .delay(3000)
    .fadeOut(300, function () {
      $(this).modal("hide");
    });
});
// Change the button text & add active class on input radio
$(".jRadioDropdown").change(function () {
  var dropdown = $(this).closest(".dropdown");
  var thislabel = $(this).closest("label");

  dropdown.find("label").removeClass("active");
  if ($(this).is(":checked")) {
    thislabel.addClass("active");
    dropdown.find("ins").html(thislabel.text());
  }
});

//Add tabindex on labels
$("label.dropdown-item").each(function (index, value) {
  $(this).attr("tabindex", 0);
  $(this).find("input").attr("tabindex", -1);
});

//Add keyboard navigation
$("label.dropdown-item").keypress(function (e) {
  if ((e.keyCode ? e.keyCode : e.which) == 13) {
    $(this).trigger("click");
  }
});

// check box
$(document).ready(function () {
  $(".check").click(function () {
    $(".check").not(this).prop("checked", false);
  });
});
jQuery(function ($) {
  // init the state from the input
  $(".image-checkbox").each(function () {
    if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
      $(this).addClass("image-checkbox-checked");
    } else {
      $(this).removeClass("image-checkbox-checked");
    }
  });

  // sync the state to the input
  $(".image-checkbox").on("click", function (e) {
    if ($(this).hasClass("image-checkbox-checked")) {
      $(this).removeClass("image-checkbox-checked");
      $(this).find('input[type="checkbox"]').first().removeAttr("checked");
    } else {
      $(this).addClass("image-checkbox-checked");
      $(this).find('input[type="checkbox"]').first().attr("checked", "checked");
    }

    e.preventDefault();
  });
});
// reset password page
$("#after_reset").hide();
// add email filled condition
$(document).ready(function () {
  $("#btn_reset").on("click", function () {
    $("#before_reset").hide();
    $("#after_reset").fadeIn(800);
  });
});

// quantity buttons
$(".btn-number").click(function (e) {
  e.preventDefault();

  fieldName = $(this).attr("data-field");
  type = $(this).attr("data-type");
  var input = $("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if (type == "minus") {
      if (currentVal > input.attr("min")) {
        input.val(currentVal - 1).change();
      }
      if (parseInt(input.val()) == input.attr("min")) {
        $(this).attr("disabled", true);
      }
    } else if (type == "plus") {
      if (currentVal < input.attr("max")) {
        input.val(currentVal + 1).change();
      }
      if (parseInt(input.val()) == input.attr("max")) {
        $(this).attr("disabled", true);
      }
    }
  } else {
    input.val(0);
  }
});
$(".input-number").focusin(function () {
  $(this).data("oldValue", $(this).val());
});
$(".input-number").change(function () {
  minValue = parseInt($(this).attr("min"));
  maxValue = parseInt($(this).attr("max"));
  valueCurrent = parseInt($(this).val());

  name = $(this).attr("name");
  if (valueCurrent >= minValue) {
    $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr(
      "disabled"
    );
  } else {
    alert("Sorry, the minimum value was reached");
    $(this).val($(this).data("oldValue"));
  }
  if (valueCurrent <= maxValue) {
    $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr(
      "disabled"
    );
  } else {
    alert("Sorry, the maximum value was reached");
    $(this).val($(this).data("oldValue"));
  }
});
$(".input-number").keydown(function (e) {
  // Allow: backspace, delete, tab, escape, enter and .
  if (
    $.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
    // Allow: Ctrl+A
    (e.keyCode == 65 && e.ctrlKey === true) ||
    // Allow: home, end, left, right
    (e.keyCode >= 35 && e.keyCode <= 39)
  ) {
    // let it happen, don't do anything
    return;
  }
  // Ensure that it is a number and stop the keypress
  if (
    (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
    (e.keyCode < 96 || e.keyCode > 105)
  ) {
    e.preventDefault();
  }
});
//  custom label functions
$(".custom_label").click(function () {
  $(".span2").show();
  $(".span1").hide();
  $(".custom_label").click(function () {
    $(".custom_label").removeClass("radiobackground");
    $(this).addClass("radiobackground");
  });
});
// // drop down hover on fullscreen
// const $dropdown = $(".dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";

// $(window).on("load resize", function () {
//   if (this.matchMedia("(min-width: 768px)").matches) {
//     $dropdown.hover(
//       function () {
//         const $this = $(this);
//         $this.addClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "true");
//         $this.find($dropdownMenu).addClass(showClass);
//       },
//       function () {
//         const $this = $(this);
//         $this.removeClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "false");
//         $this.find($dropdownMenu).removeClass(showClass);
//       }
//     );
//   } else {
//     $dropdown.off("mouseenter mouseleave");
//   }
// });
$(".navbar-toggler").click(function () {
  $(this).toggleClass("active");
});
// active for registration
$('.nav-tabs a[href="#signup"]').tab("show");
$('.nav-tabs a[href="#profile"]').tab("show");
$('.nav-tabs a[href="#gmtab"]').tab("show");
$('.nav-tabs a[href="#Incoming"]').tab("show");
//seller carousel
$(".seller_carousel").owlCarousel({
  items: 5,
  nav: true,
  dots: false,
  touchDrag: true,
  margin: 10,
  loop: false,
  navRewind: false,
  lazyLoad: true,
  navText: [
    "<div class='nav-btn prev-slide'></div>",
    "<div class='nav-btn next-slide'></div>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      center: true,
      items: 1,
      nav: false,
      loop: false,
      touchDrag: true,
      lazyLoad: true,
      pullDrag: true,
    },
    600: {
      items: 3,
      nav: false,
      loop: false,
      lazyLoad: true,
      touchDrag: true,
      pullDrag: true,
    },
    1000: {
      items: 3,
      nav: false,
      loop: false,
      navRewind: false,
    },
    1300: {
      items: 5,
      nav: true,
      loop: false,
      navRewind: false,
    },
  },
});
// brand carousel
$(".brand_carousel").owlCarousel({
  items: 4,
  nav: true,
  dots: false,
  touchDrag: true,
  lazyLoad: true,
  loop: false,
  navRewind: false,
  navText: [
    "<div class='nav-btn prev-slide'></div>",
    "<div class='nav-btn next-slide'></div>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      loop: false,
      touchDrag: true,
      pullDrag: true,
      lazyLoad: true,
    },
    600: {
      items: 2,
      nav: false,
      loop: false,
      touchDrag: true,
      lazyLoad: true,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
      navRewind: false,
      lazyLoad: true,
    },
  },
});
// deal_carousel

$(".deal_carousel").owlCarousel({
  items: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  nav: false,
  dots: true,
  touchDrag: true,
  lazyLoad: true,
  loop: true,
  navRewind: true,
});

// Ring carousel
$(".ring_carousel").owlCarousel({
  items: 4,
  nav: false,
  dots: true,
  touchDrag: true,
  lazyLoad: true,
  loop: false,
  navRewind: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      loop: false,
      touchDrag: true,
      pullDrag: true,
      lazyLoad: true,
    },
    600: {
      items: 2,
      nav: false,
      loop: false,
      touchDrag: true,
      lazyLoad: true,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
      navRewind: false,
      lazyLoad: true,
    },
  },
});
