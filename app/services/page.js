import Awards from "@/components/Awards";
// import Brands from "@/components/Brands";
// import Faq from "@/components/Faq";
import ServiceItem from "@/components/ServiceItem";
import Testimonial from "@/components/Testimonial";
import WorkTogether from "@/components/WorkTogether";
import SonOfURILayout from "@/layout/SonOfURILayout";
const page = () => {
  const serviceItems = [
    { id: 1, icon: "/assets/img/icons/branding.svg", title: "Branding" },
    {
      id: 2,
      icon: "/assets/img/icons/prd-design.svg",
      title: "Product Design",
    },
    {
      id: 3,
      icon: "/assets/img/icons/web-development.svg",
      title: "Web Development",
    },
    { id: 4, icon: "/assets/img/icons/app.svg", title: "Smart Contract Dev" },

    // { id: 1, icon: "/assets/img/icons/ui-ux.svg", title: "Web Development" },
    // { id: 2, icon: "/assets/img/icons/app.svg", title: "Smart Contract" },
    // {
    //   id: 3,
    //   icon: "/assets/img/icons/prd-design.svg",
    //   title: "Product Design",
    // },
    // { id: 4, icon: "/assets/img/icons/branding.svg", title: "Branding" },
    // { id: 5, icon: "/assets/img/icons/camera.svg", title: "Photography" },
    // { id: 6, icon: "/assets/img/icons/youtube.svg", title: "Motion Design" },
    // {
    //   id: 7,
    //   icon: "/assets/img/icons/web-development.svg",
    //   title: "Web Development",
    // },
    // { id: 8, icon: "/assets/img/icons/view.svg", title: "Visualization" },
  ];
  return (
    <SonOfURILayout>
      {" "}
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Services I <span>Offered</span>
                </h1>
                Turning Ideas into Impactful Products — Elevate Your Vision with Our Expert
                <b> Product Design & Development</b> Services!
              </div>
              <div className="available-btn">
                <span>
                  <i className="fas fa-circle" /> Available For Work
                </span>
              </div>
            </div>
            <div className="services">
              <div className="row g-4">
                <ServiceItem items={serviceItems} />
              </div>
              <div className="block-image">
                <img
                  src="assets/img/blog/workstation.webp"
                  alt="blog-img-1"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            {/*<Brands />*/}
            {/*<Testimonial />*/}
            <Awards />
            {/*<Faq />*/}
            <WorkTogether />
          </div>
        </div>
      </div>
    </SonOfURILayout>
  );
};
export default page;
