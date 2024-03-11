import React, { useEffect, useContext, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'


// Background animations
const HomeBackground = () => {
    const { correct, setCorrect, count, isMobile } = useContext(CountContext)
    const { page } = useContext(PageContext)
    const [numCorrect, setNumCorrect] = useState(0)
    const [isLandscape, setIsLandscape] = useState(false)

    const [tile1, tile1Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "0" } }))
    const [tile2, tile2Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "0" } }))
    const [tile3, tile3Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "0" } }))
    const [tile4, tile4Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "0" } }))
    const [tile5, tile5Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "0" } }))
    const [tile6, tile6Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "0" } }))
    const [tile7, tile7Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "0" } }))
    const [tile8, tile8Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "0" } }))
    const [tile9, tile9Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "0" } }))

    const tiles = [
        { tile: tile1, api: tile1Api },
        { tile: tile2, api: tile2Api },
        { tile: tile3, api: tile3Api },
        { tile: tile4, api: tile4Api },
        { tile: tile5, api: tile5Api },
        { tile: tile6, api: tile6Api },
        { tile: tile7, api: tile7Api },
        { tile: tile8, api: tile8Api },
        { tile: tile9, api: tile9Api }
    ]

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > window.innerHeight) {
                setIsLandscape(true)
            } else {
                setIsLandscape(false)
            }
        }

        handleWindowResize();

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    useEffect(() => {
        if (correct === 'incorrect') { 
            setNumCorrect(0)           
            tiles.forEach(({ api }) => {
                api.start({ backgroundColor: '#440000', config: { duration: 400 } })
                api.start({ backgroundColor: '#333333', config: { duration: 400 }, delay: 400 })
            })
            setCorrect('')
        } else if (correct === 'correct') {
            setNumCorrect(numCorrect + 1)
            setCorrect('')
        }
    }, [correct, tiles, setCorrect])

    useEffect(() => {
        if (page === 'home') {
            tiles.forEach(({ api }) => {
                api.start({ borderRadius: "0%", config: { duration: 250 } })
            })
        } else if (page === 'projects') {
            tiles.forEach(({ api }) => {
                api.start({ borderRadius: "30%", config: { duration: 250 } })
            })
        } else if (page === 'about') {
            tiles.forEach(({ api }) => {
                api.start({ borderRadius: "50%", config: { duration: 250 } })
            })
        }
    }, [page])

    useEffect(() => {
        if (numCorrect == 1) {
            tile1Api.start({ backgroundColor: '#003300', config: { duration: 250 } })
        }
        if (numCorrect == 2) {
            tile2Api.start({ backgroundColor: '#003300', config: { duration: 250 } })
        }
        if (numCorrect == 3) {
            tile3Api.start({ backgroundColor: '#003300', config: { duration: 250 } })
        }
        if (numCorrect == 4) {
            tile4Api.start({ backgroundColor: '#003300', config: { duration: 250 } })
        }
        if (numCorrect == 5) {
            tile5Api.start({ backgroundColor: '#003300', config: { duration: 250 } })
        }
        if (numCorrect == 6) {
            tile6Api.start({ backgroundColor: '#003300', config: { duration: 250 } })
        }
        if (numCorrect == 7) {
            tile7Api.start({ backgroundColor: '#003300', config: { duration: 250 } })
        }
        if (numCorrect == 8) {
            tile8Api.start({ backgroundColor: '#003300', config: { duration: 250 } })
        }
        if (numCorrect == 9) {
            tile9Api.start({ backgroundColor: '#003300', config: { duration: 250 } })
        }
    }, [numCorrect])

    useEffect(() => {
        if (count >= 100) {
            const interval = setInterval(() => {
                tiles.forEach(({ api }) => {
                    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                    api.start({ backgroundColor: randomColor });
                })
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [count])


    return (
        <>
            <div className="background"></div>
            {!isMobile >= 1 &&
                <div className="tiles">
                    {tiles.map(({ tile }, index) => (
                        <animated.div
                            key={index}
                            style={{ ...tile }}
                        ></animated.div>
                    ))}
                </div>
            }
            {isMobile && isLandscape && <div className="landscape-warning">
                <p>Please rotate your device to portrait mode</p>
            </div>}
        </>
    )
}

export default HomeBackground
