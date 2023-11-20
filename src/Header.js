import React from 'react'

function Header({ startAnimation }) {

    return (
      <div className="flex flex-col justify-center items-center">
        <span className="font-agbalumo text-donutBrown text-4xl md:text-5xl xl:text-8xl lg:mb-4 name" onMouseEnter={startAnimation}>Kate Bennert</span>
        <h2 className="mb-4 text-donutBrown text-lg lg:text-xl xl:text-2xl font-agbalumo subhead">Creative Software Engineer and Web Designer</h2>
      </div>
    );
  }
  
  export default Header;
  