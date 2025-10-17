import BlogItem from "@/components/BlogItem";
import SonOfURILayout from "@/layout/SonOfURILayout";
const page = () => {
  const blogItems = [
    {
      id: 1,
      title: "Demystifying the Optimism Superchain",
      img: "assets/img/blog/blog.webp",
      category: "Development",
      date: "Jul 12, 2024",
      readingTime: "6 min",
      link: "https://medium.com/@sonofuri/demystifying-the-optimism-superchain-️-ac1d1545cdfe",
    },
    {
      id: 8,
      title: "Base features Lendbit & SonOfUri on X",
      img: "assets/img/blog/Basebatches.jpeg",
      category: "Base (X)",
      date: "Oct 17, 2025",
      readingTime: "1 min",
      link: "https://x.com/base/status/1938148357731647931",
    },
    {
      id: 9,
      title: "Representing Lendbit at IncuBase Demo Day",
      img: "assets/img/blog/incubase.jpeg",
      category: "LinkedIn",
      date: "Jul 2025",
      readingTime: "1 min",
      link: "https://www.linkedin.com/posts/timothy-alo-117139236_today-i-had-the-honor-of-representing-lendbit-activity-7343332733038878720-lGar?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADrAnGMBqW8_hZMmYoqcjJugkOj6uy_w0FI",
    },
    {
      id: 2,
      title: "Assetrix launches to bring trust and liquidity to real estate investment",
      img: "assets/img/blog/Assetrix.jpg",
      category: "TheCable",
      date: "Oct 02, 2025",
      readingTime: "2 min",
      link: "https://www.thecable.ng/assetrix-launches-to-bring-trust-and-liquidity-to-real-estate-investment/",
    },
    {
      id: 3,
      title: "Assetrix launches to bring trust and liquidity to real estate investment",
      img: "assets/img/blog/Assetrix.jpg",
      category: "TechCabal",
      date: "Oct 01, 2025",
      readingTime: "2 min",
      link: "https://techcabal.com/2025/10/01/assetrix-launches-to-bring-trust-and-liquidity-to-real-estate-investment/",
    },
    {
      id: 4,
      title: "Assetrix launches to bring trust and liquidity to real estate investment",
      img: "assets/img/blog/Assetrix.jpg",
      category: "TechEconomy",
      date: "Oct 01, 2025",
      readingTime: "2 min",
      link: "https://techeconomy.ng/assetrix-launches-to-bring-trust-and-liquidity-to-real-estate-investment/",
    },
    {
      id: 5,
      title: "Sri Sri Ravi Shankar launches SchoolExl Project",
      img: "https://media.newindianexpress.com/newindianexpress%2F2025-10-02%2Fmr0c4iul%2FShankar.jpg",
      category: "New Indian Express",
      date: "Oct 03, 2025",
      readingTime: "1 min",
      link: "https://www.newindianexpress.com/states/karnataka/2025/Oct/03/sri-sri-ravi-shankar-launches-schoolexl-project",
    },
    {
      id: 6,
      title: "Sri Sri Ravi Shankar launches SchoolExl Project",
      img: "https://media.newindianexpress.com/newindianexpress%2F2025-10-02%2Fmr0c4iul%2FShankar.jpg",
      category: "MSN India",
      date: "Oct 03, 2025",
      readingTime: "1 min",
      link: "https://www.msn.com/en-in/news/India/sri-sri-ravi-shankar-launches-schoolexl-project/ar-AA1NM1X3",
    },
    {
      id: 7,
      title: "Sri Sri Ravi Shankar launches SchoolExl Project",
      img: "https://media.newindianexpress.com/newindianexpress%2F2025-10-02%2Fmr0c4iul%2FShankar.jpg",
      category: "EdexLive",
      date: "Oct 03, 2025",
      readingTime: "1 min",
      link: "https://www.edexlive.com/news/sri-sri-ravi-shankar-launches-schoolexl-project",
    },


  ];
  return (
    <SonOfURILayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">Articles & Press Features</h1>
                <p>
                  Not just my writing—this page highlights global press coverage and features about my work, alongside my own articles and publications.
                </p>
              </div>
            </div>
            <div className="article-publications article-area">
              <div className="article-publications-main">
                <div className="row">
                  {blogItems.map((item) => (
                    <BlogItem item={item} key={item.id} />
                  ))}
                </div>
              </div>
            </div>
            <div className="pagination">
              <ul className="list-unstyled">
                <li className="prev">
                  <button>
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button>1</button>
                </li>
                <li>
                  <button>2</button>
                </li>
                <li>
                  <button>3</button>
                </li>
                <li>
                  <button className="next-page-btn">
                    <span className="dots">
                      <i className="fas fa-ellipsis-h" />
                    </span>
                    <span className="next-page">
                      <svg
                        className="icon icon-arrow-right"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 17 5-5-5-5" />
                        <path d="m13 17 5-5-5-5" />
                      </svg>
                    </span>
                    <span className="next-page-number">Next 4 pages</span>
                  </button>
                </li>
                <li>
                  <button>100</button>
                </li>
                <li className="next">
                  <button>
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SonOfURILayout>
  );
};
export default page;
