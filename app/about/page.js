import Awards from "@/components/Awards";
import BlogSlider from "@/components/Blog";
// import Brands from "@/components/Brands";
// import Testimonial from "@/components/Testimonial";
import WorkTogether from "@/components/WorkTogether";
import SonOfURILayout from "@/layout/SonOfURILayout";
const page = () => {
  const counterItems = [
    { id: 1, title: "Year of Experience", value: 5 },
    { id: 2, title: "Project Completed", value: 50 },
    { id: 3, title: "Happy Client", value: 65 },
  ];
  const about = {
    name: "Son Of Uri",
    bio: " A Passionate <b>Web3 Developer</b> 🖥️ &amp; <b>Product Designer</b> having <b>5 years </b> of Experiences over 50+ Project Worldwide.",
  };

  return (
    <SonOfURILayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Hi, This Is <span>{about.name}</span> <span className="wave"> 👋 </span>
                </h1>
                <p dangerouslySetInnerHTML={{ __html: about.bio }}></p>
              </div>
              <div className="available-btn">
                <span>
                  <i className="fas fa-circle" /> Available For Work
                </span>
              </div>
            </div>
            <div className="counter-area">
              <div className="counter">
                {counterItems.map((item) => (
                  <div className="counter-item" key={item.id}>
                    <h3 className="number">{item.value}+</h3>
                    <p className="subtitle">{item.title}</p>
                  </div>
                ))}
              </div>
              <div className="circle-area">
                <div className="circle-text">
                  <img
                    className="circle-image"
                    src="assets/img/about-us/circle-text.svg"
                    alt="circle-text"
                  />
                  <img
                    className="circle-image circle-image-light d-none"
                    src="assets/img/about-us/circle-text-light.svg"
                    alt="circle-text"
                  />
                  <span className="arrow-down">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 5V35"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 30L20 35L25 30"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            {/*<Brands />*/}
            {/*<Testimonial />*/}
            <Awards />
            <BlogSlider />
            <WorkTogether />
          </div>
        </div>
      </div>
    </SonOfURILayout>
  );
};
export default page;
