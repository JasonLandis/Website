import React from 'react'
import { CountProvider } from './context/CountContext'

import Background from './components/Background'
import Count from './components/Count'
import Links from './components/Links'
import Input from './components/Input'

import Zero from './puzzles/Zero'
import One from './puzzles/One'

function App() {
    return (
        <CountProvider>
            {/* Components */}
            <Background />
            <Count />
            <Links />
            <Input />

            {/* Puzzles */}
            <Zero />
            <One />
        </CountProvider>
    )
}

export default App
