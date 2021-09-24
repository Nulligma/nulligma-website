import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import FsLightbox from "fslightbox-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import SwiperCore, { Mousewheel, Pagination, Autoplay } from "swiper";
import ProjectImage from "./image/ProjectImage";

function Portfolio({ work }) {
  SwiperCore.use([Mousewheel, Pagination, Autoplay]);

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const [logoBoxController, setlogoBoxController] = useState({
    switcher: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  function openlogoBoxOnSlide(number) {
    setlogoBoxController({
      switcher: !logoBoxController.switcher,
      slide: number,
    });
  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        mousewheel={true}
        grabCursor={true}
        modules={[EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        //   onSlideChange={() => console.log("slide change")}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="swiper-wrapper">
          {work.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-img">
                <ProjectImage imgName={project.imageName} />
              </div>
              <div className="project-content">
                {/* <span className="project-category">{project.category}</span> */}
                <div className="project-title">{project.title}</div>
                <p className="project-description">{project.description}</p>
                <button
                  onClick={function () {
                    console.log(project.category);
                    console.log(project.link);

                    if (project.link) window.open(project.link, "_blank");
                    else if (project.category === "Game Art")
                      openLightboxOnSlide(index + 1);
                    else if (project.category === "Logo & Branding")
                      openlogoBoxOnSlide(index + 1);
                  }}
                  className="project-button"
                >
                  {project.buttonTxt}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          "/game_art/newChars.png",
          "/game_art/zac.jpg",
          "/game_art/RiseOfFactionsSS2.jpg",
          "/game_art/ROFUI.jpg",
          "/game_art/ROF_buildIcons.jpg",
          "/game_art/ROF_techtree.jpg",
          "/game_art/ending.jpg",
          "/game_art/spaceCityUI2.jpg",
          "/game_art/spacecityBuildings.jpg",
          "/game_art/ttpUI.jpg",
        ]}
        slide={lightboxController.slide}
      />
      <FsLightbox
        toggler={logoBoxController.switcher}
        sources={[
          "/logo_branding/jT.jpg",
          "/logo_branding/nullLogo.jpg",
          "/logo_branding/card.jpg",
          "/logo_branding/company-logo.jpg",
          "/logo_branding/gg_animated.MP4",
          "/logo_branding/ttpIcons.jpg",
          "/logo_branding/logoCompilation.jpg",
          "/logo_branding/4xIcons.jpg",
          "/logo_branding/sbScreens.jpg",
        ]}
        slide={logoBoxController.slide}
      />
    </>
  );
}

export default Portfolio;
