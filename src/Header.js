import React from 'react';

function Header({ startAnimation }) {

    return (
      <div className="flex flex-col justify-center items-center">
        <span className="font-agbalumo text-donutBrown text-4xl md:text-5xl xl:text-6xl lg:mb-4 donut-cursor" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.7)' }} onMouseEnter={startAnimation}>Kate Bennert</span>
        <h2 className="mb-4">Creative Software Engineer and Web Designer</h2>
        
        <div>[pink sprinkle donut image]</div>
      </div>
    );
  }
  
  export default Header;
  