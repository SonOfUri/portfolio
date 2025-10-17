import WorkTogether from "@/components/WorkTogether";
import SonOfURILayout from "@/layout/SonOfURILayout";
import Link from "next/link";
const page = () => {
  const projectItems = [
    // Ordered per request; unlisted BoeOnBase placed before final LendbitV
    {
      id: 2,
      title: "Lendbit - A P2P Liquidity Platform",
      subtitle: "Frontend Development | Smart Contracts",
      img: "/assets/img/projects/Lendbit.png",
      link: "https://lendbit.finance/",
      description: "Peer-to-peer liquidity marketplace enabling permissionless lending and borrowing.",
      stack: ["Next.js", "React", "Solidity", "Hardhat", "Ethers.js", "TailwindCSS"],
    },
    {
      id: 10,
      title: "SchoolEXL - School Management Platform",
      subtitle: "Frontend Development | UI/UX Design",
      img: "/assets/img/projects/SchoolEXL.png",
      link: "https://www.schoolexl.com",
      description: "World’s First Agentic AI driven voice-enabled platform for Classrooms. SchoolExl will directly impact over 1,00,000 children across 1,327+ free schools in 22 states, covering 2,032 rural, tribal, and urban communities.",
      stack: ["Next.js", "React", "TailwindCSS"],
    },
    {
      id: 1,
      title: "vProtocol - A DEFI Lending Protocol",
      subtitle: "Frontend Development | Smart Contracts",
      img: "/assets/img/projects/vProtocol.png",
      link: "https://vprotocol.xyz/",
      description: "Collateralized DeFi lending protocol with clean UX and robust contract flows.",
      stack: ["Next.js", "React", "Solidity", "Hardhat", "Ethers.js", "TailwindCSS"],
    },
    {
      id: 11,
      title: "Assetrix - Digital Asset Management",
      subtitle: "Frontend Development",
      img: "/assets/img/projects/Assetrix.png",
      link: "https://assetrix.com/",
      description: "Digital asset management and analytics for modern teams.",
      stack: ["Next.js", "React", "TailwindCSS"],
    },
    {
      id: 3,
      title: "Apollo Wallet - 'Disposable' EVM wallet",
      subtitle: "Frontend Development | Smart Contracts",
      img: "/assets/img/projects/Apollowallet.png",
      link: "https://apollowallet.vercel.app/?pvkey=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      description: "Lightweight, 'disposable' wallet for quick, ephemeral EVM interactions.",
      stack: ["Next.js", "React", "Ethers.js", "TailwindCSS", "OKX API"],
    },
    {
      id: 9,
      title: "ExamCompass - An Online UTME practice appliction",
      subtitle: "Frontend Development | UI/UX Design",
      img: "/assets/img/projects/examcompass.webp",
      link: "https://play.google.com/store/apps/details?id=com.examcompassng.ExamCompass",
      description: "Mobile app for UTME preparation with realistic practice questions and timing.",
      stack: ["React Native", "Expo", "Firebase"],
    },
    {
      id: 6,
      title: "Starkaid - Web3 Crowdfunding Platform",
      subtitle: "Frontend Development | Smart Contracts",
      img: "/assets/img/projects/Starkaid.png",
      link: "https://starkaid.vercel.app/",
      description: "Crowdfunding platform on Starknet enabling transparent, on-chain donations.",
      stack: ["Next.js", "React", "Cairo", "starknet.js", "TailwindCSS"],
    },
    {
      id: 8,
      title: "MockExam - An onsite CBT practice platfrom",
      subtitle: "Frontend Development | UI/UX Design",
      img: "/assets/img/projects/mockexam.png",
      link: "https://mockexamsng.com/",
      description: "Computer-based testing platform for schools and training centers.",
      stack: ["Next.js", "React", "TailwindCSS"],
    },
    {
      id: 5,
      title: "dStore - Decentralized File Storage",
      subtitle: "Frontend Development | Smart Contracts",
      img: "/assets/img/projects/dStore.png",
      link: "https://d-store-dahsboard.vercel.app/",
      description: "Decentralized file storage UI with IPFS/Web3.Storage integrations.",
      stack: ["Next.js", "React", "IPFS", "web3.storage", "Ethers.js", "TailwindCSS"],
    },
    {
      id: 4,
      title: "BoeOnBase - Culture Coin On Base",
      subtitle: "Frontend Development",
      img: "/assets/img/projects/Boeonbase.png",
      link: "https://boe-on-base.vercel.app/main.html",
      description: "Brand site with 3D/visual effects for a culture coin on Base.",
      stack: ["HTML", "CSS", "JavaScript", "Three.js"],
    },
    {
      id: 7,
      title: "LendbitV - DEFI Lending Telegram Mini-app",
      subtitle: "Frontend Development | Smart Contracts",
      img: "/assets/img/projects/project-3.png",
      link: "",
      description: "Telegram mini-app for on-the-go DeFi lending flows.",
      stack: ["Next.js", "React", "Telegram WebApp SDK", "starknet.js", "Cairo"],
    },
  ];
  return (
    <SonOfURILayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Check Out My Latest <span>Projects</span>
                </h1>
                <p>
                  Looking to build something powerful? I design and develop Web3 products that are beautiful, functional, and future-ready.
                </p>
              </div>
            </div>
            <div className="portfolio-area">
              <div className="row g-4 parent-container">
                {projectItems.map((item) => (
                  <div className="col-lg-12" key={item.id}>
                    <div className="portfolio-item">
                      <div className="image">
                        <img
                          src={item.img}
                          alt={`project-${item.id}`}
                          className="img-fluid w-100"
                        />
                        <a
                          href={item.img}
                          className="gallery-popup full-image-preview parent-container"
                        >
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          >
                            <path d="M10 4.167v11.666M4.167 10h11.666" />
                          </svg>
                        </a>
                      </div>
                      <div className="text">
                        <div className="info">
                          <span className="title">{item.title}</span>
                          <p className="subtitle">{item.subtitle}</p>
                          {item.description && (
                            <p className="project-desc text-muted mt-2">{item.description}</p>
                          )}
                          {Array.isArray(item.stack) && item.stack.length > 0 && (
                            <div className="stack d-flex flex-wrap gap-2 mt-2">
                              {item.stack.map((tech) => (
                                <span key={tech} className="badge rounded-pill bg-light text-dark border">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="visite-btn">
                          <Link href={item.link}>
                            Visit Site
                            <svg
                              className="arrow-up"
                              width={14}
                              height={15}
                              viewBox="0 0 14 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.91634 4.5835L4.08301 10.4168"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.66699 4.5835H9.91699V9.8335"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/*<div className="pagination">*/}
              {/*  <ul className="list-unstyled">*/}
              {/*    <li className="prev">*/}
              {/*      <button>*/}
              {/*        <svg*/}
              {/*          className="icon"*/}
              {/*          xmlns="http://www.w3.org/2000/svg"*/}
              {/*          fill="none"*/}
              {/*          viewBox="0 0 24 24"*/}
              {/*          strokeWidth={2}*/}
              {/*          stroke="currentColor"*/}
              {/*        >*/}
              {/*          <path*/}
              {/*            strokeLinecap="round"*/}
              {/*            strokeLinejoin="round"*/}
              {/*            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"*/}
              {/*          />*/}
              {/*        </svg>*/}
              {/*      </button>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <button>1</button>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <button>2</button>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <button>3</button>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <button className="next-page-btn">*/}
              {/*        <span className="dots">*/}
              {/*          <i className="fas fa-ellipsis-h" />*/}
              {/*        </span>*/}
              {/*        <span className="next-page">*/}
              {/*          <svg*/}
              {/*            className="icon icon-arrow-right"*/}
              {/*            xmlns="http://www.w3.org/2000/svg"*/}
              {/*            width={24}*/}
              {/*            height={24}*/}
              {/*            viewBox="0 0 24 24"*/}
              {/*            fill="none"*/}
              {/*            stroke="currentColor"*/}
              {/*            strokeWidth={2}*/}
              {/*            strokeLinecap="round"*/}
              {/*            strokeLinejoin="round"*/}
              {/*          >*/}
              {/*            <path d="m6 17 5-5-5-5" />*/}
              {/*            <path d="m13 17 5-5-5-5" />*/}
              {/*          </svg>*/}
              {/*        </span>*/}
              {/*        <span className="next-page-number">Next 4 pages</span>*/}
              {/*      </button>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <button>100</button>*/}
              {/*    </li>*/}
              {/*    <li className="next">*/}
              {/*      <button>*/}
              {/*        <svg*/}
              {/*          className="icon"*/}
              {/*          xmlns="http://www.w3.org/2000/svg"*/}
              {/*          fill="none"*/}
              {/*          viewBox="0 0 24 24"*/}
              {/*          strokeWidth={2}*/}
              {/*          stroke="currentColor"*/}
              {/*        >*/}
              {/*          <path*/}
              {/*            strokeLinecap="round"*/}
              {/*            strokeLinejoin="round"*/}
              {/*            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"*/}
              {/*          />*/}
              {/*        </svg>*/}
              {/*      </button>*/}
              {/*    </li>*/}
              {/*  </ul>*/}
              {/*</div>*/}
            </div>
            <WorkTogether />
          </div>
        </div>
      </div>
    </SonOfURILayout>
  );
};
export default page;
