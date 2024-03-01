import React, { useEffect, useContext, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'

const HomeBackground = () => {
    const { correct, setCorrect, count } = useContext(CountContext)
    const { page } = useContext(PageContext)
    const [hoveredTile, setHoveredTile] = useState(null)

    const handleMouseEnter = (color) => {
        setHoveredTile(color)
    }

    const handleMouseLeave = () => {
        setHoveredTile(null)
    }

    const [tile1, tile1Api] = useSpring(() => ({ from: { backgroundColor: '#13FF00' } }))
    const [tile2, tile2Api] = useSpring(() => ({ from: { backgroundColor: '#FF0000' } }))
    const [tile3, tile3Api] = useSpring(() => ({ from: { backgroundColor: '#AE00FF' } }))
    const [tile4, tile4Api] = useSpring(() => ({ from: { backgroundColor: '#FF00FF' } }))
    const [tile5, tile5Api] = useSpring(() => ({ from: { backgroundColor: '#FFF300' } }))
    const [tile6, tile6Api] = useSpring(() => ({ from: { backgroundColor: '#FF8700' } }))
    const [tile7, tile7Api] = useSpring(() => ({ from: { backgroundColor: '#0036FF' } }))
    const [tile8, tile8Api] = useSpring(() => ({ from: { backgroundColor: '#FF007C' } }))
    const [tile9, tile9Api] = useSpring(() => ({ from: { backgroundColor: '#00FFF7' } }))

    const tiles = [
        { tile: tile1, api: tile1Api, color: '#13FF00' },
        { tile: tile2, api: tile2Api, color: '#FF0000' },
        { tile: tile3, api: tile3Api, color: '#AE00FF' },
        { tile: tile4, api: tile4Api, color: '#FF00FF' },
        { tile: tile5, api: tile5Api, color: '#FFF300' },
        { tile: tile6, api: tile6Api, color: '#FF8700' },
        { tile: tile7, api: tile7Api, color: '#0036FF' },
        { tile: tile8, api: tile8Api, color: '#FF007C' },
        { tile: tile9, api: tile9Api, color: '#00FFF7' }
    ]

    useEffect(() => {
        if (correct === 'incorrect') {
            tiles.forEach(({ api }) => {
                api.start({ backgroundColor: '#FF0000', config: { duration: 250 } })
                api.start({ backgroundColor: '#13FF00', config: { duration: 250 }, delay: 250 })
            })
            setCorrect('')
        } else if (correct === 'correct') {
            tiles.forEach(({ api }) => {
                api.start({ backgroundColor: '#13FF00', config: { duration: 250 } })
                api.start({ backgroundColor: '#FF0000', config: { duration: 250 }, delay: 250 })
            })
            setCorrect('')
        }
    }, [correct, tiles, setCorrect])

    return (
        <>
            <div className="background"></div>
            {count >= 1 &&
                <ul className="tiles">
                    {tiles.map(({ tile, api, color }, index) => (
                        <animated.li
                            key={index}
                            style={{ ...tile, backgroundColor: page === "projects" ? '#333333' : (hoveredTile === null ? color : hoveredTile) }}
                            onMouseEnter={() => handleMouseEnter(color)}
                            onMouseLeave={handleMouseLeave}
                        ></animated.li>
                    ))}
                </ul>
            }
        </>
    )
}

export default HomeBackground
