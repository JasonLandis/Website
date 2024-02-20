import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

import unity from '../../assets/logos/unity.png';
import csharp from '../../assets/logos/csharp.png';
import android from '../../assets/logos/android.png';
import playstore from '../../assets/logos/playstore.png';
import github from '../../assets/logos/github.png';


const Constellation = () => {
    const [flipped, setFlipped] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(2000px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 2, tension: 500, friction: 100 },
    });
    
    return (
        <>
            <div className="container" onClick={() => setFlipped(state => !state)}>            
                <animated.div className="text" style={{ opacity: opacity.to(o => 1 - o), transform }}>
                    <h1>Constellation</h1>
                    <h3>April 2023 - August 2023</h3>
                    <p>
                        A 2D mobile arcade game I made that is currently on the Google Play Store. 
                        The goal is to achieve a high score by creating a constellation while 
                        dodging asteroids at increasing levels of difficulty. There are many 
                        different stars and upgrades to unlock as you break your records.
                    </p>
                    <p>
                        Although it is a fairly small mobile game, I learned many valuable 
                        lessons including developing software tailored for diverse screen 
                        sizes, implementing various Android SDK's, and successfully porting 
                        a project originally designed for PC onto a mobile platform.
                    </p>
                    <p>
                        This project was created using the Unity game engine and C#. Moving forward, 
                        I plan to continue making games, potentially using Unreal Engine, 
                        and I hope to release a PC or console game in the future.
                    </p>
                    <h2>Stack</h2>
                    <div className='skills-container'>
                        <img src={unity} width="100px" title='Unity' />
                        <img src={csharp} width="100px" title='C#' />
                        <img src={android} width="100px" title='Android' />
                    </div>
                </animated.div>
                <animated.div className="constellation_image" style={{ opacity, transform, rotateX: '180deg' }}></animated.div>
            </div>
            <div className="visit-container">
                <a href="https://play.google.com/store/apps/details?id=com.JasonLandis.Constellation" target='_blank'>
                    <img src={playstore} width="40px" />
                </a>
                <a href="https://github.com/JasonLandis/Constellation" target='_blank'>
                    <img src={github} width="40px" />
                </a>
            </div>
        </>
    );
};

export default Constellation;
