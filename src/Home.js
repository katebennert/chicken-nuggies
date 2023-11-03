import React, { useState } from 'react';
import Sprinkles from "./Sprinkles";

function Home() {

    const [animationActive, setAnimationActive] = useState(false);

    const startAnimation = () => {
      setAnimationActive(true);
      console.log("started")
    //   const sprinkleJar = document.querySelector('.sprinkle-jar');
    //   sprinkleJar.classList.add('animate-sprinkles');
  
      setTimeout(() => {
        setAnimationActive(false);
        console.log("stopped")
      }, 5000); 
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="sprinkle-jar">
                <div className={animationActive ? "animate-sprinkles" : ""}>
                    {animationActive && <Sprinkles />}
                </div>
            </div>
            <span className="font-limelight text-pink-500 text-4xl md:text-5xl xl:text-6xl lg:mb-4" onMouseEnter={startAnimation}>Kate Bennert</span>
            <h2 className="mb-4">Creative Software Engineer and Web Designer</h2>
            <h3>TK description</h3>
        </div>
    );
  }
  
  export default Home;
  