import React, { useEffect, useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import './styles/Links.css'


// Handles link elements.
const Links = () => {
    const { count, array } = useContext(CountContext)

    const [about, aboutApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [contact, contactApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [projects, projectsApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [games, gamesApi] = useSpring(() => ({ from: { opacity: 0 } }))
    const [skills, skillsApi] = useSpring(() => ({ from: { opacity: 0 } }))

    useEffect(() => {
        if (count === array[0]) {            
            aboutApi.start({ opacity: 1, config: { duration: 1000 }})
        }
        else if (count === array[1]) {
            contactApi.start({ opacity: 1, config: { duration: 1000 } })
        }
        else if (count === array[2]) {
            projectsApi.start({ opacity: 1, config: { duration: 1000 } })
        }
        else if (count === array[3]) {
            gamesApi.start({ opacity: 1, config: { duration: 1000 } })
        }
        else if (count === array[4]) {
            skillsApi.start({ opacity: 1, config: { duration: 1000 } })
        }
    }, [count])

    return (
        <div className="links">
            <animated.div style={{...projects}}><a href='#'>Projects</a></animated.div>
            <animated.div style={{...games}}><a href='#'>Games</a></animated.div>
            <animated.div style={{...skills}}><a href='#'>Skills</a></animated.div>
            <animated.div style={{...about}}><a href='#'>About</a></animated.div>
            <animated.div style={{...contact}}><a href='#'>Contact</a></animated.div>
        </div>
    )
}

export default Links