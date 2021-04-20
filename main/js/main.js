// drop down hover on fullscreen

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

// active
$('.nav-tabs a[href="#signup"]').tab("show");

// carousel
$(".owl-carousel").owlCarousel({
  items: 3,
  nav: true,
  dots: false,
  loop: false,
  navRewind: false,
  navText: ["<img src='myprevimage.png'>", "<img src='mynextimage.png'>"],
});
