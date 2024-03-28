import React, { useState } from 'react';

const MyComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`my-component ${isActive ? 'active' : ''}`}>
      <button onClick={toggleClass}>Toggle Class</button>
      <p>This is my component.</p>
    </div>
  );
};

export default MyComponent;
