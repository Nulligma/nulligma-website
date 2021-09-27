import React, { useState } from "react";
import Portfolio from "./Portfolio";

function Projects() {
  const categories = [
    "Apps",
    "Websites",
    "Games",
    "Game Art",
    "Logo & Branding",
  ];

  const work = [
    {
      title: "Just Type",
      category: "Apps",
      description: "JustType is an AI powered chat assistant",
      link: "https://play.google.com/store/apps/details?id=app.just.type.JustType",
      buttonTxt: "Install (Android)",
      imageName: "jtApp",
    },
    {
      title: "GrafixGames client",
      category: "Apps",
      description:
        "An installable game client for windows.\nPlay all the great games at one place.",
      link: "/project_downloads/gameclient.zip",
      buttonTxt: "Download (Windows)",
      imageName: "gameclient",
    },
    {
      title: "PaintBook",
      category: "Apps",
      description:
        "Innovative Drawing application.\nFeatures:All advance tools of photoshop\nunlimited layers opacity and layer blends.\nGlow, DropShadow, Bevel\nhue/saturation/brightness/contrast.",
      link: "https://play.google.com/store/apps/details?id=air.com.nulligma.paintbook",
      buttonTxt: "Install (Android)",
      imageName: "paintbook",
    },
    {
      title: "SuperFlix",
      category: "Apps",
      description:
        "Video streaming app to watch tv and movies.\n\nusername: shantanu@gmail.com\npassword: 123456\nGo to myProfile to access admin panel",
      link: "/project_downloads/superFlix.apk",
      buttonTxt: "Install (Android)",
      imageName: "superFlix",
    },
    {
      title: "MixMax",
      category: "Apps",
      description:
        "Short-form videos sharing app.\nSocial media app for short videos\nLike TikTok",
      link: "/project_downloads/mixmax.apk",
      buttonTxt: "Install (Android)",
      imageName: "mixMax",
    },
    {
      title: "GameOn",
      category: "Apps",
      description: "Video game live streaming app like twitch",
      link: "/project_downloads/gameon.apk",
      buttonTxt: "Install (Android)",
      imageName: "twitch",
    },
    {
      title: "Tasty Treat Puzzle",
      category: "Games",
      description:
        "An addictive match 2 puzzle game.\nVery polished graphics paired\nwith well developed gameplay.",
      link: "https://play.google.com/store/apps/details?id=com.nulligma.TastyTreatPuzzle",
      buttonTxt: "Install (Android)",
      imageName: "ttp",
    },
    {
      title: "Pixelmetric.io",
      category: "Games",
      description:
        "Multiplayer puzzle battle royal.\nSolve color puzzles fast to win.\nShow your creativity on open canvas",
      link: "/project_downloads/Pixelmetric.zip",
      buttonTxt: "Download (windows)",
      imageName: "pixelmetric",
    },
    {
      title: "4x Number Puzzle",
      category: "Games",
      description:
        "Number addition and substraction puzzle game\nMinimal graphics done correctly.\nEasy to understand, hard to master gameplay",
      link: "https://nulligma.itch.io/4x-number-puzzle",
      buttonTxt: "Play now",
      imageName: "4x",
    },
    {
      title: "Bird Hunter",
      category: "Games",
      description:
        "Arrow shooting game\nKill birds -> sell -> buy upgrades\nKill more birds",
      link: "https://nulligma.itch.io/bird-hunter",
      buttonTxt: "Play now",
      imageName: "bh",
    },
    {
      title: "Reflex snake",
      category: "Games",
      description: "A snake game with an interesting twist.",
      link: "/project_downloads/snake.zip",
      buttonTxt: "Download (windows)",
      imageName: "snake",
    },
    {
      title: "Zombies are coming",
      category: "Games",
      description: "Zombie shooting game.\nThis game will test your reflexes",
      link: "/project_downloads/zac.zip",
      buttonTxt: "Download (windows)",
      imageName: "zac",
    },
    {
      title: "SwitchBalls",
      category: "Games",
      description:
        "Switch Balls has 38 challenging stages\nExciting objects like \nwormholes,portal,beam switcher etc",
      link: "/project_downloads/switch.zip",
      buttonTxt: "Download (windows)",
      imageName: "sb",
    },
    {
      title: "JustType Website",
      category: "Websites",
      description:
        "A website to show featuers of your app\n-Multi languague support\n-SSR enabled and SEO optimised",
      link: "https://objective-williams-002ebf.netlify.app/",
      buttonTxt: "Visit",
      imageName: "jt-web",
    },
    {
      title: "VectrStudios",
      category: "Websites",
      description:
        "Landing Page for SASS product\n-Pages Included :\n-Software Supported, Pricing Table, Features",
      link: "https://relaxed-carson-106dfd.netlify.app/",
      buttonTxt: "Visit",
      imageName: "vectr",
    },
    {
      title: "SuperFlix WebApp",
      category: "Websites",
      description:
        "Web App for video streaming\nusername: shantanu@gmail.com\npassword: 123456\nGo to myProfile to access admin panel",
      link: "https://inspiring-shirley-9df319.netlify.app/#/",
      buttonTxt: "Visit",
      imageName: "superFlix-web",
    },
    {
      title: "MixMax WebApp",
      category: "Websites",
      description:
        "Web App for short video sharing\n-Wall feed for short videos like FB or tikok\n-Profile page and in-built messaging system",
      link: "https://trusting-poincare-801a02.netlify.app/",
      buttonTxt: "Visit",
      imageName: "mixmax-web",
    },
    {
      title: "GameOn WebApp",
      category: "Websites",
      description:
        "Web App for video game streaming\n-In-Built system for live gamers\n-Dark/Light theme switcher\n-Customizable pages for each \ngames and gamer's profile",
      link: "https://flamboyant-hodgkin-24dbc1.netlify.app/",
      buttonTxt: "Visit",
      imageName: "twitch-web",
    },
    {
      title: "Game characters",
      category: "Game Art",
      description:
        "4 directional game characters\nHeads of various character types\nfor chess type game",
      buttonTxt: "View",
      imageName: "charecters",
    },
    {
      title: "Zombies",
      category: "Game Art",
      description:
        "2d Zobmie characters\nCharacters with walking and dying cycles",
      buttonTxt: "View",
      imageName: "zac-chars",
    },
    {
      title: "Rise of Factions screens",
      category: "Game Art",
      description: "Various game screens\nfor a SCI-FI strategy game",
      buttonTxt: "View",
      imageName: "rof-screens",
    },
    {
      title: "Rise of Factions UI",
      category: "Game Art",
      description: "UI elements for a SCI-FI strategy game",
      buttonTxt: "View",
      imageName: "rof-ui",
    },
    {
      title: "Rise of Factions Icons",
      category: "Game Art",
      description: "Icons of various builing types\nfor a SCI-FI strategy game",
      buttonTxt: "View",
      imageName: "rof-icons",
    },
    {
      title: "Rise of Factions Techs",
      category: "Game Art",
      description: "Icons of tech tree\nfor a SCI-FI strategy game",
      buttonTxt: "View",
      imageName: "rof-tech",
    },
    {
      title: "Rise of Factions Ending",
      category: "Game Art",
      description: "Ending screen\nfor a SCI-FI strategy game",
      buttonTxt: "View",
      imageName: "rof-ending",
    },
    {
      title: "Space City UI",
      category: "Game Art",
      description: "UI elements for a SCI-FI city building game",
      buttonTxt: "View",
      imageName: "spacecity-ui",
    },
    {
      title: "Space City Icons",
      category: "Game Art",
      description:
        "Icons of various builing types\nfor a SCI-FI city building game",
      buttonTxt: "View",
      imageName: "spacecity-icons",
    },
    {
      title: "Multi themed UI",
      category: "Game Art",
      description: "Cake game\nUI in various color themes.",
      buttonTxt: "View",
      imageName: "ttp-ui",
    },
    {
      title: "Just Type Branding",
      category: "Logo & Branding",
      description:
        "A stunning & unique logo/brand design\n-To fit the product’s description\n-Depicts user & expert communicating\n-Designed with the letters 'J' & 't'\nShort for Just type",
      buttonTxt: "View Full Branding",
      imageName: "justtype-branding",
    },
    {
      title: "Company Branding",
      category: "Logo & Branding",
      description:
        "We create a brand that:\n-Conveys the essence of your brand\n-Has an appropriate style\n-Gives you a unique identity\n-Has a relevant color scheme",
      buttonTxt: "View Full Branding",
      imageName: "logo",
    },
    {
      title: "Company Cards",
      category: "Logo & Branding",
      description:
        "We design company cards with\n-Personalized business logos\n-High-quality designs & graphics\n-Customer attracting moto\n-Special themes & templates",
      buttonTxt: "View Card",
      imageName: "company-cards",
    },
    {
      title: "Company prints",
      category: "Logo & Branding",
      description:
        "We provide the best visual prints that\n-Look very professional\n-Empowers small business marketing\n-Are customized on-demand\nHas a superior print quality",
      buttonTxt: "View Print",
      imageName: "company-prints",
    },
    {
      title: "Animated Logo",
      category: "Logo & Branding",
      description:
        "Our animated logos make sure that it\n-Capture your customer’s attention\n-Evoke emotions\n-Communicate your story",
      buttonTxt: "Play Animation",
      imageName: "animatedLogo",
    },
    {
      title: "Logo styles",
      category: "Logo & Branding",
      description:
        "We provide tons of variations\nSo that pick your the best logo\nsuitable to your need",
      buttonTxt: "View All Variations",
      imageName: "game-branding",
    },
    {
      title: "Game Icons",
      category: "Logo & Branding",
      description:
        "We design creative game icons\n-With smart UI styles\n-That fit best to your game genre\n-Express more with a single glimpse",
      buttonTxt: "View Icons",
      imageName: "gameicons",
    },
    {
      title: "Game branding",
      category: "Logo & Branding",
      description:
        "We brand for your games to\n-Stand out on the app store\n-Boost up more & more users\n-Create a high buzz in the market\n-Build a well-known name",
      buttonTxt: "View Full Branding",
      imageName: "4x-branding",
    },
    {
      title: "Game promotion",
      category: "Logo & Branding",
      description:
        "We create assets to promote your game\n-To increase its market value\n-Build online presence\n-Trend it on social media\n-Drive users from worldwide",
      buttonTxt: "View Promotions",
      imageName: "game-promotion",
    },
  ];

  const [category, setCategory] = useState({
    title: "Apps",
    projects: work.filter((e) => e.category === "Apps"),
  });

  return (
    <section className="content-inner" id="projects">
      <div className="container">
        <div className="section-head style-1 text-center">
          <h6 className="sub-title bgl-primary m-b20 text-primary">Projects</h6>
          <h2 className="title">Some of our work</h2>
        </div>

        <div className="site-filters style-1 clearfix center m-b40">
          <ul className="filters">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`btn ${category.title === cat ? "active" : ""}`}
              >
                <button
                  onClick={() => {
                    const filtered = work.filter((e) => e.category === cat);
                    setCategory({
                      title: cat,
                      projects: filtered,
                    });
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Portfolio work={category.projects} />
        {/*<Swiper
          spaceBetween={50}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <h1>Slide 1</h1>
            <h3>Hello World</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 1</h1>
            <h3>Hello World</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 1</h1>
            <h3>Hello World</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 1</h1>
            <h3>Hello World</h3>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  );
}

export default Projects;
