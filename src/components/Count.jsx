import React, { useContext, useEffect } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'

import './components.css'


// Handles the count and the logo.
const Count = () => {

    const { count } = useContext(CountContext)
    const { page } = useContext(PageContext)

    const [countDisplay, countApi] = useSpring(() => ({ from: { left: '-100px' } }))

    useEffect(() => {
        if (count >= 1) {
            countApi.start({ left: '-10px' })
        }
        if (page !== 'home') {
            countApi.start({ left: '-100px' })
        }
    }, [count, page])

    return (
        <animated.div className="count" style={{...countDisplay}}>{count}</animated.div>
    )
}

export default Count
