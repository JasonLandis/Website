import React, { useEffect, useContext, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'


// Background animations
const HomeBackground = () => {
    const { count, isMobile } = useContext(CountContext)
    const { page } = useContext(PageContext)
    const [isLandscape, setIsLandscape] = useState(false)

    const [tile1, tile1Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "5%" } }))
    const [tile2, tile2Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "5%" } }))
    const [tile3, tile3Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "5%" } }))
    const [tile4, tile4Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "5%" } }))
    const [tile5, tile5Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "5%" } }))
    const [tile6, tile6Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "5%" } }))
    const [tile7, tile7Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "5%" } }))
    const [tile8, tile8Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "5%" } }))
    const [tile9, tile9Api] = useSpring(() => ({ from: { backgroundColor: '#333333', borderRadius: "5%" } }))

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

    function generateShadesOfColor(color, numOfShades) {
        const shades = [];
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16); 
    
        const increment = 1 / (numOfShades + 1);
    
        for (let i = 1; i <= numOfShades; i++) {
            const shadeR = Math.round(r * (1 - increment * i));
            const shadeG = Math.round(g * (1 - increment * i));
            const shadeB = Math.round(b * (1 - increment * i));
            const shade = '#' + ((1 << 24) + (shadeR << 16) + (shadeG << 8) + shadeB).toString(16).slice(1);
            shades.push(shade);
        }
    
        return shades;
    }

    useEffect(() => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        const shades = generateShadesOfColor(color, 9);
        tiles.forEach(({ api }, index) => {
            api.start({ backgroundColor: shades[shades.length - index - 1] });
        });
    }, [])

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
        if (page === 'home') {
            tiles.forEach(({ api }) => {
                api.start({ borderRadius: "5%", config: { duration: 250 } })
            })
        } else if (page === 'projects') {
            tiles.forEach(({ api }) => {
                api.start({ borderRadius: "25%", config: { duration: 250 } })
            })
        } else if (page === 'about') {
            tiles.forEach(({ api }) => {
                api.start({ borderRadius: "40%", config: { duration: 250 } })
            })
        }
    }, [page])

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
