import React, { useState } from 'react';
import { useSpring, animated as a } from '@react-spring/web';

const Map = () => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(2000px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 2, tension: 500, friction: 100 },
  });

  return (
    <div className="container" onClick={() => setFlipped(state => !state)}>
      <a.div className="map_image" style={{ opacity: opacity.to(o => 1 - o), transform }}>
      </a.div>
      <a.div className="text" style={{ opacity, transform, rotateX: '180deg' }}>
        <h1>The PK Deficiency Foundation Map</h1>
        <p>
          I was given the task to build a website for the PKD Foundation 
          that hosted an interactive map where users can view doctors from all 
          over the world who have experience in treating people with PKD. 
          Authenticated users can create, update, or delete doctors from the dataset.          
        </p>
        <p>
          This project taught me a tremendous amount about the complete process of software 
          development. I developed a polished web page, implemented a server to store user information, 
          worked with third party APIs, and implemented countless security measures.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Django Rest Framework</li>
          <li>Google Cloud Platform</li>
          <li>Mapbox</li>
        </ul>
      </a.div>      
    </div>
  );
};

export default Map;
