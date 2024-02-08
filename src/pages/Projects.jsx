import React, { useState, useEffect, useContext } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { PageContext } from '../context/PageContext';
import './styles/Projects.css';

import Map from './Map';

const Projects = () => {
    const { projectPage, setProjectPage } = useContext(PageContext);

    const [mapPage, mapPageApi] = useSpring(() => ({ from: { opacity: 0 } }))

    const [mapPosition, setMapPosition] = useState({ x: 100, y: 100 });
    const [blogPosition, setBlogPosition] = useState({ x: 300, y: 100 });
    const [constellationPosition, setConstellationPosition] = useState({ x: 500, y: 100 });
    const [pathfinderPosition, setPathfinderPosition] = useState({ x: 700, y: 100 });
    // Add more initial project card positions here

    const [{ mapX, mapY }, mapApi] = useSpring(() => ({ mapX: mapPosition.x, mapY: mapPosition.y }));
    const [{ blogX, blogY }, blogApi] = useSpring(() => ({ blogX: blogPosition.x, blogY: blogPosition.y }));
    const [{ constellationX, constellationY }, constellationApi] = useSpring(() => ({ constellationX: constellationPosition.x, constellationY: constellationPosition.y }));
    const [{ pathfinderX, pathfinderY }, pathfinderApi] = useSpring(() => ({ pathfinderX: pathfinderPosition.x, pathfinderY: pathfinderPosition.y }));
    // Add more project card animations here

    const [center, setCenter] = useState({ x: 0, y: 0 });
    const [snapBackground, snapBackgroundApi] = useSpring(() => ({ from: { backgroundColor: '#111111' } }));

    useEffect(() => {
        const handleWindowResize = () => {
            const { innerWidth, innerHeight } = window;
            setCenter({ x: innerWidth / 2 - 72.5, y: innerHeight / 2 - 72.5 });
            resetCards();
        };

        handleWindowResize();

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const resetCards = () => {
        mapApi.start({ mapX: 100, mapY: 100 });
        blogApi.start({ blogX: 300, blogY: 100 });
        constellationApi.start({ constellationX: 500, constellationY: 100 });
        pathfinderApi.start({ pathfinderX: 700, pathfinderY: 100 });
        // Add more project card animations here        

        setMapPosition({ x: 100, y: 100 });
        setBlogPosition({ x: 300, y: 100 });
        setConstellationPosition({ x: 500, y: 100 });
        setPathfinderPosition({ x: 700, y: 100 });
        // Add more initial project card positions here

        snapBackgroundApi.start({ backgroundColor: '#111111' });
    };

    const mapBind = useDrag(({ down, movement: [mx, my] }) => {
        const snapDistance = 100;
        const snap = Math.abs(mapPosition.x + mx - center.x) < snapDistance && Math.abs(mapPosition.y + my - center.y) < snapDistance;

        if (snap) {
            snapBackgroundApi.start({ backgroundColor: '#202020' });
        } else {
            snapBackgroundApi.start({ backgroundColor: '#111111' });
        }

        if (!down) {
            if (snap) {
                setMapPosition({ x: center.x, y: center.y });
                setTimeout(() =>{
                    setProjectPage('map');
                    mapPageApi.start({ opacity: 1 });
                }, 500);
            } else {
                setMapPosition({ x: mapPosition.x + mx, y: mapPosition.y + my });
            }
        }

        mapApi.start({ mapX: snap && !down ? center.x : mapPosition.x + mx, mapY: snap && !down ? center.y : mapPosition.y + my, immediate: down });
    });

    const blogBind = useDrag(({ down, movement: [mx, my] }) => {
        const snapDistance = 100;
        const snap = Math.abs(blogPosition.x + mx - center.x) < snapDistance && Math.abs(blogPosition.y + my - center.y) < snapDistance;

        if (snap) {
            snapBackgroundApi.start({ backgroundColor: '#202020' });
        } else {
            snapBackgroundApi.start({ backgroundColor: '#111111' });
        }

        if (!down) {
            if (snap) {
                setBlogPosition({ x: center.x, y: center.y });
                console.log('snap');
            } else {
                setBlogPosition({ x: blogPosition.x + mx, y: blogPosition.y + my });
            }
        }

        blogApi.start({ blogX: snap && !down ? center.x : blogPosition.x + mx, blogY: snap && !down ? center.y : blogPosition.y + my, immediate: down });
    });

    const constellationBind = useDrag(({ down, movement: [mx, my] }) => {
        const snapDistance = 100;
        const snap = Math.abs(constellationPosition.x + mx - center.x) < snapDistance && Math.abs(constellationPosition.y + my - center.y) < snapDistance;

        if (snap) {
            snapBackgroundApi.start({ backgroundColor: '#202020' });
        } else {
            snapBackgroundApi.start({ backgroundColor: '#111111' });
        }

        if (!down) {
            if (snap) {
                setConstellationPosition({ x: center.x, y: center.y });
                console.log('snap');
            } else {
                setConstellationPosition({ x: constellationPosition.x + mx, y: constellationPosition.y + my });
            }
        }

        constellationApi.start({ constellationX: snap && !down ? center.x : constellationPosition.x + mx, constellationY: snap && !down ? center.y : constellationPosition.y + my, immediate: down });
    });

    const pathfinderBind = useDrag(({ down, movement: [mx, my] }) => {
        const snapDistance = 100;
        const snap = Math.abs(pathfinderPosition.x + mx - center.x) < snapDistance && Math.abs(pathfinderPosition.y + my - center.y) < snapDistance;

        if (snap) {
            snapBackgroundApi.start({ backgroundColor: '#202020' });
        } else {
            snapBackgroundApi.start({ backgroundColor: '#111111' });
        }

        if (!down) {
            if (snap) {
                setPathfinderPosition({ x: center.x, y: center.y });
                console.log('snap');
            } else {
                setPathfinderPosition({ x: pathfinderPosition.x + mx, y: pathfinderPosition.y + my });
            }
        }

        pathfinderApi.start({ pathfinderX: snap && !down ? center.x : pathfinderPosition.x + mx, pathfinderY: snap && !down ? center.y : pathfinderPosition.y + my, immediate: down });
    });

    // Add more project card binds here

    return (
        <>
            <animated.div className="map" {...mapBind()} style={{ x: mapX, y: mapY }} />
            <animated.div className="blog" {...blogBind()} style={{ x: blogX, y: blogY }} />
            <animated.div className="constellation" {...constellationBind()} style={{ x: constellationX, y: constellationY }} />
            <animated.div className="pathfinder" {...pathfinderBind()} style={{ x: pathfinderX, y: pathfinderY }} />
            {/* Add more project cards here */}
            <div className="select-container" style={{ left: center.x, top: center.y }}><animated.div className="select" style={{ ...snapBackground }}></animated.div></div>

            {projectPage === 'map' && <animated.div style={{ ...mapPage }}><Map /></animated.div>}
        </>
    );
};

export default Projects;
