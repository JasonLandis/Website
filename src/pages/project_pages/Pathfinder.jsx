import React, { useState } from 'react';
import { useSpring, animated as a } from '@react-spring/web';

const Pathfinder = () => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(2000px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 2, tension: 500, friction: 100 },
  });

  return (
    <div className="container" onClick={() => setFlipped(state => !state)}>
      <a.div className="pathfinder_image" style={{ opacity: opacity.to(o => 1 - o), transform }}>
      </a.div>
      <a.div className="text" style={{ opacity, transform, rotateX: '180deg' }}>
        <h1>Pathfinder</h1>
        <p>
            Pathfinder was one of my first projects. It is currently a prototype but 
            I plan to work on it more in the future. Some future improvements may 
            include adding unique levels, updating the graphics, adding different sized 
            blockades, and having multiple characters at once.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>Unity</li>
          <li>C#</li>
        </ul>
      </a.div>      
    </div>
  );
};

export default Pathfinder;
