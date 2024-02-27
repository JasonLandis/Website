import React, { useEffect, useState, createContext} from 'react'

export const CountContext = createContext()


// Data for the puzzles shared between components
export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [correct, setCorrect] = useState('')
    const [codes, setCodes] = useState({})
    const [answers, setAnswers] = useState({})
    const [inputValue, setInputValue] = useState('')

    // Generate 8 character code
    function generateCode() {
        let code = ''
        let characters = 'abcdefghijklmnopqrstuvwxyz123456789'
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return code
    }

    // Randomly select between projects and about page
    function projectsOrAbout() {
        let randomIndex = Math.random();
        return randomIndex < 0.5 ? "[projects]" : "[about]";
    }

    // Randomly select a project page
    function projectInProjects() {
        let randomIndex = Math.random();
        return randomIndex < 0.25 ? "[map]" : randomIndex < 0.5 ? "[blog]" : randomIndex < 0.75 ? "[constellation]" : "[pathfinder]";
    }

    // Randomly select a slide from the about page
    function aboutSlides() {
        let randomIndex = Math.random();
        return randomIndex < 0.25 ? "[about[1]]" : randomIndex < 0.5 ? "[about[2]]" : randomIndex < 0.75 ? "[about[2]]" : "[about[3]]";
    }


    // PUZZLES


    // Appear 10, Input 11 - 15
    function puzzleZero() {
        let inputNum = Math.floor(Math.random() * (16 - 11) + 11)
        let code = generateCode()
        return [inputNum, code]
    }
    
    // Appear 20, Input 71 - 80
    function puzzleOne() {
        let inputNum = Math.floor(Math.random() * (81 - 71)) + 71
        let code = generateCode()
        return [inputNum, code]
    }

    // Appear 30, Go to projects/about 31 - 35, Input 36 - 40
    function puzzleTwo() {
        let cluePage = projectsOrAbout()
        let clueNum = Math.floor(Math.random() * (36 - 31)) + 31
        let inputNum = Math.floor(Math.random() * (41 - 36)) + 36
        let code = generateCode()
        return [inputNum, code, cluePage, clueNum]
    }

    // Appear 40, Go to project in projects 50 - 60, Input 81 - 85
    function puzzleThree() {
        let cluePage = projectInProjects()
        let clueNum = Math.floor(Math.random() * (61 - 50)) + 50
        let inputNum = Math.floor(Math.random() * (86 - 81)) + 81
        let code = generateCode()
        return [inputNum, code, cluePage, clueNum]
    }

    // Appear 50, Go to slide in about 55 - 65, Input 66 - 70
    function puzzleFour() {
        let cluePage = aboutSlides()
        let clueNum = Math.floor(Math.random() * (66 - 55)) + 55
        let inputNum = Math.floor(Math.random() * (71 - 66)) + 66
        let code = generateCode()
        return [inputNum, code, cluePage, clueNum]
    }

    // Appear 60, Input 61 - 65 (use code from puzzle 0 - 4)
    function puzzleFive() {
        let randomNum = Math.floor(Math.random() * 4) * 10 + 10
        let inputNum = Math.floor(Math.random() * (66 - 61)) + 61
        return [inputNum, randomNum]
    }

    // Appear 70, Go to project in projects 71 - 75, Go to slide in about 81 - 85, Input 93 - 94
    function puzzleSix() {
        let clueOnePage = projectInProjects()
        let clueOneNum = Math.floor(Math.random() * (76 - 71)) + 71
        let clueTwoPage = aboutSlides()
        let clueTwoNum = Math.floor(Math.random() * (86 - 81)) + 81
        let inputNum = Math.floor(Math.random() * (95 - 93)) + 93
        let code = generateCode()
        return [inputNum, code, clueOnePage, clueOneNum, clueTwoPage, clueTwoNum]
    }

    // Appear 80, Go to slide in about 81 - 85, Go to project in projects 86 - 90, Input 91 - 92 (use code from puzzle 0 - 7)
    function puzzleSeven() {
        let clueOnePage = aboutSlides()
        let clueOneNum = Math.floor(Math.random() * (86 - 81)) + 81
        let clueTwoPage = projectInProjects()
        let clueTwoNum = Math.floor(Math.random() * (91 - 86)) + 86
        let randomNum = Math.floor(Math.random() * 7) * 10 + 10
        let inputNum = Math.floor(Math.random() * (93 - 91)) + 91
        return [inputNum, randomNum, clueOnePage, clueOneNum, clueTwoPage, clueTwoNum]
    }

    // Appear 90, Input 95 - 98 (Reverse code and input number)
    function puzzleEight() {
        let inputNum = Math.floor(Math.random() * (99 - 95)) + 95
        let code = generateCode()
        return [inputNum, code]
    }


    // Generate all the codes and answers for the puzzles
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
        tempCodes[5] = {
            inputNum: puzzleFiveData[0],
            randomNum: puzzleFiveData[1],
        }        
        if (puzzleFiveData[1] === 10) {
            tempAnswers[puzzleFiveData[0]] = tempCodes[0].code
        }
        else if (puzzleFiveData[1] === 20) {
            tempAnswers[puzzleFiveData[0]] = tempCodes[1].code
        }
        else if (puzzleFiveData[1] === 30) {
            tempAnswers[puzzleFiveData[0]] = tempCodes[2].code
        }
        else if (puzzleFiveData[1] === 40) {
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
        tempCodes[7] = {
            inputNum: puzzleSevenData[0],
            randomNum: puzzleSevenData[1],
            clueOnePage: puzzleSevenData[2],
            clueOneNum: puzzleSevenData[3],
            clueTwoPage: puzzleSevenData[4],
            clueTwoNum: puzzleSevenData[5],
        }
        if (puzzleSevenData[1] === 10) {
            tempAnswers[puzzleSevenData[0]] = tempCodes[0].code
        }
        else if (puzzleSevenData[1] === 20) {
            tempAnswers[puzzleSevenData[0]] = tempCodes[1].code
        }
        else if (puzzleSevenData[1] === 30) {
            tempAnswers[puzzleSevenData[0]] = tempCodes[2].code
        }
        else if (puzzleSevenData[1] === 40) {
            tempAnswers[puzzleSevenData[0]] = tempCodes[3].code
        }
        else if (puzzleSevenData[1] === 50) {
            tempAnswers[puzzleSevenData[0]] = tempCodes[4].code
        }
        else if (puzzleSevenData[1] === 60) {
            tempAnswers[puzzleSevenData[0]] = tempCodes[5].code
        }
        else if (puzzleSevenData[1] === 70) {
            tempAnswers[puzzleSevenData[0]] = tempCodes[6].code
        }

        let puzzleEightData = puzzleEight()
        tempCodes[8] = {
            inputNum: puzzleEightData[0],
            code: puzzleEightData[1]
        }
        tempAnswers[puzzleEightData[0]] = puzzleEightData[1]

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
