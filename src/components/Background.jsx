import React, { useEffect, useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import './styles/Background.css'


// Handles changes to the background.
const Background = () => {

    const { fail, setFail } = useContext(CountContext)

    const [background, backgroundApi] = useSpring(() => ({ from: { backgroundColor: '#111111' } }))

    useEffect(() => {
        if (fail) {
            backgroundApi.start({ backgroundColor: '#220000', config: { duration: 250 } })
            backgroundApi.start({ backgroundColor: '#111111', config: { duration: 1000 }, delay: 250 })
            setFail(false)
        }
    }, [fail])

    return (
        <animated.div className="background" style={{...background}}>
            <div className="logo-shadow"></div>
        </animated.div>
    )
}

export default Background