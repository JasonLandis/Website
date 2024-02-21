import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'

import './styles/About.css'
import map from '../assets/icons/map_icon.png'
import logo from '../assets/logos/logo.png'
import wmu from '../assets/logos/wmu.png'
import occ from '../assets/logos/occ.png'
import github from '../assets/logos/github.png'
import linkedin from '../assets/logos/linkedin.png'
import mail from '../assets/logos/mail.png'


// About me
// Education timeline
// Experience timeline
// Skills

const cards = [
    <div className="card">
        <h1>Skills</h1>
        <h2>Languages</h2>
        <p>HTML, CSS, JavaScript, PHP, C, C#, Python, JAVA, SQL</p>
        <h2>Frameworks</h2>
        <p>React, Django, ASP.NET, Bootstrap</p>
        <h2>Tools</h2>
        <p>Git, Docker, Unity, Firebase, GCP, MySQL, SQL Server</p>
    </div>,
    <div className="card">
        <h1>Work</h1>
        <div className="work">
            <img src={map} width="80px" height="90px" />
            <div className="work-info">
                <p>PK Deficiency Foundation</p>
                <p>Full-stack Developer - Freelance</p>
                <p>November 2023 - January 2024</p>
            </div>
        </div>
    </div>,
    <div className="card">
        <h1>Education</h1>
        <div className="education">
            <img src={wmu} width="100px" height="110px" />
            <div className="education-info">
                <p>Western Michigan University</p>
                <p>Bachelor of Science in Computer Science</p>
                <p>August 2020 - April 2023</p>
            </div>
        </div>
        <div className="education">
            <img src={occ} width="100px" height="110px" style={{ borderRadius: "5px"}} />
            <div className="education-info">
                <p>Oakland Community College</p>
                <p>General Studies</p>
                <p>August 2019 - April 2020</p>
            </div>
        </div>    
    </div>,
    <div className="card">
        <h1>About me</h1>
        <p>
            Hey, I'm Jason, a computer science graduate. I specialize in full-stack software 
            development with a hobby in game development.
        </p>
        <p>
            I am constantly working on projects, whether it be a mobile game or a complex web application. 
            Currently, I am working on my gamedev blog application, which you can learn more about in the projects
            section. I have also started a smaller project involving AI to increase my knowledge in the field.
        </p>
        <p>
            Try clicking my logo in the center of the home screen a few times...
        </p>
        <img src={logo} width="200px" height="220px" />
    </div>,
]

// Inital deck state
const from = (_i) => ({ rot: 0, scale: 1, x: (200 + window.innerWidth) * -1 })

// Animation from initial deck state
const to = (i) => ({
    x: 0,
    y: i * -4, // 4px between each card
    scale: 1,
    rot: -3 + Math.random() * 6, // Random rotation
    delay: i * 100, // Staggered delay
})

// Transform function
const trans = (r, s) => `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`; 

// Deck component
const Deck = () => {
    const [gone] = useState(() => new Set());
    const [props, api] = useSprings(cards.length, (i) => ({
        ...to(i),
        from: from(i),
    }))
  
    const bind = useGesture({
        onClick: ({ args: [index] }) => {
            gone.add(index)
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
                    api.start((i) => to(i))
                }, 600)
            }                
        }
    })

    return (
        <>
            {props.map(({ x, y, rot, scale }, i) => (
                <animated.div className="deck" key={i} style={{ x, y }}>
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
            <div className="deck-container">
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
