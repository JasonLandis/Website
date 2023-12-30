import './App.css'
import React from 'react'
import { CountProvider } from './context/CountContext'

import Links from './components/Links'
import Background from './components/Background'
import Count from './components/Count'
import Puzzle from './components/Puzzle'

function App() {
    return (
        <CountProvider>
            <Count />
            <Background />
            <Links />
        </CountProvider>
    )
}

export default App
