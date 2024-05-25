import React, { useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import logo from '../assets//logos/logo.png'

import './styles/Home.css'


// Places the logo on the page. Increments the count on click.
const Home = () => {

    const { count, setCount, isMobile } = useContext(CountContext)

    const [logoButton, logoApi] = useSpring(() => ({ from: { transform: 'scale(1)' } }))

    return (
        <>
            <div className="logo-shadow"></div>
            <div className="logo-container">
                {isMobile ? (
                    <img className="logo" rel="preload" src={logo} />
                ) : (
                    <animated.div
                        onMouseEnter={() => {
                            logoApi.start({ transform: 'scale(1.05)' })
                        }}
                        onMouseLeave={() => {
                            logoApi.start({ transform: 'scale(1)' })
                        }}
                        onMouseDown={() => {
                            logoApi.start({ transform: 'scale(1.02)' })
                        }}
                        onMouseUp={() => {
                            logoApi.start({ transform: 'scale(1.05)' })
                        }}
                        onClick={() => {
                            if (count < 100) {
                                setCount(count + 1)
                            }
                        }}
                        style={{...logoButton}}
                    >
                        <img className="logo" rel="preload" src={logo} />
                    </animated.div>
                )}
            </div>
        </>
    )
}

export default Home
