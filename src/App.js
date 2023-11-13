import React, { useState } from 'react';
import './custom-styles.css';
import Header from "./Header";
import Nav from "./Nav";
import Sprinkles from "./Sprinkles";
import About from './About';
import Experience from "./Experience";
import Projects from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {

  const [animationActive, setAnimationActive] = useState(false);

  const startAnimation = () => {
    setAnimationActive(true);
    //console.log("started")

    setTimeout(() => {
      setAnimationActive(false);
      //console.log("stopped")
    }, 5000); 
  };

  return (
    <div className="font-inter flex flex-col lg:flex-row "> {/* APP */}  
          
        <div className="flex-shrink-0 w-full lg:w-1/2 order-1 pl-6 pr-6 md:pl-10 md:pr-10"> {/* LEFT SIDE */}
          <div className="sticky top-0 lg:h-screen flex flex-col justify-center"> {/* STICKY */}
          
          <div className={`${animationActive ? "animate-sprinkles" : ""}`}> {/* SPRINKLE ANIMATION DIV */}
            {animationActive && <Sprinkles />}
          </div>

            <div className="mb-6 mt-10 "> {/* HOME */}
              <Header startAnimation={startAnimation} />
            </div>
            <div className="hidden lg:block mb-6 lg:mt-20"> {/* NAV */}
              <Nav />
            </div>
            <div className="flex flex-row space-x-6 lg:space-x-10 mb-6 justify-center lg:mt-10 lg:mb-20 cursor-pointer text-white">
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.5rem' }} className="hover:text-spPink transition duration-300 ease-in-out" />
              <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: '1.5rem' }} className="hover:text-spYellow transition duration-300 ease-in-out" />
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.5rem' }} className="hover:text-spPurple transition duration-300 ease-in-out" />
              <FontAwesomeIcon icon={faDev} style={{ fontSize: '1.5rem' }} className="hover:text-spGreen transition duration-300 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="flex-grow order-2 lg:w-1/2 xl:mr-52 ml-10 mr-10 "> {/* RIGHT SIDE SCROLL*/}
          <div id="about" >
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="experience">
            <Experience /> 
          </div>
        </div>
      </div>
  );
  
}

export default App;

