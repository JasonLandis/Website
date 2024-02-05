import React from 'react'

import Count from './components/Count'
import Input from './components/Input'
import Links from './components/Links'
import Background from './components/Background'

import Zero from './puzzles/Zero'


function App() {

    return (
        <>
            <Count />
            <Input />
            <Links />
            <Background />

            <Zero />
        </>
    )
}

export default App
