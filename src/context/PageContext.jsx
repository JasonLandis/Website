import React, { useState, createContext} from 'react'

export const PageContext = createContext()


// Context of the page that is active.
export const PageProvider = ({ children }) => {
    const [page, setPage] = useState('home')
    const [projectPage, setProjectPage] = useState('')

    return (
        <PageContext.Provider value={{ page, setPage, projectPage, setProjectPage }}>
            {children}
        </PageContext.Provider>
    )
}
