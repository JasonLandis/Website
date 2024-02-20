import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

import unity from '../../assets/logos/unity.png';
import csharp from '../../assets/logos/csharp.png';
import github from '../../assets/logos/github.png';


const Pathfinder = () => {
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
                    <h1>Pathfinder</h1>
                    <h3>January 2023 - February 2023</h3>
                    <p>
                        Pathfinder is a 2D puzzle game in which the player must prevent a block 
                        from reaching an endpoint on an isometric grid within a certain amount of time.
                        The player can strategically place blockades on the grid causing the block to redirect its path
                        and waste time.
                    </p>
                    <p>
                        Pathfinder was my first project. It is currently a prototype but 
                        I plan to work on it more in the future. Some future improvements may 
                        include adding unique levels, updating the graphics, adding different sized 
                        blockades, and having multiple blocks and endpoints at once.
                    </p>
                    <h2>Stack</h2>
                    <div className='skills-container'>
                        <img src={unity} width="100px" title='Unity' />
                        <img src={csharp} width="100px" title='C#' />
                    </div>
                </animated.div>
                <animated.div className="pathfinder_image" style={{ opacity, transform, rotateX: '180deg' }}></animated.div>
            </div>
            <div className="visit-container">
                <a href="https://github.com/JasonLandis/Pathfinder" target='_blank'>
                    <img src={github} width="40px" />
                </a>
            </div>
        </>
    );
};

export default Pathfinder;
