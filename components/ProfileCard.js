"use client";
import ClipboardJS from "clipboard";
import { useEffect, useState } from "react";

const ProfileCard = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    new ClipboardJS(".btn-copy");
  }, []);

  const toggleBtn = () => {
    setToggle(true);
    const timerId = setTimeout(() => {
      setToggle(false);
    }, 700);
    return () => {
      clearTimeout(timerId);
    };
  };

  const socialItems = [

    { id: 1, url: "#", name: "Github", icon: "fab fa-github" },
    { id: 2, url: "#", name: "Behance", icon: "fab fa-behance" },
    { id: 3, url: "#", name: "Medium", icon: "fab fa-medium" },
    { id: 4, url: "#", name: "Twitter", icon: "fab fa-twitter" },
    { id: 5, url: "#", name: "Telegram", icon: "fab fa-telegram" },
  ];

  return (
    <div className="card profile-card">
      <div className="card-body">
        <div className="image text-center">
          <img src="assets/img/images/pfp.png" alt="profile" height={250} />
        </div>
        <div className="text">
          <h3 className="card-title u-class-no-flex">Son Of Uri <span className="wave"> 👋 </span> </h3>
          <p>
            A <span>Web3 Product Developer</span>🖥️ specializing in UI/UX design, full-stack development & smart contract engineering.
          </p>
          <div className="common-button-groups">
            <a className="btn btn-call" href="https://x.com/0xSonOfUri">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                <polygon fill="#ffffff" points="41,6 9.929,42 6.215,42 37.287,6"></polygon>
                <polygon fill="#0125a2" fillRule="evenodd" points="31.143,41 7.82,7 16.777,7 40.1,41"
                         clipRule="evenodd"></polygon>
                <path fill="#ffffff"
                      d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"></path>
              </svg>
                Send a DM
            </a>
            <button
                className={`btn btn-copy ${toggle ? "active" : ""}`}
                data-clipboard-text="mail@sonofuri.dev"
                onClick={() => toggleBtn()}
            >
              <svg
                  className="icon"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H10C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18V10Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Copy Email
            </button>
          </div>
          <div className="social-media-icon">
            <ul className="list-unstyled">
              {socialItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>
                    <i className={item.icon} />
                  </a>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
