import React, { useEffect, useState, createContext} from 'react'

export const CountContext = createContext()


// Data for the puzzles shared between components
export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [correct, setCorrect] = useState('')
    const [codes, setCodes] = useState({})
    const [answers, setAnswers] = useState({})
    const [inputValue, setInputValue] = useState('')

    function puzzleZero() {
        let inputNum = Math.floor(Math.random() * (16 - 11) + 11)
        let code = ''
        let characters = 'abcdefghijklmnopqrstuvwxyz123456789'
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return [inputNum, code]
    }

    function puzzleOne() {
        let inputNum = Math.floor(Math.random() * (81 - 40)) + 40
        let code = ''
        let characters = 'abcdefghijklmnopqrstuvwxyz123456789'
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return [inputNum, code]
    }

    function generateCodes() {
        let tempCodes = {}
        let tempAnswers = {}

        let puzzleZeroData = puzzleZero()
        tempCodes[0] = {
            inputNum: puzzleZeroData[0],
            code: puzzleZeroData[1]
        }
        tempAnswers[puzzleZeroData[0]] = puzzleZeroData[1]

        let puzzleOneData = puzzleOne()
        tempCodes[1] = {
            inputNum: puzzleOneData[0],
            code: puzzleOneData[1]
        }
        tempAnswers[puzzleOneData[0]] = puzzleOneData[1]
        
        // More puzzles here
        
        setAnswers(tempAnswers)
        setCodes(tempCodes)
    }

    useEffect(() => {
        generateCodes();
    }, []);

    return (
        <CountContext.Provider value={{ count, setCount, correct, setCorrect, codes, generateCodes, answers, inputValue, setInputValue }}>
            {children}
        </CountContext.Provider>
    );
}
