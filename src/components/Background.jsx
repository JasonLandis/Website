import React, { useEffect, useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import './styles/Background.css'


// Handles changes to the background.
const Background = () => {

    const { count } = useContext(CountContext)

    const [background, backgroundApi] = useSpring(() => ({ from: { backgroundColor: '#191919' } }))

    useEffect(() => {
        if (count === 7) {
            backgroundApi.start({ backgroundColor: '#102130', config: { duration: 1000 } })
        }
    }, [count])

    return (
        <animated.div className="background" style={{...background}}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </animated.div>    
    )
}

export default Background