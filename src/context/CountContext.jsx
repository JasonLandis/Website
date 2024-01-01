import React, { useEffect, useState, createContext} from 'react'

export const CountContext = createContext()


// Data for the puzzles shared between components
export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [linksArray, setLinksArray] = useState([])
    const [fail, setFail] = useState(false)
    const [codes, setCodes] = useState({})
    const [answers, setAnswers] = useState({})

    // Randomize the order of appearance of the links
    const randomizeLinksArray = () => {
        let tempArray = []
        while (tempArray.length < 5) {
            let r = Math.floor(Math.random() * 5) + 2
            if (tempArray.indexOf(r) === -1) tempArray.push(r)
        }
        setLinksArray(tempArray)
    }

    function puzzleZero() {
        let appearNum = 10
        let inputNum = Math.floor(Math.random() * 5) + 11
        let code = ''
        let characters = 'abcdefghijklmnopqrstuvwxyz123456789'
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return [appearNum, inputNum, code]
    }

    function puzzleOne() {
        let appearNum = 16
        let inputNum = Math.floor(Math.random() * 5) + 17
        let dict = {}
        let array = ['Projects', 'Games', 'Skills', 'About', 'Contact']
        for (let i = 0; i < 5; i++) {
            dict[linksArray[i]] = array[i]
        }
        let code = Object.keys(dict)[Math.floor(Math.random() * Object.keys(dict).length)]
        let hint = dict[code]
        return [appearNum, inputNum, code, hint]
    }

    function generateCodes() {
        let tempCodes = {}
        let tempAnswers = {}

        let puzzleZeroData = puzzleZero()
        tempCodes[0] = {
            appearNum: puzzleZeroData[0],
            inputNum: puzzleZeroData[1],
            code: puzzleZeroData[2]
        }
        tempAnswers[puzzleZeroData[1]] = puzzleZeroData[2]

        let puzzleOneData = puzzleOne()
        tempCodes[1] = {
            appearNum: puzzleOneData[0],
            inputNum: puzzleOneData[1],
            code: puzzleOneData[2],
            hint: puzzleOneData[3]
        }
        tempAnswers[puzzleOneData[1]] = puzzleOneData[2]
        
        // More puzzles here
        
        setAnswers(tempAnswers)
        setCodes(tempCodes)
    }

    useEffect(() => {
        randomizeLinksArray();
    }, []);

    useEffect(() => {
        generateCodes();
    }, [linksArray]);

    return (
        <CountContext.Provider value={{ count, setCount, linksArray, fail, setFail, codes, generateCodes, answers }}>
            {children}
        </CountContext.Provider>
    );
}