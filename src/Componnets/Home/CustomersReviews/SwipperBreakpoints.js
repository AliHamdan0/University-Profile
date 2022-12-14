export const Responsive = {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    clickable: true,
  },
  loop: true,
  navigation: false,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    // when window width is >= 1400px
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 1600px
    1600: {
      slidesPerView: 5,
      spaceBetween: 35,
    },
    // when window width is >= 1800px  and 4k screen
    1800: {
      slidesPerView: 6,
      spaceBetween: 35,
    },
  },
  rebuildonupdate: "true",
  shouldswiperupdate: "true",
};
