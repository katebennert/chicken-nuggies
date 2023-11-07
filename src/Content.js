import React from 'react';
import Experience from "./Experience";
import Projects from './Projects';
import { Element } from 'react-scroll';

function Content() {

  return (
    <div>
      <Element id="about" >
        <h1>About</h1>
      </Element>
      <Element id="projects">
        <Projects />
      </Element>
      <Element id="experience">
        <Experience /> 
      </Element>
  </div>
  );
  
}

export default Content;
