import React from 'react';

const Sprinkles = ({ getRandomColor }) => {

  const sprinkleColors = ['pink', 'yellow', 'green', 'orange', 'white', 'purple'];
  const sprinkleRotations = ['45', 'neg-35', '10', '80'];
  const numRows = 30; // Define the number of rows
  // Calculate the number of sprinkles per row dynamically
  const sprinkleSize = 40; // Define the size of each sprinkle (in pixels)
  const margin = 20; // Define the margin between sprinkles (in pixels)
  const numSprinklesPerRow = Math.floor((window.innerWidth - margin) / (sprinkleSize + margin));

  const getRandomRotation = () => {
    const randomIndex = Math.floor(Math.random() * sprinkleRotations.length);
    return sprinkleRotations[randomIndex];
  };

  const generateRow = () => {
    return Array.from({ length: numSprinklesPerRow }, (_, index) => (
      <div
        key={index}
        className={`sprinkle sprinkle-${getRandomColor(sprinkleColors)} rot-${getRandomRotation()} mb-10`}
      ></div>
    ));
  };

  const generateSprinkleRows = () => {
    return Array.from({ length: numRows * 2 }, (_, index) => (
      <span key={index} className={`sprinkle-jar flex flex-row space-x-32 ${index % 2 !== 0 ? 'ml-16' : ''}`}>
        {generateRow()}
      </span>
    ));
  };

  return (
    <>
      {generateSprinkleRows()}
    </>
  );
};

export default Sprinkles;
