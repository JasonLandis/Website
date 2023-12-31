import React, { useEffect, useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import './styles/Background.css'


// Handles changes to the background.
const Background = () => {

    const { count } = useContext(CountContext)

    const [background, backgroundApi] = useSpring(() => ({ from: { backgroundColor: '#111111' } }))

    useEffect(() => {
        if (count === 7) {
            backgroundApi.start({ backgroundColor: '#171717' })
        }
    }, [count])

    return (
        <animated.div className="background" style={{...background}}>
            <div className="logo-shadow"></div>
        </animated.div>
    )
}

export default Background