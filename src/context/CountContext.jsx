import React, { useEffect, useState, createContext} from 'react'

export const CountContext = createContext()

export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [array, setArray] = useState([])
    const [random, setRandom] = useState(0)
    const [color, setColor] = useState('white')

    // randomizes the array
    const randomize = () => {
        let tempArray = []
        while (tempArray.length < 5) {
            let r = Math.floor(Math.random() * 5) + 2
            if (tempArray.indexOf(r) === -1) tempArray.push(r)
        }
        setArray(tempArray)
    }

    // get random number between 10 and 15
    const getRandom = () => {
        setRandom(Math.floor(Math.random() * 6) + 10);
    };

    // get a random color choice of red, green, blue, or yellow
    const getColor = () => {
        let colors = ['red', 'green', 'blue', 'yellow']
        setColor(colors[Math.floor(Math.random() * colors.length)])
    }

    useEffect(() => {
        randomize();
        getRandom();
        getColor();        
    }, []);

    return (
        <CountContext.Provider value={{ count, setCount, array, random, color }}>
            {children}
        </CountContext.Provider>
    );
}