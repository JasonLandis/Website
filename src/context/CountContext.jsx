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
        let inputNum = Math.floor(Math.random() * (81 - 71)) + 71
        let code = ''
        let characters = 'abcdefghijklmnopqrstuvwxyz123456789'
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return [inputNum, code]
    }

    function puzzleTwo() {
        let randomIndex = Math.random();
        let cluePage = randomIndex < 0.5 ? "[projects]" : "[about]";
        let clueNum = Math.floor(Math.random() * (36 - 31)) + 31
        let inputNum = Math.floor(Math.random() * (41 - 36)) + 36
        let code = ''
        let characters = 'abcdefghijklmnopqrstuvwxyz123456789'
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return [inputNum, code, cluePage, clueNum]
    }

    function puzzleThree() {
        let randomIndex = Math.random();
        let cluePage = randomIndex < 0.25 ? "[map]" : randomIndex < 0.5 ? "[blog]" : randomIndex < 0.75 ? "[constellation]" : "[pathfinder]";
        let clueNum = Math.floor(Math.random() * (61 - 50)) + 50
        let inputNum = Math.floor(Math.random() * (86 - 81)) + 81
        let code = ''
        let characters = 'abcdefghijklmnopqrstuvwxyz123456789'
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return [inputNum, code, cluePage, clueNum]
    }

    function puzzleFour() {
        let randomIndex = Math.random();
        let cluePage = randomIndex < 0.25 ? "[about[1]]" : randomIndex < 0.5 ? "[about[2]]" : randomIndex < 0.75 ? "[about[2]]" : "[about[3]]";
        let clueNum = Math.floor(Math.random() * (66 - 55)) + 55
        let inputNum = Math.floor(Math.random() * (71 - 66)) + 66
        let code = ''
        let characters = 'abcdefghijklmnopqrstuvwxyz123456789'
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return [inputNum, code, cluePage, clueNum]
    }

    function puzzleFive() {
        let randomNum = Math.floor(Math.random() * 4) * 10 + 10
        let inputNum = Math.floor(Math.random() * (66 - 61)) + 61
        return [inputNum, randomNum]
    }

    function puzzleSix() {
        let randomIndex = Math.random();
        let clueOnePage = randomIndex < 0.25 ? "[map]" : randomIndex < 0.5 ? "[blog]" : randomIndex < 0.75 ? "[constellation]" : "[pathfinder]";
        let clueOneNum = Math.floor(Math.random() * (76 - 71)) + 71
        let clueTwoPage = randomIndex < 0.25 ? "[about[1]]" : randomIndex < 0.5 ? "[about[2]]" : randomIndex < 0.75 ? "[about[2]]" : "[about[3]]";
        let clueTwoNum = Math.floor(Math.random() * (86 - 81)) + 81
        let inputNum = Math.floor(Math.random() * (95 - 93)) + 93
        let code = ''
        let characters = 'abcdefghijklmnopqrstuvwxyz123456789'
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return [inputNum, code, clueOnePage, clueOneNum, clueTwoPage, clueTwoNum]
    }

    function puzzleSeven() {
        let randomIndex = Math.random();
        let clueOnePage = randomIndex < 0.25 ? "[about[1]]" : randomIndex < 0.5 ? "[about[2]]" : randomIndex < 0.75 ? "[about[2]]" : "[about[3]]";
        let clueOneNum = Math.floor(Math.random() * (86 - 81)) + 81
        let clueTwoPage = randomIndex < 0.25 ? "[map]" : randomIndex < 0.5 ? "[blog]" : randomIndex < 0.75 ? "[constellation]" : "[pathfinder]";
        let clueTwoNum = Math.floor(Math.random() * (91 - 86)) + 86
        let randomNum = Math.floor(Math.random() * 7) * 10 + 10
        let inputNum = Math.floor(Math.random() * (93 - 91)) + 91
        return [inputNum, randomNum, clueOnePage, clueOneNum, clueTwoPage, clueTwoNum]
    }

    function puzzleEight() {
        let inputNum = Math.floor(Math.random() * (99 - 95)) + 95
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

        let puzzleTwoData = puzzleTwo()
        tempCodes[2] = {
            inputNum: puzzleTwoData[0],
            code: puzzleTwoData[1],
            cluePage: puzzleTwoData[2],
            clueNum: puzzleTwoData[3]
        }
        tempAnswers[puzzleTwoData[0]] = puzzleTwoData[1]

        let puzzleThreeData = puzzleThree()
        tempCodes[3] = {
            inputNum: puzzleThreeData[0],
            code: puzzleThreeData[1],
            cluePage: puzzleThreeData[2],
            clueNum: puzzleThreeData[3]
        }
        tempAnswers[puzzleThreeData[0]] = puzzleThreeData[1]

        let puzzleFourData = puzzleFour()
        tempCodes[4] = {
            inputNum: puzzleFourData[0],
            code: puzzleFourData[1],
            cluePage: puzzleFourData[2],
            clueNum: puzzleFourData[3]
        }
        tempAnswers[puzzleFourData[0]] = puzzleFourData[1]

        let puzzleFiveData = puzzleFive()
        if (puzzleFiveData[1] === 10) {
            tempCodes[5] = {
                inputNum: puzzleFiveData[0],
                randomNum: puzzleFiveData[1],
                code: tempCodes[0].code
            }
            tempAnswers[puzzleFiveData[0]] = tempCodes[0].code
        }
        else if (puzzleFiveData[1] === 20) {
            tempCodes[5] = {
                inputNum: puzzleFiveData[0],
                randomNum: puzzleFiveData[1],
                code: tempCodes[1].code
            }
            tempAnswers[puzzleFiveData[0]] = tempCodes[1].code
        }
        else if (puzzleFiveData[1] === 30) {
            tempCodes[5] = {
                inputNum: puzzleFiveData[0],
                randomNum: puzzleFiveData[1],
                code: tempCodes[2].code
            }
            tempAnswers[puzzleFiveData[0]] = tempCodes[2].code
        }
        else if (puzzleFiveData[1] === 40) {
            tempCodes[5] = {
                inputNum: puzzleFiveData[0],
                randomNum: puzzleFiveData[1],
                code: tempCodes[3].code
            }
            tempAnswers[puzzleFiveData[0]] = tempCodes[3].code
        }
        
        let puzzleSixData = puzzleSix()
        tempCodes[6] = {
            inputNum: puzzleSixData[0],
            code: puzzleSixData[1],
            clueOnePage: puzzleSixData[2],
            clueOneNum: puzzleSixData[3],
            clueTwoPage: puzzleSixData[4],
            clueTwoNum: puzzleSixData[5]
        }
        tempAnswers[puzzleSixData[0]] = puzzleSixData[1]

        let puzzleSevenData = puzzleSeven()
        if (puzzleSevenData[1] === 10) {
            tempCodes[7] = {
                inputNum: puzzleSevenData[0],
                randomNum: puzzleSevenData[1],
                clueOnePage: puzzleSevenData[2],
                clueOneNum: puzzleSevenData[3],
                clueTwoPage: puzzleSevenData[4],
                clueTwoNum: puzzleSevenData[5],
            }
            tempAnswers[puzzleSevenData[0]] = tempCodes[0].code
        }
        else if (puzzleSevenData[1] === 20) {
            tempCodes[7] = {
                inputNum: puzzleSevenData[0],
                randomNum: puzzleSevenData[1],
                clueOnePage: puzzleSevenData[2],
                clueOneNum: puzzleSevenData[3],
                clueTwoPage: puzzleSevenData[4],
                clueTwoNum: puzzleSevenData[5],
            }
            tempAnswers[puzzleSevenData[0]] = tempCodes[1].code
        }
        else if (puzzleSevenData[1] === 30) {
            tempCodes[7] = {
                inputNum: puzzleSevenData[0],
                randomNum: puzzleSevenData[1],
                clueOnePage: puzzleSevenData[2],
                clueOneNum: puzzleSevenData[3],
                clueTwoPage: puzzleSevenData[4],
                clueTwoNum: puzzleSevenData[5],
            }
            tempAnswers[puzzleSevenData[0]] = tempCodes[2].code
        }
        else if (puzzleSevenData[1] === 40) {
            tempCodes[7] = {
                inputNum: puzzleSevenData[0],
                randomNum: puzzleSevenData[1],
                clueOnePage: puzzleSevenData[2],
                clueOneNum: puzzleSevenData[3],
                clueTwoPage: puzzleSevenData[4],
                clueTwoNum: puzzleSevenData[5],
            }
            tempAnswers[puzzleSevenData[0]] = tempCodes[3].code
        }
        else if (puzzleSevenData[1] === 50) {
            tempCodes[7] = {
                inputNum: puzzleSevenData[0],
                randomNum: puzzleSevenData[1],
                clueOnePage: puzzleSevenData[2],
                clueOneNum: puzzleSevenData[3],
                clueTwoPage: puzzleSevenData[4],
                clueTwoNum: puzzleSevenData[5],
            }
            tempAnswers[puzzleSevenData[0]] = tempCodes[4].code
        }
        else if (puzzleSevenData[1] === 60) {
            tempCodes[7] = {
                inputNum: puzzleSevenData[0],
                randomNum: puzzleSevenData[1],
                clueOnePage: puzzleSevenData[2],
                clueOneNum: puzzleSevenData[3],
                clueTwoPage: puzzleSevenData[4],
                clueTwoNum: puzzleSevenData[5],
            }
            tempAnswers[puzzleSevenData[0]] = tempCodes[5].code
        }
        else if (puzzleSevenData[1] === 70) {
            tempCodes[7] = {
                inputNum: puzzleSevenData[0],
                randomNum: puzzleSevenData[1],
                clueOnePage: puzzleSevenData[2],
                clueOneNum: puzzleSevenData[3],
                clueTwoPage: puzzleSevenData[4],
                clueTwoNum: puzzleSevenData[5],
            }
            tempAnswers[puzzleSevenData[0]] = tempCodes[6].code
        }

        let puzzleEightData = puzzleEight()
        tempCodes[8] = {
            inputNum: puzzleEightData[0],
            code: puzzleEightData[1]
        }
        tempAnswers[puzzleEightData[0]] = puzzleEightData[1]

        // More puzzles here

        console.log(tempCodes)
        
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
