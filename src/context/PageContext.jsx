import React, { useState, createContext} from 'react'

export const PageContext = createContext()


// Data for the puzzles shared between components
export const PageProvider = ({ children }) => {
    const [page, setPage] = useState('home')
    const [projectPage, setProjectPage] = useState('')

    return (
        <PageContext.Provider value={{ page, setPage, projectPage, setProjectPage }}>
            {children}
        </PageContext.Provider>
    )
}
