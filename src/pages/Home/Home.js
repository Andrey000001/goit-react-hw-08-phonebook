import { useState, useEffect } from 'react';
export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        color: '#6f5762',
      }}
    >
      <h1
        style={{
          fontSize: isVisible ? '3em' : '0',
          opacity: isVisible ? 1 : 0,
          transition: 'font-size 1s, opacity 1s',
        }}
      >
        Welcome to the contact book
      </h1>
    </div>
  );
};
