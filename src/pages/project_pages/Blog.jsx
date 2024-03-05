import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

import drf from '../../assets/logos/drf.png';
import bootstrap from '../../assets/logos/bootstrap.png';
import js from '../../assets/logos/js.png';


const Blog = () => {
    const [flipped, setFlipped] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(2000px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 2, tension: 500, friction: 100 },
    });
    
    return (
        <div className="project-information" onClick={() => setFlipped(state => !state)}>            
            <animated.div className="project-description" style={{ opacity: opacity.to(o => 1 - o), transform }}>
                <h1>Gamedev Blog</h1>
                <h3>September 2023 - Present (on/off)</h3>
                <p>
                    I am building a web-based community platform exclusively for game developers. 
                    This application will allow game developers to showcase their 
                    ongoing game projects and build a dedicated following. 
                </p>
                <p>
                    Developers will be able to make posts, polls, and open discussions about their game, 
                    allowing them to gain insight from their community and determine which 
                    features may be a good idea to implement. There are also systems that allow users
                    to follow developers and like/dislike posts and comments.
                </p>
                <p>
                    This is my first major project involving full-stack software development.
                    Currently it is built entirely with Django along with a bit of JavaScript. 
                    Moving forward, I plan to implement a front-end framework such as React to improve the user experience.
                </p>
                <h2>Stack</h2>
                <div className='stack'>
                    <img src={drf} title='Django' />
                    <img src={bootstrap} title='Bootstrap' />
                    <img src={js} title='JavaScript' />
                </div>
            </animated.div>
            <animated.div className="blog-picture project-picture" style={{ opacity, transform, rotateX: '180deg' }}></animated.div>
        </div>
    );
};

export default Blog;
