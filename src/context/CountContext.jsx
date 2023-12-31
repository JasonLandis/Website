import React, { useEffect, useState, createContext} from 'react'

export const CountContext = createContext()

export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [array, setArray] = useState([])

    // randomizes the array
    const randomize = () => {
        let tempArray = []
        while (tempArray.length < 5) {
            let r = Math.floor(Math.random() * 5) + 2
            if (tempArray.indexOf(r) === -1) tempArray.push(r)
        }
        setArray(tempArray)
    }

    useEffect(() => {
        randomize();      
    }, []);

    return (
        <CountContext.Provider value={{ count, setCount, array }}>
            {children}
        </CountContext.Provider>
    );
}