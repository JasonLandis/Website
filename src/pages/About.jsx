import React, { useState, useContext, useEffect } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'
import { PageContext } from '../context/PageContext';
import { CountContext } from '../context/CountContext';

import './styles/About.css'
import logo from '../assets/logos/logo.png'
import wmu from '../assets/logos/wmu.png'
import occ from '../assets/logos/occ.png'
import github from '../assets/logos/github.png'
import linkedin from '../assets/logos/linkedin.png'
import mail from '../assets/logos/mail.png'

import map from '../assets/icons/map_icon.png'
import AMI from '../assets/logos/AMI.png'

const cards = [
    <div className="card skills">
        <h1>Skills</h1>
        <h2>Languages</h2>
        <p>Python, C#, C, HTML, CSS, JavaScript, PHP, SQL</p>
        <h2>Frameworks</h2>
        <p>React, Angular, Django/DRF, ASP.NET, Bootstrap</p>
        <h2>Tools</h2>
        <p>GCP, Azure, Firebase, Docker, Git, MySQL, SQL Server, MongoDB, Postman</p>
    </div>,
    <div className="card">
        <h1>Work history</h1>
        <div className="work">
            <img src={AMI} />
            <div>
                <h2>Junior Web Developer - Automated Media Inc.</h2>
                <p>April 2024 - Present</p>
            </div>
        </div>
        <div className="work">
            <img src={map} />
            <div>
                <h2>Freelance Full-stack Developer - PK Deficiency Foundation</h2>
                <p>November 2023 - January 2024</p>
            </div>
        </div>
    </div>,
    <div className="card">
        <h1>Education</h1>
        <div className="education">
            <img src={wmu} />
            <div>
                <h2>Western Michigan University</h2>
                <p>Bachelor of Science in Computer Science</p>
                <p>August 2020 - April 2023</p>
            </div>
        </div>
        <div className="education">
            <img src={occ} style={{ borderRadius: "5px"}} />
            <div>
                <h2>Oakland Community College</h2>
                <p>General Studies</p>
                <p>August 2019 - April 2020</p>
            </div>
        </div>
    </div>,
    <div className="card about">
        <h1>About me</h1>
        <p>
            I'm Jason, a junior software developer. I specialize in full-stack software 
            development with a hobby in game development.
        </p>
        <p>
            I am constantly working on projects, whether it be a mobile game or a complex web application.
            Many projects of mine are featured on this site, so feel free to check them out.
        </p>
        <p>
            Refresh the page for a new look. And if you enjoy puzzles, try clicking my logo in the center
            of the home page a few times...
        </p>
        <img src={logo} />
    </div>,
]

// Inital deck state
const from = (_i) => ({ rot: 0, scale: 1, x: (window.innerWidth) * -1 })

// Animation from initial deck state
const to = (i) => ({
    x: 0,
    y: i * -4, // 4px between each card
    scale: 1,
    rot: -3 + Math.random() * 6, // Random rotation
    delay: i * 100, // Staggered delay
    config: { friction: 50, tension: 200 }
})

// Transform function
const trans = (r, s) => `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

// Deck component
const Deck = () => {
    const { setSlide } = useContext(PageContext);
    const { isMobile } = useContext(CountContext);

    useEffect(() => {
        if (isMobile) {
            cards[3] = <div className="card about">
                <h1>About me</h1>
                <p>
                    I'm Jason, a junior software developer. I specialize in full-stack software 
                    development with a hobby in game development.
                </p>
                <p>
                    I am constantly working on projects, whether it be a mobile game or a complex web application.
                    Many projects of mine are featured on this site, so feel free to check them out.
                </p>
                <p>
                    Visit this site on desktop for a better experience.
                </p>
                <img src={logo} width="200px" height="220px" />
            </div>
        }
    }, [isMobile])
    
    useEffect(() => {
        setSlide(1)
    }, [])

    const [gone] = useState(() => new Set());
    const [props, api] = useSprings(cards.length, (i) => ({
        ...to(i),
        from: from(i),
    }))
  
    const bind = useGesture({
        onClick: ({ args: [index] }) => {
            gone.add(index)
            setSlide(slide => slide + 1)
            api.start((i) => {
                if (index !== i) return
                return {
                    x: (200 + window.innerWidth) * -1, // Send the card off to the left
                    rot: 0,
                    scale: 1,
                    delay: undefined,
                    config: { friction: 50, tension: 200 },
                }
            })
            if (gone.size === cards.length) {
                setTimeout(() => {
                    gone.clear()
                    setSlide(1)
                    api.start((i) => to(i))
                }, 600)
            }                
        }
    })

    return (
        <>
            {props.map(({ x, y, rot, scale }, i) => (
                <animated.div className="card-container" key={i} style={{ x, y }}>
                    <animated.div
                        {...bind(i)}
                        style={{
                            transform: interpolate([rot, scale], trans),
                        }}
                    >
                        {cards[i]}
                    </animated.div>
                </animated.div>
            ))}            
        </>
    );
}

export default function About() {
    return (
        <>
            <div className="deck">
                <Deck />
            </div>
            <div className="handles">
                <a href="https://www.linkedin.com/in/jason-landis-557110275/" target='_blank'>
                    <img src={linkedin} width="40px" />
                </a>
                <a href="https://github.com/JasonLandis" target='_blank'>
                    <img src={github} width="40px" />
                </a>
                <a href="mailto: jasonelandis@gmail.com" target='_blank'>
                    <img src={mail} width="40px" />
                </a>
            </div>
        </>
    );
}
