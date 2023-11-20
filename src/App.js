import React, { useState } from 'react';
import './custom-styles.css';
import Header from "./Header";
import Nav from "./Nav";
import Sprinkles from "./Sprinkles";
import About from './About';
import Experience from "./Experience";
import Projects from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ComputerDonut from './computer-donut.png';
import AnimatedCursor from 'react-animated-cursor';

function App() {

  const [animationActive, setAnimationActive] = useState(false);

  const getRandomColor = (colors) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const startAnimation = () => {
    setAnimationActive(true);
    //console.log("started")

    setTimeout(() => {
      setAnimationActive(false);
      //console.log("stopped")
    }, 5000); 
  };

  return (
    <div className="flex flex-col lg:flex-row relative background-gradient"> {/* APP */}  

<AnimatedCursor
      innerSize={10}
      outerSize={20}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />

        <img
            src={ComputerDonut}
            alt="Kate with two donuts"
            className="absolute bottom-0 left-0 hidden lg:block"
            style={{ width: '16vw', zIndex: '999', background: 'none' }}
          />
          
        <div className="flex-shrink-0 w-full lg:w-1/2 order-1 pl-6 pr-6 md:pl-10 md:pr-10"> {/* LEFT SIDE */}
        
          <div className="sticky top-0 lg:h-screen flex flex-col justify-center"> {/* STICKY */}

          
          
          <div className={`${animationActive ? "animate-sprinkles" : ""}`}> {/* SPRINKLE ANIMATION DIV */}
            {animationActive && <Sprinkles getRandomColor={getRandomColor}/>}
          </div>
            <div className="mb-6 mt-10"> {/* HOME */}
              <Header startAnimation={startAnimation} />
            </div>
            <div className="hidden lg:block mb-6 lg:mt-20 flex flex-row"> {/* NAV */}
              <Nav />
            </div>
            <div className="flex flex-row space-x-6 lg:space-x-10 mb-6 justify-center lg:mt-10 lg:mb-20 text-white text-2xl subhead">
              <a href="https://github.com/katebennert" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} className="hover:text-spPink hover:scale-110 transition duration-300 ease-in-out" />
              </a>
              <a href="https://www.linkedin.com/in/kate-bennert/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="hover:text-spYellow hover:scale-110 transition duration-300 ease-in-out" />
              </a>
              <a href="https://dev.to/katebennert" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDev} className="hover:text-spPurple hover:scale-110 transition duration-300 ease-in-out" />
              </a>
              <a href="https://www.instagram.com/katebenz/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="hover:text-spGreen hover:scale-110 transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-grow order-2 lg:w-1/2 xl:mr-52 ml-10 mr-10 font-open"> {/* RIGHT SIDE SCROLL*/}
          <div id="about" >
            <About getRandomColor={getRandomColor} />
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

