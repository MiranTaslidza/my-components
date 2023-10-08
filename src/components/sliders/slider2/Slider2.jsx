import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick";
import "./Slider2.css";

function Slider2() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Inicijalizacija Slick Carousel
    $(slider).slick({
      centerMode: true,
      //koliko slajdova prikazuje
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 4900,
      focusOnSelect: true,
      infinite: true,
      centerPadding: "0",
    });

    return () => {
      // Cleanup kod (ako je potrebno)
      $(slider).slick("unslick");
    };
  }, []);

  return (
    <div>
      <section id="slider" ref={sliderRef}>
        <div className="slide" id="slider1">
          <h2>Slide 1</h2>
        </div>
        <div className="slide" id="slider2">
          <h2>Slide 2</h2>
        </div>
        <div className="slide" id="slider3">
          <h2>Slide 3</h2>
        </div>
        <div className="slide" id="slider4">
          <h2>Slide 4</h2>
        </div>
        <div className="slide" id="slider5">
          <img
            className="img-slide"
            src="https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.6435-9/87258211_3080786751945999_3883237201131077632_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SnGGCYceV00AX_rnI-1&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfB5poel4sxyFwzlxGS_KfsoY_jYyWbALlJQaB3cOSxncA&oe=654777EC"
            alt=""
          />
        </div>
        <div className="slide" id="slider6">
          <img
            className="img-slide"
            src="https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.6435-9/129054120_3872939506064049_952057163094469731_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vRn_mRyYKYwAX9xcZMP&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfBa4kmirTCG7fagNLhk3Vu1W6Gq67ANv05T9Z_DntOHJw&oe=65476F45"
            alt=""
          />
        </div>
        <div className="slide" id="slider7">
          <img
            className="img-slide"
            src="https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.6435-9/102411496_3337324092958929_5902845155739697152_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=qBSHa627hMsAX-rnwm1&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfC01Lg-rlead0KlSUxxrYnbHyP7muPGUrBu9q_FLwotHw&oe=65477A94"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default Slider2;
