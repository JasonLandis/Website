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
    const [{ mapX, mapY }, mapApi] = useSpring(() => ({ mapX: mapPosition.x, mapY: mapPosition.y }));

    // Blog project
    const [blogPage, blogPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [blogPosition, setBlogPosition] = useState({ x: -400, y: 300 });
    const [{ blogX, blogY }, blogApi] = useSpring(() => ({ blogX: blogPosition.x, blogY: blogPosition.y }));

    // Constellation project
    const [constellationPage, constellationPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [constellationPosition, setConstellationPosition] = useState({ x: -600, y: 500 });
    const [{ constellationX, constellationY }, constellationApi] = useSpring(() => ({ constellationX: constellationPosition.x, constellationY: constellationPosition.y }));

    // Pathfinder project
    const [pathfinderPage, pathfinderPageApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [pathfinderPosition, setPathfinderPosition] = useState({ x: -800, y: 700 });
    const [{ pathfinderX, pathfinderY }, pathfinderApi] = useSpring(() => ({ pathfinderX: pathfinderPosition.x, pathfinderY: pathfinderPosition.y }));

    // Add more project functions here

    const projects = [
        {
            name: 'pathfinder',
            initialPosition: { x: 100, y: 700 },
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
            initialPosition: { x: 100, y: 500 },
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
            initialPosition: { x: 100, y: 300 },
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
            initialPosition: { x: 100, y: 100 },
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
    const [snapBackground, snapBackgroundApi] = useSpring(() => ({ from: { backgroundColor: '#111111' } }));
    const [tileContainer, tileContainerApi] = useSpring(() => ({ opacity: 1 }))
    const [backButton, backButtonApi] = useSpring(() => ({ opacity: 0 }))
    const [snapped, setSnapped] = useState(false);

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

        projects.forEach(project => {
            project.setPosition(project.initialPosition);
            project.api.start({ [`${project.name}X`]: project.initialPosition.x, [`${project.name}Y`]: project.initialPosition.y });
        });

        snapBackgroundApi.start({ backgroundColor: '#111111' });
    };

    const shuffleCards = () => {
        projects.forEach(project => {
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * window.innerHeight);
            project.setPosition({ x, y });
            project.api.start({ [`${project.name}X`]: x, [`${project.name}Y`]: y });
        });
    }

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
                snapBackgroundApi.start({ backgroundColor: '#202020' });
            } else {
                snapBackgroundApi.start({ backgroundColor: '#111111' });
            }
    
            if (!down) {
                if (snap && !snapped) {
                    setSnapped(true);
                    project.setPosition({ x: center.x, y: center.y });
                    setTimeout(() => {
                        tileContainerApi.start({ opacity: 0, config: { duration: 250 } });
                        setTimeout(() => {
                            project.setPosition(project.initialPosition)
                            project.api.start({ [`${project.name}X`]: project.initialPosition.x, [`${project.name}Y`]: project.initialPosition.y, immediate: true });
                            snapBackgroundApi.start({ backgroundColor: '#111111' });
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
                <animated.div className="tile-container" style={{ ...tileContainer }}>
                    {projects.map((project, index) => (
                        <animated.div key={index} className={project.name} {...projectBinds[index]()} style={{ x: project.x, y: project.y }} />
                    ))}
                    <div className="select-container" style={{ left: center.x, top: center.y }}><animated.div className="select" style={{ ...snapBackground }}></animated.div></div>
                </animated.div>
            ) : (
                <animated.div className="back-button" style={{ ...backButton }} onClick={goBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
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
