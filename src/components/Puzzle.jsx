import React, { useContext, useEffect } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import './styles/Puzzle.css'


// Handles the count and the logo.
const Puzzle = () => {

    const { count, random, color } = useContext(CountContext)
    const [randDisplay, randApi] = useSpring(() => ({ from: { opacity: 0, color: `${color}` } }))

    useEffect(() => {
        if (count === 8) {
            randApi.start({ opacity: 1, color: `${color}`, config: { duration: 1000 } })
        }
        else if (count === 9) {
            randApi.start({ opacity: 0, config: { duration: 1000 } })
        }
    }, [count])

    return (
        <>
            {count === 8 && <animated.div className="container top-right" style={{...randDisplay}}>{random}</animated.div>}
            {count === 9 && <animated.div className="container top-right" style={{...randDisplay}}>{random}</animated.div>} 
        </>
    )
}

export default Puzzle