import React, { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import './styles/Input.css'


// Handles input for puzzles
const Input = () => {

    const { count, setCount, setFail, answers, generateCodes } = useContext(CountContext)
    const [inputDisplay, inputDisplayApi] = useSpring(() => ({ from: { bottom: '-100px' } }))
    const [puzzleNumber, setPuzzleNumber] = useState(-2)

    useEffect(() => {
        if (count in answers) {
            inputDisplayApi.start({ bottom: '10px' })
            setPuzzleNumber(count)
        }
        else if (count === puzzleNumber + 1) {
            const input = document.querySelector('.input-container input')
            if (input.value === answers[puzzleNumber]) {
                input.value = ''
                inputDisplayApi.start({ bottom: '-100px' })
            }
            else {
                input.value = ''
                inputDisplayApi.start({ bottom: '-100px' })
                setFail(true)
                setCount(10)
                setPuzzleNumber(-2)
                generateCodes()
            }
        }
    }, [count])

    return (
        <animated.div className="input-container" style={{...inputDisplay}}>
            <input type="text" spellCheck={false} />
        </animated.div>
    )
}

export default Input