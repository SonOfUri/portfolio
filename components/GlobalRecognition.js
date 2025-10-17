"use client";
import Link from "next/link";
import Slider from "react-slick";
import { sliderProps } from "@/utility/sliderProps";

const GlobalRecognition = () => {
  const sources = [
    { name: "Base (X)", href: "https://x.com/base/status/1938148357731647931" },
    { name: "TheCable", href: "https://www.thecable.ng/assetrix-launches-to-bring-trust-and-liquidity-to-real-estate-investment/" },
    { name: "TechCabal", href: "https://techcabal.com/2025/10/01/assetrix-launches-to-bring-trust-and-liquidity-to-real-estate-investment/" },
    { name: "TechEconomy", href: "https://techeconomy.ng/assetrix-launches-to-bring-trust-and-liquidity-to-real-estate-investment/" },
    { name: "New Indian Express", href: "https://www.newindianexpress.com/states/karnataka/2025/Oct/03/sri-sri-ravi-shankar-launches-schoolexl-project" },
    { name: "MSN India", href: "https://www.msn.com/en-in/news/India/sri-sri-ravi-shankar-launches-schoolexl-project/ar-AA1NM1X3" },
    { name: "EdexLive", href: "https://www.edexlive.com/news/sri-sri-ravi-shankar-launches-schoolexl-project" },
    { name: "LinkedIn", href: "https://www.linkedin.com/posts/timothy-alo-117139236_today-i-had-the-honor-of-representing-lendbit-activity-7343332733038878720-lGar?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADrAnGMBqW8_hZMmYoqcjJugkOj6uy_w0FI" },
  ];

  const highlights = [
    {
      id: 1,
      outlet: "Base (X)",
      project: "Lendbit",
      projectLink: "https://lendbit.finance/",
      title: "Base is spotlighting Lendbit’s cross‑chain lending.",
      img: "assets/img/news/base.jpeg",
      date: "Jun, 2025",
      link: "https://x.com/base/status/1938148357731647931",
    },
    {
      id: 2,
      outlet: "Tech Cabal",
      project: "Assetrix",
      projectLink: "https://assetrix.com/",
      title: "Assetrix is unlocking real estate across Africa.",
      img: "assets/img/news/techcabal.png",
      date: "Oct 02, 2025",
      link: "https://techcabal.com/2025/10/01/assetrix-launches-to-bring-trust-and-liquidity-to-real-estate-investment/",
    },
    {
      id: 3,
      outlet: "New Indian Express",
      project: "SchoolEXL",
      projectLink: "https://www.schoolexl.com",
      title: "SchoolEXL is powering AI classrooms across India.",
      img: "assets/img/news/TIE.png",
      date: "Oct 03, 2025",
      link: "https://www.newindianexpress.com/states/karnataka/2025/Oct/03/sri-sri-ravi-shankar-launches-schoolexl-project",
    },
  ];

  return (
    <div className="global-recognition-area">
      <div className="card global-recognition-card">
        <div className="card-body">
          <h3 className="card-title">
            {/* Global Recognition */}
            From Basement Builds to Global Spotlight
            <Link className="link-btn" href="/blog">
              Press & Features
              <svg
                className="icon"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16699 10H15.8337"
                  stroke="#4770FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.833 15L15.833 10"
                  stroke="#4770FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.833 5L15.833 10"
                  stroke="#4770FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </h3>

          {/* <div className="as-seen-in mt-16 d-flex flex-wrap gap-2">
            {sources.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="badge rounded-pill bg-light text-dark border"
              >
                {s.name}
              </a>
            ))}
          </div> */}

          <div className="highlights mt-24">
            <Slider {...sliderProps.recognitionSlider} className="row article-publications-slider">
              {highlights.map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <div className="d-flex align-items-start gap-3">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="d-inline-block">
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{ width: 85, height: 85, objectFit: "cover", borderRadius: 8 }}
                      />
                    </a>
                    <div className="flex-grow-1">
                      <a
                        href={item.link}
                        className="title d-block"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                      >
                        {item.title}
                      </a>
                      <div className="d-flex flex-wrap gap-2 mt-2">
                        <a href={item.link} className="badge rounded-pill bg-light text-dark border" target="_blank" rel="noopener noreferrer">
                          {item.outlet}
                        </a>
                        {item.projectLink ? (
                          <a
                            href={item.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge rounded-pill bg-light text-dark border"
                          >
                            {item.project}
                          </a>
                        ) : (
                          <span className="badge rounded-pill bg-light text-dark border">{item.project}</span>
                        )}
                        <span className="badge rounded-pill bg-light text-dark border">{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalRecognition;


