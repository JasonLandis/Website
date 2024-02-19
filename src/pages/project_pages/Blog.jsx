import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';


const Blog = () => {
    const [flipped, setFlipped] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(2000px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 2, tension: 500, friction: 100 },
    });

    return (
        <div className="container" onClick={() => setFlipped(state => !state)}>
            <animated.div className="blog_image" style={{ opacity: opacity.to(o => 1 - o), transform }}></animated.div>
            <animated.div className="text" style={{ opacity, transform, rotateX: '180deg' }}>
                <h1>Gamedev Blog</h1>
                <p>
                    A web-based community platform exclusively for game developers. 
                    This application will allow game developers to showcase their 
                    ongoing game projects and build a dedicated following. Developers 
                    will be able to make posts, polls, and open discussions, allowing 
                    them to gain insight from their community and determine which 
                    features may be a good idea to implement.         
                </p>
                <p>
                    My goal is to deploy this website sometime in the year 2024.
                </p>
                <h2>Skills</h2>
                <ul>
                    <li>Django</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                </ul>
            </animated.div>
        </div>
    );
};

export default Blog;
