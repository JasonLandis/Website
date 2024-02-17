import React, { useState } from 'react';
import { useSpring, animated as a } from '@react-spring/web';
import mapOne from '../../assets/map_one.png';

const Map = () => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(2000px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 2, tension: 500, friction: 100 },
  });

  return (
    <div className="container" onClick={() => setFlipped(state => !state)}>
      <a.div className="back" style={{ opacity: opacity.to(o => 1 - o), transform }}>
      </a.div>
      <a.div className="front" style={{ opacity, transform, rotateX: '180deg' }}>
        <h1>The PK Deficiency Foundation Map</h1>
      </a.div>
    </div>
  );
};

export default Map;
