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


// Page that displays all projects
const Projects = () => {
    const { projectPage, setProjectPage } = useContext(PageContext);

    // Map project
    const [mapPage, mapPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [mapPosition, setMapPosition] = useState({ x: -200, y: 100 });
    const [mapInitialPosition, setMapInitialPosition] = useState({ x: 100, y: 100 });
    const [{ mapX, mapY }, mapApi] = useSpring(() => ({ mapX: mapPosition.x, mapY: mapPosition.y }));

    // Blog project
    const [blogPage, blogPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [blogPosition, setBlogPosition] = useState({ x: -400, y: 300 });
    const [blogInitialPosition, setBlogInitialPosition] = useState({ x: 100, y: 300 });
    const [{ blogX, blogY }, blogApi] = useSpring(() => ({ blogX: blogPosition.x, blogY: blogPosition.y }));

    // Constellation project
    const [constellationPage, constellationPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [constellationPosition, setConstellationPosition] = useState({ x: -600, y: 500 });
    const [constellationInitialPosition, setConstellationInitialPosition] = useState({ x: 100, y: 500 });
    const [{ constellationX, constellationY }, constellationApi] = useSpring(() => ({ constellationX: constellationPosition.x, constellationY: constellationPosition.y }));

    // Pathfinder project
    const [pathfinderPage, pathfinderPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [pathfinderPosition, setPathfinderPosition] = useState({ x: -800, y: 700 });
    const [pathfinderInitialPosition, setPathfinderInitialPosition] = useState({ x: 100, y: 700 });
    const [{ pathfinderX, pathfinderY }, pathfinderApi] = useSpring(() => ({ pathfinderX: pathfinderPosition.x, pathfinderY: pathfinderPosition.y }));

    // Add more project functions here

    const projects = [
        {
            name: 'pathfinder',
            initialPosition: pathfinderInitialPosition,
            position: pathfinderPosition,
            setPosition: setPathfinderPosition,
            page: pathfinderPage,
            pageApi: pathfinderPageApi,
            x: pathfinderX,
            y: pathfinderY,
            api: pathfinderApi
        },
        {
            name: 'constellation',
            initialPosition: constellationInitialPosition,
            position: constellationPosition,
            setPosition: setConstellationPosition,
            page: constellationPage,
            pageApi: constellationPageApi,
            x: constellationX,
            y: constellationY,
            api: constellationApi
        },
        {
            name: 'blog',
            initialPosition: blogInitialPosition,
            position: blogPosition,
            setPosition: setBlogPosition,
            page: blogPage,
            pageApi: blogPageApi,
            x: blogX,
            y: blogY,
            api: blogApi
        },
        {
            name: 'map',
            initialPosition: mapInitialPosition,
            position: mapPosition,
            setPosition: setMapPosition,
            page: mapPage,
            pageApi: mapPageApi,
            x: mapX,
            y: mapY,
            api: mapApi
        },
        // Add more projects here
    ]

    const [center, setCenter] = useState({ x: 0, y: 0 });
    const [snapBackground, snapBackgroundApi] = useSpring(() => ({ from: { backgroundColor: '#1b1b1b' } }));
    const [cardContainer, cardContainerApi] = useSpring(() => ({ opacity: 1 }))
    const [backButton, backButtonApi] = useSpring(() => ({ opacity: 0 }))
    const [snapped, setSnapped] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => {
            const { innerWidth, innerHeight } = window;
            if (window.innerWidth < 400) {
                setMapInitialPosition({ x: 25, y: 100 });
                setBlogInitialPosition({ x: 25, y: 190 });
                setConstellationInitialPosition({ x: 25, y: 280 });
                setPathfinderInitialPosition({ x: 25, y: 370 });
                setCenter({ x: innerWidth / 2 - 31, y: innerHeight / 2 - 31 });
            }
            else if (window.innerWidth < 700) {
                setMapInitialPosition({ x: 50, y: 100 });
                setBlogInitialPosition({ x: 50, y: 210 });
                setConstellationInitialPosition({ x: 50, y: 320 });
                setPathfinderInitialPosition({ x: 50, y: 430 });
                setCenter({ x: innerWidth / 2 - 41.5, y: innerHeight / 2 - 41.5 });
            }
            else if (window.innerWidth < 900) {
                setMapInitialPosition({ x: 75, y: 100 });
                setBlogInitialPosition({ x: 75, y: 250 });
                setConstellationInitialPosition({ x: 75, y: 400 });
                setPathfinderInitialPosition({ x: 75, y: 550 });
                setCenter({ x: innerWidth / 2 - 52.5, y: innerHeight / 2 - 52.5 });
            }
            else {
                setMapInitialPosition({ x: 100, y: 100 });
                setBlogInitialPosition({ x: 100, y: 300 });
                setConstellationInitialPosition({ x: 100, y: 500 });
                setPathfinderInitialPosition({ x: 100, y: 700 });
                setCenter({ x: innerWidth / 2 - 62.5, y: innerHeight / 2 - 62.5 });
            }
            // set more initial positions here
        };

        handleWindowResize();

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    useEffect(() => {
        if (projectPage === '') {
            cardContainerApi.start({ opacity: 1 });
        }
    }, [projectPage]);

    useEffect (() => {
        projects.forEach(project => {
            project.setPosition(project.initialPosition);
            project.api.start({ [`${project.name}X`]: project.initialPosition.x, [`${project.name}Y`]: project.initialPosition.y });
        });

        snapBackgroundApi.start({ backgroundColor: '#1b1b1b' });
    }, [blogInitialPosition]);

    const goBack = () => {
        projects.forEach(project => {
            project.pageApi.start({ opacity: 0, config: { duration: 250 } });
        });
        setSnapped(false);
        backButtonApi.start({ opacity: 0, config: { duration: 250 } });
        setTimeout(() => {
            setProjectPage('');
        }, 250);
    }

    const createProjectBind = (project) => {
        return useDrag(({ down, movement: [mx, my] }) => {
            if (snapped) return;
            
            const snapDistance = 100;
            const snap = Math.abs(project.position.x + mx - center.x) < snapDistance && Math.abs(project.position.y + my - center.y) < snapDistance;
    
            if (snap) {
                snapBackgroundApi.start({ backgroundColor: '#303030' });
            } else {
                snapBackgroundApi.start({ backgroundColor: '#1b1b1b' });
            }
    
            if (!down) {
                if (snap && !snapped) {
                    setSnapped(true);
                    project.setPosition({ x: center.x, y: center.y });
                    setTimeout(() => {
                        cardContainerApi.start({ opacity: 0, config: { duration: 250 } });
                        setTimeout(() => {
                            project.setPosition(project.initialPosition)
                            project.api.start({ [`${project.name}X`]: project.initialPosition.x, [`${project.name}Y`]: project.initialPosition.y, immediate: true });
                            snapBackgroundApi.start({ backgroundColor: '#1b1b1b' });
                            setProjectPage(project.name);
                            project.pageApi.start({ opacity: 1, config: { duration: 250 } });
                            backButtonApi.start({ opacity: 1, config: { duration: 250 } });
                        }, 250);
                    }, 500);
                } else {
                    project.setPosition({ x: project.position.x + mx, y: project.position.y + my });
                }
            }
    
            project.api.start({ [`${project.name}X`]: snap && !down ? center.x : project.position.x + mx, [`${project.name}Y`]: snap && !down ? center.y : project.position.y + my, immediate: down });
        });
    };

    const projectBinds = projects.map(project => {
        return createProjectBind(project);
    });

    return (
        <>
            {projectPage === '' ? (
                <animated.div style={{ ...cardContainer }}>
                    {projects.map((project, index) => (
                        <animated.div key={index} className={project.name + " draggable"} {...projectBinds[index]()} style={{ x: project.x, y: project.y }} />
                    ))}
                    <div className="select-container" style={{ left: center.x, top: center.y }}>
                        <animated.div className="select" style={{ ...snapBackground }}></animated.div>
                    </div>
                </animated.div>
            ) : (
                <animated.div className="back-button" style={{ ...backButton }} onClick={goBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                    </svg>
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
