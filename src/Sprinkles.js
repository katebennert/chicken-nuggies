import React from 'react';

const Sprinkles = () => {
  const sprinkleColors = ['pink', 'yellow', 'green', 'orange', 'white', 'purple'];
  const numRows = 30; // Define the number of rows
  const numSprinklesPerRow = 15; // Define the number of sprinkles per row

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * sprinkleColors.length);
    return sprinkleColors[randomIndex];
  };

  const generateRow = () => {
    return Array.from({ length: numSprinklesPerRow }, (_, index) => (
      <div
        key={index}
        className={`sprinkle-${getRandomColor()}`}
      ></div>
    ));
  };

  const generateSprinkleRows = () => {
    return Array.from({ length: numRows * 2 }, (_, index) => (
      <span key={index} className={`sprinkle-jar flex flex-row space-x-20 ${index % 2 !== 0 ? 'ml-10' : ''}`}>
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
