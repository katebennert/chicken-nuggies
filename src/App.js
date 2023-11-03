import React, { useState } from 'react';
import './custom-styles.css';
import Header from "./Header";
import Nav from "./Nav";
import Experience from "./Experience";
import Sprinkles from "./Sprinkles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {

  const [animationActive, setAnimationActive] = useState(false);

  const startAnimation = () => {
    setAnimationActive(true);
    console.log("started")

    setTimeout(() => {
      setAnimationActive(false);
      console.log("stopped")
    }, 5000); 
  };

  return (
    <>
          <div className="border border-yellow-600"><Sprinkles /></div>
          <div className={`${animationActive ? "animate-sprinkles" : ""}`}> {animationActive && <Sprinkles />} </div>
   
    <div className="font-inter flex flex-col lg:flex-row "> {/* APP */}      
      <div className="flex-shrink-0 w-full lg:w-1/2 order-1 pl-6 pr-6 md:pl-10 md:pr-10"> {/* LEFT SIDE */}
        <div className="sticky top-0 lg:h-screen flex flex-col justify-center"> {/* STICKY */}
          <div className="mb-6 mt-10 "> {/* HOME */}
            <Header startAnimation={startAnimation} />
          </div>
          <div className="hidden lg:block mb-6 lg:mt-20"> {/* NAV */}
            <Nav />
          </div>
          <div className="flex flex-row space-x-6 lg:space-x-10 mb-6 justify-center lg:mt-10 lg:mb-20">
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.5rem' }} />
            <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: '1.5rem' }} />
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.5rem' }} />
            <FontAwesomeIcon icon={faDev} style={{ fontSize: '1.5rem' }} />
          </div>
        </div>
      </div>
      <div className="flex-grow order-2 p-6 md:p-10 lg:w-1/2 lg:p-20 "> {/* RIGHT SIDE SCROLL*/}
        <Experience />
      </div>
    </div>
    </>
  );
  
}

export default App;
