import { useContext } from 'react'
import { CountContext } from './context/CountContext'

import Count from './components/Count'
import Input from './components/Input'
import Links from './components/Links'
import Background from './components/Background'

import Zero from './puzzles/Zero'
import One from './puzzles/One'
import Two from './puzzles/Two'
import Three from './puzzles/Three'
import Four from './puzzles/Four'
import Five from './puzzles/Five'
import Six from './puzzles/Six'
import Seven from './puzzles/Seven'
import Eight from './puzzles/Eight'

import Thanks from './puzzles/Thanks'


function App() {

    const { isMobile } = useContext(CountContext)

    return (
        <>
            {!isMobile && <Count />}
            {!isMobile && <Input />}
            <Links />
            <Background />

            {!isMobile && <Zero />}
            {!isMobile && <One />}
            {!isMobile && <Two />}
            {!isMobile && <Three />}
            {!isMobile && <Four />}
            {!isMobile && <Five />}
            {!isMobile && <Six />}
            {!isMobile && <Seven />}
            {!isMobile && <Eight />}

            {!isMobile && <Thanks />}
        </>
    )
}

export default App
