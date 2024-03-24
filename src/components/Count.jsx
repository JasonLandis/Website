import React, { useContext, useEffect } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'

import './components.css'


// Handles the count and the logo.
const Count = () => {

    const { correct, setCorrect, count } = useContext(CountContext)
    const { page } = useContext(PageContext)

    const [countDisplay, countApi] = useSpring(() => ({ from: { backgroundColor: "#272727", left: '-100px' } }))

    useEffect(() => {
        if (count >= 1) {
            countApi.start({ left: '-10px' })
        }
        if (page !== 'home') {
            countApi.start({ left: '-100px' })
        }
    }, [count, page])

    useEffect(() => {
        if (correct === 'incorrect') {
            countApi.start({ backgroundColor: "#550000", duration: 300})
            countApi.start({ backgroundColor: '#272727', config: { duration: 300 }, delay: 300})
            setCorrect('')
        } else if (correct === 'correct') {
            countApi.start({ backgroundColor: "#005500", duration: 300})
            countApi.start({ backgroundColor: '#272727', config: { duration: 300 }, delay: 300})
            setCorrect('')
        }
    }, [correct])

    return (
        <animated.div className="count" style={{...countDisplay}}>{count}</animated.div>
    )
}

export default Count
