import React, { useState, useEffect, useContext } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { PageContext } from '../context/PageContext';

import './styles/Projects.css';
import './project_pages/Project_pages.css';

import Map from './project_pages/Map';
import Blog from './project_pages/Blog';
import Constellation from './project_pages/Constellation';
import Pathfinder from './project_pages/Pathfinder';

const Projects = () => {
    const { projectPage, setProjectPage } = useContext(PageContext);

    const [mapPage, mapPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [blogPage, blogPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [constellationPage, constellationPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [pathfinderPage, pathfinderPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    // Add more project page animations here

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
    const [tileContainer, tileContainerApi] = useSpring(() => ({ opacity: 1 }))
    const [backButton, backButtonApi] = useSpring(() => ({ opacity: 0 }))

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

    useEffect(() => {
        if (projectPage === '') {
            tileContainerApi.start({ opacity: 1 });            
        }
    }, [projectPage]);

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

    const goBack = () => {
        mapPageApi.start({ opacity: 0 });
        blogPageApi.start({ opacity: 0 });
        constellationPageApi.start({ opacity: 0 });
        pathfinderPageApi.start({ opacity: 0 });
        backButtonApi.start({ opacity: 0 });
        setTimeout(() => {
            setProjectPage('');
        }, 500);
    }

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
                setTimeout(() => {
                    tileContainerApi.start({ opacity: 0 });
                    setTimeout(() => {
                        resetCards();
                        setProjectPage('map');
                        mapPageApi.start({ opacity: 1 });
                        backButtonApi.start({ opacity: 1 });
                    }, 500);
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
                setTimeout(() => {
                    tileContainerApi.start({ opacity: 0 });
                    setTimeout(() => {
                        resetCards();
                        setProjectPage('blog');
                        blogPageApi.start({ opacity: 1 });
                        backButtonApi.start({ opacity: 1 });
                    }, 500);
                }, 500);
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
                setTimeout(() => {
                    tileContainerApi.start({ opacity: 0 });
                    setTimeout(() => {
                        resetCards();
                        setProjectPage('constellation');
                        constellationPageApi.start({ opacity: 1 });
                        backButtonApi.start({ opacity: 1 });
                    }, 500);
                }, 500);
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
                setTimeout(() => {
                    tileContainerApi.start({ opacity: 0 });
                    setTimeout(() => {
                        resetCards();
                        setProjectPage('pathfinder');
                        pathfinderPageApi.start({ opacity: 1 });
                        backButtonApi.start({ opacity: 1 });
                    }, 500);
                }, 500);
            } else {
                setPathfinderPosition({ x: pathfinderPosition.x + mx, y: pathfinderPosition.y + my });
            }
        }

        pathfinderApi.start({ pathfinderX: snap && !down ? center.x : pathfinderPosition.x + mx, pathfinderY: snap && !down ? center.y : pathfinderPosition.y + my, immediate: down });
    });

    // Add more project card binds here

    return (
        <>
            {projectPage === '' ? (
                <animated.div className="tile-container" style={{ ...tileContainer }}>
                    <animated.div className="map" {...mapBind()} style={{ x: mapX, y: mapY }} />
                    <animated.div className="blog" {...blogBind()} style={{ x: blogX, y: blogY }} />
                    <animated.div className="constellation" {...constellationBind()} style={{ x: constellationX, y: constellationY }} />
                    <animated.div className="pathfinder" {...pathfinderBind()} style={{ x: pathfinderX, y: pathfinderY }} />
                    {/* Add more project cards here */}
                    <div className="select-container" style={{ left: center.x, top: center.y }}><animated.div className="select" style={{ ...snapBackground }}></animated.div></div>
                </animated.div>
            ) : (
                <animated.div className="back-button" style={{ ...backButton }}>
                    <div className="back-arrow" onClick={goBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                        </svg>
                    </div>
                </animated.div>
            )}

            {projectPage === 'map' && <animated.div style={{ ...mapPage }}><Map /></animated.div>}
            {projectPage === 'blog' && <animated.div style={{ ...blogPage }}><Blog /></animated.div>}
            {projectPage === 'constellation' && <animated.div style={{ ...constellationPage }}><Constellation /></animated.div>}
            {projectPage === 'pathfinder' && <animated.div style={{ ...pathfinderPage }}><Pathfinder /></animated.div>}
            {/* Add more project pages here */}
        </>
    );
};

export default Projects;
