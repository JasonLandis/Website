import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

import react from '../../assets/logos/react.png';
import drf from '../../assets/logos/drf.png';
import gcp from '../../assets/logos/gcp.png';
import mapbox from '../../assets/logos/mapbox.png';
import firebase from '../../assets/logos/firebase.png';


const Map = () => {
    const [flipped, setFlipped] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(2000px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 2, tension: 500, friction: 100 },
    });
    
    return (
        <div className="container" onClick={() => setFlipped(state => !state)}>            
            <animated.div className="text" style={{ opacity: opacity.to(o => 1 - o), transform }}>
                <h1>The PK Deficiency Foundation Map</h1>
                <h3>November 2023 - January 2024</h3>
                <p>
                    I was given the task to build a website for the PK Deficiency Foundation 
                    that hosts an interactive map where users can view doctors from all 
                    over the world who have experience in treating people with Pyruvate Kinase Deficiency.                             
                </p>
                <p>
                    Users can browse the globe and click on a doctor to view their information.
                    Authenticated users can add new doctors to the map, and edit or delete existing ones.
                    There are also geocoding features and other basic map functionality thanks to Mapbox.
                </p>
                <p>
                    This project taught me a tremendous amount about the complete process of software 
                    development. I developed a polished web page, implemented a server to store user information, 
                    worked with third party APIs, and implemented countless security measures.
                </p>
                <h2>Stack</h2>
                <div className='skills-container'>
                    <img src={react} width="100px" title='React' />
                    <img src={drf} width="100px" title='Django Rest Framework' />
                    <img src={firebase} width="80px" title='Firebase' />
                    <img src={gcp} width="100px" title='Google Cloud Platform' />
                    <img src={mapbox} width="100px" title='Mapbox' />
                </div>
            </animated.div>
            <animated.div className="map_image" style={{ opacity, transform, rotateX: '180deg' }}></animated.div>
        </div>
    );
};

export default Map;
