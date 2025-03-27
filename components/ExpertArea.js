"use client"
import React, { useEffect, useRef } from 'react';

const ExpertArea = () => {
  const expertItems = [
    // UI Tools (2)
    { id: 1, icon: "assets/img/icons/figma.svg", name: "Figma" },
    { id: 2, icon: "assets/img/icons/adobexd.svg", name: "AdobeXD" },

    // Programming Languages (2)
    { id: 3, icon: "assets/img/icons/javascript.svg", name: "Javascript" },
    { id: 4, icon: "assets/img/icons/typescript.svg", name: "Typescript" },

    // Frameworks (2)
    { id: 5, icon: "assets/img/icons/react.svg", name: "React" },
    { id: 6, icon: "assets/img/icons/next.svg", name: "Next" },

    // Ethers & Web3js (2)
    { id: 7, icon: "assets/img/icons/ethers.svg", name: "Ethers" },
    { id: 8, icon: "assets/img/icons/web3js.svg", name: "Web3js" },

    // Solidity & Ethereum (2)
    { id: 9, icon: "assets/img/icons/solidity.svg", name: "Solidity" },
    { id: 10, icon: "assets/img/icons/ethereum.svg", name: "Ethereum" },

    // Hardhat & Foundry (2)
    { id: 11, icon: "assets/img/icons/hardhat.svg", name: "Hardhat" },
    { id: 12, icon: "assets/img/icons/foundry.svg", name: "Foundry" },

    // Git & Node (2)
    { id: 13, icon: "assets/img/icons/git.svg", name: "Git" },
    { id: 14, icon: "assets/img/icons/nodejs.svg", name: "Node" },
  ];

  const scrollRef = useRef(null); // Create a ref for the slider
  const scrollSpeed = 0.5; // Adjust the scrolling speed (pixels per frame)


  // Separate odd and even items
  const oddItems = expertItems.filter((item) => item.id % 2 !== 0); // Odd IDs
  const evenItems = expertItems.filter((item) => item.id % 2 === 0); // Even IDs

  useEffect(() => {
    const slider = scrollRef.current;

    if (!slider) return;

    let scrollPosition = 0;
    let scrollingForward = true; // Direction flag

    const smoothScroll = () => {
      if (scrollingForward) {
        scrollPosition += scrollSpeed; // Scroll forward
        if (scrollPosition >= slider.scrollWidth - slider.clientWidth) {
          scrollingForward = false; // Reverse the direction
        }
      } else {
        scrollPosition -= scrollSpeed; // Scroll backward
        if (scrollPosition <= 0) {
          scrollingForward = true; // Reverse the direction
        }
      }
      slider.scrollLeft = scrollPosition; // Apply the scroll
    };

    const interval = setInterval(smoothScroll, 16); // Approx. 60 FPS

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
      <div className="card expertise-card">
        <div className="card-body">
          <h3 className="card-title">My Expert Area</h3>
          <div
              className="expertise-main mt-18 overflow-scroll stealth-scrollbar"
              ref={scrollRef} // Attach ref to the slider
          >
            <div className="expert-area-slider ">
              {/*{expertItems.map((item) => (*/}
              {/*    <div className="" key={item.id}>*/}
              {/*      <div className="expertise-item">*/}
              {/*        <div className="image text-center">*/}
              {/*          <img src={item.icon} alt={item.name} />*/}
              {/*        </div>*/}
              {/*        <div className="text">*/}
              {/*          <h4 className="title">{item.name}</h4>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*))}*/}
              {/* Render odd items first */}
              {oddItems.map((item) => (
                  <div className="expertise-item" key={item.id}>
                    <div className="image text-center">
                      <img src={item.icon} alt={item.name} />
                    </div>
                    <div className="text">
                      <h4 className="title">{item.name}</h4>
                    </div>
                  </div>
              ))}

              {/* Render even items next */}
              {evenItems.map((item) => (
                  <div className="expertise-item" key={item.id}>
                    <div className="image text-center">
                      <img src={item.icon} alt={item.name} />
                    </div>
                    <div className="text">
                      <h4 className="title">{item.name}</h4>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default ExpertArea;