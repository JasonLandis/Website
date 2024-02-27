import React, { useEffect, useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'


// Handles changes to the background.
const HomeBackground = () => {

    const { correct, setCorrect } = useContext(CountContext)

    const [background, backgroundApi] = useSpring(() => ({ from: { backgroundColor: '#111111' } }))

    useEffect(() => {
        if (correct === 'incorrect') {
            backgroundApi.start({ backgroundColor: '#220000', config: { duration: 250 } })
            backgroundApi.start({ backgroundColor: '#111111', config: { duration: 1000 }, delay: 250 })
            setCorrect('')
        }
        else if (correct === 'correct') {
            backgroundApi.start({ backgroundColor: '#001800', config: { duration: 250 } })
            backgroundApi.start({ backgroundColor: '#111111', config: { duration: 1000 }, delay: 250 })
            setCorrect('')
        }
    }, [correct])

    return (
        <>
            <animated.div className="background" style={{...background}}></animated.div>
            <div className="blob"></div>
            <div className="blob2"></div>
            <div className="bg"></div>
        </>
    )
}

export default HomeBackground
