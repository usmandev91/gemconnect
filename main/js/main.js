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

//seller carousel
$(".seller-carousel").owlCarousel({
  items: 5,
  nav: true,
  dots: false,
  touchDrag: true,
  margin: 10,
  loop: false,
  navRewind: false,
  lazyLoad: true,
  navText: ["<img src='prev.svg'>", "<img src='next.svg'>"],
  responsiveClass: true,
  responsive: {
    0: {
      center: true,
      items: 1,
      nav: true,
      loop: false,
      touchDrag: true,
      lazyLoad: true,
      pullDrag: true,
    },
    600: {
      items: 3,
      nav: true,
      loop: false,
      lazyLoad: true,
      touchDrag: true,
      pullDrag: true,
    },
    1000: {
      items: 3,
      nav: true,
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
  navText: ["<img src='prev.svg'>", "<img src='next.svg'>"],
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
