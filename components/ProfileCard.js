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

    { id: 1, url: "https://github.com/SonOfUri", name: "Github", icon: "fab fa-github" },
    { id: 3, url: "https://medium.com/@sonofuri", name: "Medium", icon: "fab fa-medium" },
    { id: 4, url: "https://x.com/0xSonOfUri", name: "Twitter", icon: "fab fa-twitter" },
    { id: 5, url: "https://t.me/SonOfUri_dev", name: "Telegram", icon: "fab fa-telegram" },
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
              <a className="btn btn-call" href="https://t.me/SonOfUri_dev">
                  {/*<svg className="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">*/}
                  {/*  <polygon fill="#ffffff" points="41,6 9.929,42 6.215,42 37.287,6"></polygon>*/}
                  {/*  <polygon fill="#0125a2" fillRule="evenodd" points="31.143,41 7.82,7 16.777,7 40.1,41"*/}
                  {/*           clipRule="evenodd"></polygon>*/}
                  {/*  <path fill="#ffffff"*/}
                  {/*        d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"></path>*/}
                  {/*</svg>*/}
                  <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                            fill="#FFFFFF"/>
                  </svg>
                  Start Chat
              </a>
              <button
                  className={`btn btn-copy ${toggle ? "active" : ""}`}
                  data-clipboard-text="contact@sonofuri.dev"
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
                  <a href={item.url}>
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
