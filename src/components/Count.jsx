import React, { useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import logo from '../assets/logo.png'
import './styles/Count.css'


// Handles the count and the logo.
const Count = () => {

    const { count, setCount } = useContext(CountContext)
    const [countDisplay, countApi] = useSpring(() => ({ from: { left: '-100px' } }))
    const [logoButton, logoApi] = useSpring(() => ({ from: { transform: 'scale(1)' } }))

    const handleMouseEnter = () => {
        logoApi.start({ transform: 'scale(1.05)' })
    }

    const handleMouseLeave = () => {
        logoApi.start({ transform: 'scale(1)' })
    }

    const handleMouseDown = () => {
        logoApi.start({ transform: 'scale(1.03)', config: { duration: 100 } })
    }

    const handleMouseUp = () => {
        logoApi.start({ transform: 'scale(1.05)', config: { duration: 100 } })
    }

    const handleMouseClick = () => {
        setCount(count + 1)
        countApi.start({ left: '10px' })
    }

    return (
        <>
            <animated.div className="container" style={{...countDisplay}}>{count}</animated.div>
            <div className="logo-container">             
                <animated.div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onClick={handleMouseClick}
                    style={{...logoButton}}
                >
                    <img className="logo" src={logo} />
                </animated.div>
            </div>
        </>
    )
}

export default Count