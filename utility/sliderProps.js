function Arrow(props) {
  const { onClick, icon } = props;
  return <i className={icon} onClick={onClick} />;
}

export const sliderProps = {
  blogSlider: {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    prevArrow: <Arrow icon="fas left icon fa-arrow-left" />,
    nextArrow: <Arrow icon="fas right icon fa-arrow-right" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  recognitionSlider: {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  testimonialSlider: {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    prevArrow: <Arrow icon="fas left icon fa-arrow-left" />,
    nextArrow: <Arrow icon="fas right icon fa-arrow-right" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
};
