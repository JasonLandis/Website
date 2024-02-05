import React, { useState, createContext} from 'react'

export const PageContext = createContext()


// Data for the puzzles shared between components
export const PageProvider = ({ children }) => {
    const [page, setPage] = useState('home')

    return (
        <PageContext.Provider value={{ page, setPage }}>
            {children}
        </PageContext.Provider>
    )
}