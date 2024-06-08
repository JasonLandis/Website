import { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'


// Handles input for puzzles.
const Input = () => {
    const { count, setCount, setCorrect, answers, generateCodes, inputValue, setInputValue } = useContext(CountContext)
    const { page } = useContext(PageContext)

    const [inputDisplay, inputDisplayApi] = useSpring(() => ({ from: { bottom: '-100px' } }))
    const [puzzleNumber, setPuzzleNumber] = useState(-2)

    useEffect(() => {
        if (count in answers) {
            inputDisplayApi.start({ bottom: '10px' })
            setPuzzleNumber(count)
        }
        else if (count === puzzleNumber + 1) {
            if (inputValue === answers[puzzleNumber]) {
                setInputValue('')
                inputDisplayApi.start({ bottom: '-100px' })
                setCorrect('correct')
            }
            else {
                setInputValue('')
                inputDisplayApi.start({ bottom: '-100px' })
                setCorrect('incorrect')
                setCount(10)
                setPuzzleNumber(-2)
                generateCodes()
            }
        }
    }, [count])

    useEffect(() => {
        if (page === 'home' && count in answers) {
            inputDisplayApi.start({ bottom: '10px' })
        }
        else if (page != 'home') {
            inputDisplayApi.start({ bottom: '-100px' })
        }
    }, [page]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        const sanitizedValue = value.replace(/[^a-zA-Z0-9]/g, ''); // Only allow numbers and characters
        setInputValue(sanitizedValue.slice(0, 8)); // Limit the maximum length to 8 characters
    };

    return (
        count >= 1 && (
            <animated.div className="input" style={{ ...inputDisplay }}>
                <input
                    type="text"
                    spellCheck={false}
                    value={inputValue}
                    onChange={handleInputChange}
                    maxLength={8}
                />
            </animated.div>
        )
    )
}

export default Input
