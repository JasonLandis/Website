import React, { useContext, useEffect } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { CountContext } from '../context/CountContext'
import { PageContext } from '../context/PageContext'
import './Puzzles.css'


// Appear 99, Thanks for playing
const Thanks = () => {
    const { count } = useContext(CountContext);
    const { page } = useContext(PageContext);

    const [puzzleDisplay, puzzleDisplayApi] = useSpring(() => ({ from: { right: '-250px' } }));
    
    const appearNum = 99;

    useEffect(() => {
        if (count === appearNum) {
            puzzleDisplayApi.start({ right: '-10px' });
        } else if (count === appearNum + 1) {
            puzzleDisplayApi.start({ right: '-250px' });
        }

        if (page !== 'home') {
            puzzleDisplayApi.start({ right: '-250px' });
        }
    }, [count, page]);

    return (
        <>
            {(count === appearNum || count === appearNum + 1) && (
                <animated.div className="puzzle-container" style={{ ...puzzleDisplay }}>
                    Thanks for playing :)
                </animated.div>
            )}
        </>
    );
};

export default Thanks;
