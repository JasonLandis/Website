import React, { useState } from 'react';
import { useSpring, animated as a } from '@react-spring/web';

const Constellation = () => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(2000px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 2, tension: 500, friction: 100 },
  });

  return (
    <div className="container" onClick={() => setFlipped(state => !state)}>
      <a.div className="constellation_image" style={{ opacity: opacity.to(o => 1 - o), transform }}>
      </a.div>
      <a.div className="text" style={{ opacity, transform, rotateX: '180deg' }}>
        <h1>Constellation</h1>
        <p>
            A 2D mobile arcade game I made that is currently on the Google Play Store. 
            The goal is to achieve a high score by creating a constellation while 
            dodging asteroids at increasing levels of difficulty. There are many 
            different stars and upgrades to unlock as you break your records.
        </p>
        <p>
            Constellation is the result of my passion for game development. 
            Although it is a fairly small mobile game, I learned many valuable 
            lessons including developing software tailored for diverse screen 
            sizes, implementing various Android SDK's, and successfully porting 
            a project originally designed for PC onto a mobile platform.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>Unity</li>
          <li>C#</li>
          <li>Android SDK</li>
        </ul>
      </a.div>      
    </div>
  );
};

export default Constellation;
