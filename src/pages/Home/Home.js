import './Home.css';
import { useState, useEffect } from 'react';
export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="containerHome">
      <h1 className={`container_title ${isVisible ? 'isVisible' : ''}`}>
        Welcome to the contact book
      </h1>
    </div>
  );
};
