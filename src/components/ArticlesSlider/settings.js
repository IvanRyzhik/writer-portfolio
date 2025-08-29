export const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  // adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
