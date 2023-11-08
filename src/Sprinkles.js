import React from 'react';

const Sprinkles = () => {
  const sprinkleColors = ['pink', 'yellow', 'green', 'orange', 'white', 'purple'];
  const sprinkleRotations = ['45', 'neg-35', '10', '80'];
  const numRows = 30; // Define the number of rows
  const numSprinklesPerRow = 40; // Define the number of sprinkles per row

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * sprinkleColors.length);
    return sprinkleColors[randomIndex];
  };

  const getRandomRotation = () => {
    const randomIndex = Math.floor(Math.random() * sprinkleRotations.length);
    return sprinkleRotations[randomIndex];
  };

  const generateRow = () => {
    return Array.from({ length: numSprinklesPerRow }, (_, index) => (
      <div
        key={index}
        className={`sprinkle sprinkle-${getRandomColor()} rot-${getRandomRotation()} mb-10`}
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
